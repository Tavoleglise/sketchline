import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileBody from "../../components/ProfileBody/ProfileBody";

interface Props {
  // Define your component's props here
}

const ProfilePage: React.FC<Props> = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
};

export default ProfilePage;
