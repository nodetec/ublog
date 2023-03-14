"use client";
import { utils } from "lnurl-pay";
import { LightningCharge, PatchCheck } from "@/app/icons";
import { FC, useContext, useEffect, useState } from "react";
import { ProfilesContext } from "@/app/context/profiles-context";
import { RelayContext } from "@/app/context/relay-context";
import { npub } from "@/ublog.config";
import { nip19 } from "nostr-tools";

interface Profile {
  name?: string;
  lud16?: string;
  nip05?: string;
  about?: string;
  picture?: string;
  banner?: string;
}

interface UserBoxProps {}

const UserBox: FC<UserBoxProps> = ({}) => {
  // @ts-ignore
  const { addProfiles, profiles, reload } = useContext(ProfilesContext);
  const { relayUrl } = useContext(RelayContext);

  const initialProfile: Profile = {
    name: "",
    lud16: "",
    nip05: "",
    about: "",
    picture: "",
    banner: "",
  };

  const [profile, setProfile] = useState(initialProfile);

  let profilePubkey = "";
  try {
    profilePubkey = nip19.decode(npub).data.toString();
  } catch (e) {
    console.log(e);
  }

  const getProfile = () => {
    let relayName = relayUrl.replace("wss://", "");
    const profileKey = `profile_${relayName}_${profilePubkey}`;
    const profile = profiles[profileKey];
    if (!profile) {
      addProfiles([profilePubkey]);
    }
    if (profile && profile.content) {
      const profileContent = JSON.parse(profile.content);
      setProfile(profileContent);
    }
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, [reload, relayUrl]);
  const { name, lud16, nip05, about, picture, banner } = profile;

  return (
    <div className="rounded-box overflow-hidden my-4">
      {banner ? (
        <img
          className="min-h-[8rem] h-auto max-h-[24rem] w-full object-cover"
          src={banner}
          alt=""
        />
      ) : null}
      <div
        className={`md:px-12 flex items-center md:items-start gap-6 flex-col md:flex-row px-4 ${
          banner ? "-translate-y-8" : "py-6"
        }`}
      >
        <img
          className="w-24 h-24 min-w-[6rem] rounded-full border-4 border-base-100"
          src={picture}
          alt=""
        />
        <div
          className={`text-center md:text-start flex flex-col gap-2 items-center md:items-start ${
            banner ? "md:mt-10" : ""
          }`}
        >
          {name ? <h2 className="font-bold text-2xl">{name}</h2> : null}
          {nip05 ? (
            <p className="text-sm flex items-center gap-2">
              {nip05}
              <PatchCheck className="text-info" size="12" />
            </p>
          ) : null}
          {lud16 && utils.isLightningAddress(lud16) ? (
            <p className="text-sm flex items-center gap-2">
              {lud16}
              <LightningCharge className="text-warning" size="12" />
            </p>
          ) : null}
          {about ? <p>{about}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default UserBox;
