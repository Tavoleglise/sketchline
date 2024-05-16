import { FC, useEffect } from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import useClient from "../../hooks/useClient";

interface Props {
  // Define your component's props here
}

const ProfilePage: FC<Props> = () => {
  const { client, setClient } = useClient();
  useEffect(() => {
    setClient({
      username: "Tavoleglise",
      firstName: "Gustavo",
      lastName: "Leglise",
      profession: "Software Engineer",
      avatar: "https://avatars.githubusercontent.com/u/128492",
      email: "tavoleglise@gmail.com",
    });
  }, []);
  return (
    <div>
      <ProfileHeader
        username={client.username}
        firstname={client.firstName}
        lastname={client.lastName}
        profession={client.profession}
        avatar={client.avatar}
      />
      <ProfileBody />
    </div>
  );
};

export default ProfilePage;
