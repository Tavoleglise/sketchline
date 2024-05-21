import { FC, useEffect } from "react";
import { Sketch } from "../../models";
import CalendarMonth from "./CalendarMonth";

interface CalendarYearProps {
  year: number;
  months: { [month: number]: Sketch[] };
}

const CalendarYear: FC<CalendarYearProps> = ({ year, months }) => {
  useEffect(() => {
    console.log("FromCalendarYear", year, months);
  }, []);
  return (
    <div className="">
      {year}
      {Object.keys(months).map((month) => {
        return (
          <CalendarMonth
            key={month}
            monthNumber={parseInt(month)}
            sketches={months[parseInt(month)]}
          />
        );
      })}
    </div>
  );
};
export default CalendarYear;
