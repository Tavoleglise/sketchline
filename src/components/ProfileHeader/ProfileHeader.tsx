import { FC } from "react";
import HeaderUserInfo from "./HeaderUserInfo";
import useClient from "../../hooks/useClient";
// import { user } from "@nextui-org/react";

const ProfileHeader: FC = () => {
  const { username, lastName, firstName, profession } = useClient();

  return (
    <>
      <div className="relative h-[50vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-custom-bg bg-cover blur-sm z-0"></div>
        <div className="relative h-full flex justify-start items-end container mx-auto p-4 z-10">
          <HeaderUserInfo
            username={username}
            firstName={firstName}
            lastName={lastName}
            profession={profession}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
