import { FC } from "react";
import HeaderUserInfo from "./HeaderUserInfo";
import { Client } from "../../../models/client.models";
// import { user } from "@nextui-org/react";

const ProfileHeader: FC<Client> = (props) => {
  return (
    <>
      <div className="relative h-[50vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-custom-bg bg-cover blur-sm z-0"></div>
        <div className="relative h-full flex justify-start items-end container mx-auto p-4 z-10">
          <HeaderUserInfo {...props} />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
