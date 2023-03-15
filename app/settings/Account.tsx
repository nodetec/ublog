"use client";

import { useContext, useEffect, useState } from "react";
import { RelayContext } from "@/app/context/relay-context";
import { utils } from "lnurl-pay";
import { bech32 } from "bech32";
import { NostrService } from "@/app/lib/nostr";
import { KeysContext } from "@/app/context/keys-context";
import { UserContext } from "@/app/context/user-context";
import { ProfilesContext } from "@/app/context/profiles-context";
import { ToastContext } from "@/app/context/toast-context";
import Group from "@/app/settings/Group";
import Input from "@/app/settings/Input";

const Account = () => {
  const initialProfileInfo = {
    name: "",
    about: "",
    picture: "",
    nip05: "",
    lud06: "",
    lud16: "",
    banner: "",
  };
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [newProfile, setNewProfile] = useState(profileInfo);
  const { relayUrl, publish, activeRelay } = useContext(RelayContext);
  const [convertedAddress, setConvertedAddress] = useState<string>("");
  const [noChanges, setNoChanges] = useState(true);
  const { createToast } = useContext(ToastContext);

  // @ts-ignore
  const { profiles, setProfiles, addProfiles, setReload, reload } =
    useContext(ProfilesContext);

  // @ts-ignore
  const { setUser } = useContext(UserContext);

  // @ts-ignore
  const { keys } = useContext(KeysContext);
  const loggedInPubkey = keys.publicKey;

  const resetProfile = () => {
    setProfileInfo(initialProfileInfo);
  };

  function removeUnderscoreAt(nip05: string) {
    if (nip05?.startsWith("_@")) {
      return nip05.slice(2);
    }
    return nip05;
  }

  const getProfile = () => {
    resetProfile();
    let relayName = relayUrl.replace("wss://", "");
    const profileKey = `profile_${relayName}_${loggedInPubkey}`;

    const profile = profiles[profileKey];
    if (!profile) {
      addProfiles([loggedInPubkey]);
    }
    if (profile && profile.content) {
      const profileContent = JSON.parse(profile.content);
      setProfileInfo({
        ...profileInfo,
        name: profileContent.name,
        about: profileContent.about,
        picture: profileContent.picture,
        banner: profileContent.banner,
        nip05: removeUnderscoreAt(profileContent.nip05),
        lud06: profileContent.lud06,
        lud16: profileContent.lud16,
      });
    }
  };

  useEffect(() => {
    setNewProfile(profileInfo);
  }, [profileInfo]);

  // eslint-disable-next-line
  useEffect(getProfile, [reload, relayUrl, activeRelay]);

  useEffect(() => {
    let isDifferent = false;
    Object.keys(newProfile).forEach((key) => {
      // @ts-ignore
      if (profileInfo[key] !== newProfile[key]) {
        isDifferent = true;
      }
    });
    setNoChanges(!isDifferent);
  }, [newProfile, profileInfo]);

  const handleSubmitNewProfile = async (e: any) => {
    e.preventDefault();

    const content = {
      name: newProfile.name,
      about: newProfile.about,
      picture: newProfile.picture,
      banner: newProfile.banner,
      nip05: newProfile.nip05,
      lud06: newProfile.lud06,
      lud16: newProfile.lud16,
    };

    const stringifiedContent = JSON.stringify(content);

    let event = NostrService.createEvent(
      0,
      loggedInPubkey,
      stringifiedContent,
      []
    );

    event = await NostrService.signEvent(event);

    const onOk = async () => {};

    const onSeen = async () => {
      setUser(event);
      let relayName = relayUrl.replace("wss://", "");
      profiles[`profile_${relayName}_${event.pubkey}`] = event;
      setReload(!reload);
      setProfiles(profiles);

      createToast({ message: "Profile updated", type: "success" });
    };

    const onFailed = async () => {
      createToast({ message: "Failed to update profile", type: "error" });
    };

    publish([relayUrl], event, onOk, onSeen, onFailed);
  };

  async function convert(newLnAddress: string) {
    if (newLnAddress) {
      const url = utils.decodeUrlOrAddress(newLnAddress);

      if (utils.isUrl(url)) {
        try {
          const response = await fetch(url);

          if (utils.isLnurl(newLnAddress)) {
            const data = await response.json();
            const newConvertedAddress = JSON.parse(data.metadata)[0][1];

            setNewProfile({
              ...newProfile,
              lud06: newLnAddress,
            });
            setConvertedAddress(newConvertedAddress);
            // console.log(newConvertedAddress); // chrisatmachine@getalby.com
          }

          if (utils.isLightningAddress(newLnAddress)) {
            let words = bech32.toWords(Buffer.from(url, "utf8"));
            let newConvertedAddress = bech32.encode("lnurl", words, 2000);
            setNewProfile({
              ...newProfile,
              lud06: newLnAddress,
            });
            setConvertedAddress(newConvertedAddress);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    async function getLnAddress() {
      if (newProfile.lud16) {
        convert(newProfile.lud16);
      }
    }
    getLnAddress();
    // eslint-disable-next-line
  }, [newProfile.lud16]);

  return (
    <Group title="Account">
      <Input
        label="Name"
        value={newProfile.name}
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <Input
        label="NIP-05 ID"
        value={newProfile.nip05}
        onChange={(e) =>
          setNewProfile({ ...newProfile, nip05: e.target.value })
        }
      />
      <Input
        label="About"
        value={newProfile.about}
        onChange={(e) =>
          setNewProfile({ ...newProfile, about: e.target.value })
        }
      />
      <Input
        label="Picture URL"
        value={newProfile.picture}
        onChange={(e) =>
          setNewProfile({ ...newProfile, picture: e.target.value })
        }
      />
      <Input
        label="Banner URL"
        value={newProfile.banner}
        onChange={(e) =>
          setNewProfile({ ...newProfile, banner: e.target.value })
        }
      />
      <Input
        label="Lightning Tips"
        value={newProfile.lud16}
        labelAlt={convertedAddress}
        onChange={(e) =>
          setNewProfile({ ...newProfile, lud16: e.target.value })
        }
      />
      {noChanges ? null : (
        <div className="flex gap-2 justify-end sticky py-4 bottom-0 bg-base-100">
          <button
            className="btn btn-primary btn-outline"
            onClick={() => setNewProfile(profileInfo)}
          >
            Reset
          </button>
          <button className="btn btn-primary" onClick={handleSubmitNewProfile}>
            Save
          </button>
        </div>
      )}
    </Group>
  );
};

export default Account;
