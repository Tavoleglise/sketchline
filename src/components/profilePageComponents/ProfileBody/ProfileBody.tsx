import { FC } from "react";

// components
import { Tabs, Tab } from "@nextui-org/react";
import SketchCalendar from "../../SketchCalendar/SketchCalendar";

const ProfileBody: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" radius="lg" size="lg">
          <Tab key="mainCalendar" title="Main Calendar">
            <SketchCalendar />
          </Tab>
          <Tab key="calendars" title="Calendars"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileBody;
