import { FC } from "react";
import { Sketch } from "../../models";
import { monthsNames } from "../../utilities";
import CalendarDayCard from "./CalendarDayCard";

interface CalendarMonthProps {
  monthNumber: number;
  sketches: Sketch[];
}

const CalendarMonth: FC<CalendarMonthProps> = ({ monthNumber, sketches }) => {
  return (
    <div>
      {monthsNames[monthNumber]}
      <div className="flex flex-wrap">
        {sketches.map((sketch) => {
          return <CalendarDayCard key={sketch.id} {...sketch} />;
        })}
      </div>
    </div>
  );
};
export default CalendarMonth;
