import { FC } from "react";
import { Avatar } from "@nextui-org/react";

interface HeaderUserInfoProps {
  firstName: string;
  lastName: string;
  username: string;
  avatar?: string;
  profession?: string;
}

const HeaderUserInfo: FC<HeaderUserInfoProps> = ({
  username,
  firstName,
  lastName,
  profession,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-40 h-40 text-large"
      />
      <div className="pl-4 text-white">
        <div className="text-5xl pb-4 font-bold">{username}</div>
        <div className="flex items-align">
          {`${firstName}
           ${lastName} | ${profession}`}
        </div>
      </div>
    </div>
  );
};

export default HeaderUserInfo;