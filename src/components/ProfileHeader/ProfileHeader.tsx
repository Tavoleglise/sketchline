import { FC } from "react";
import HeaderUserInfo from "./HeaderUserInfo";
// import { user } from "@nextui-org/react";
interface ProfileHeaderProps {
  username: string;
  firstname: string;
  lastname: string;
  profession?: string;
  avatar?: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  username,
  firstname,
  lastname,
  profession,
  avatar,
}) => {
  return (
    <>
      <div className="relative h-[50vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-custom-bg bg-cover blur-sm z-0"></div>
        <div className="relative h-full flex justify-start items-end container mx-auto p-4 z-10">
          <HeaderUserInfo
            username={username}
            firstName={firstname}
            lastName={lastname}
            profession={profession}
            avatar={avatar}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
