import { FC } from "react";
import { Avatar } from "@nextui-org/react";
import { Client } from "../../../models/client.models";

const HeaderUserInfo: FC<Client> = ({
  username,
  firstname,
  lastname,
  profession,
  avatar,
  location,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Avatar src={avatar} className="w-40 h-40 text-large" />
      <div className="pl-4 text-white">
        <div className="text-5xl pb-4 font-bold">{username}</div>
        <div className="flex items-align mb-2">
          {`${firstname}
           ${lastname} | ${profession}`}
        </div>
        <div>{`${location?.city}, ${location?.country}`}</div>
      </div>
    </div>
  );
};

export default HeaderUserInfo;
