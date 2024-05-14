import React from "react";
import sketchImages from "../../data/sketchImages";
import SketchLine from "../../components/SketchLine/SketchLine";

interface Props {
  // Define your component's props here
}

const ProfilePage: React.FC<Props> = () => {
  return (
    <div>
      <SketchLine sketchDrawns={sketchImages} />
    </div>
  );
};

export default ProfilePage;
