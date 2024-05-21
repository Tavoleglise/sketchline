import { FC, useEffect } from "react";
import ProfileHeader from "../../components/profilePageComponents/ProfileHeader/ProfileHeader";
import ProfileBody from "../../components/profilePageComponents/ProfileBody/ProfileBody";
import useClient from "../../hooks/useClient";

interface Props {
  // Define your component's props here
}

const ProfilePage: FC<Props> = () => {
  const { client, setClient } = useClient();
  useEffect(() => {
    setClient({
      username: "Tavoleglise",
      firstname: "Gustavo",
      lastname: "Leglise",
      profession: "Software Engineer",
      avatar: "https://avatars.githubusercontent.com/u/128492",
      email: "tavoleglise@gmail.com",
      location: {
        city: "São Paulo",
        country: "Brazil",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ProfileHeader {...client} />
      <ProfileBody />
    </div>
  );
};

export default ProfilePage;
