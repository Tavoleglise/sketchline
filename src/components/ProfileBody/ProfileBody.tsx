import { FC } from "react";

// components
import { Tabs, Tab } from "@nextui-org/react";
import SketchCalendar from "../SketchCalendar/SketchCalendar";

const mockData = [
  {
    url: "/assets/images/test-images.jpg",
    updateDate: new Date(),
    username: "example",
    sketchlineName: "example",
    title: "example",
  },
];

const ProfileBody: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" radius="lg" size="lg">
          <Tab key="photos" title="Photos">
            <SketchCalendar />
          </Tab>
          <Tab key="music" title="Music">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Tab>
          <Tab key="videos" title="Videos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileBody;
