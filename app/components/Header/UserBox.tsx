import { utils } from "lnurl-pay";
import { LightningCharge, PatchCheck } from "@/app/icons";
import { FC } from "react";

interface Profile {
  name?: string;
  lud16?: string;
  nip05?: string;
  about?: string;
  picture?: string;
  banner?: string;
}

interface UserBoxProps {
  profile: Profile;
}

const UserBox: FC<UserBoxProps> = ({ profile }) => {
  const { name, lud16, nip05, about, picture, banner } = profile;

  return (
    <div className="rounded-box bg-neutral text-neutral-content overflow-hidden mt-4">
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
          className="w-24 h-24 min-w-[6rem] rounded-full border-4 border-neutral"
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
