import { FC, useEffect, useState } from "react";
import { Month } from "../../models";
import CalendarMonth from "./CalendarMonth";
import { calculateYearSketches } from "../../utilities";

interface CalendarYearProps {
  year: number;
  months: Month[];
}

const CalendarYear: FC<CalendarYearProps> = ({ year, months }) => {
  const [sketchesCount, setSketchesCount] = useState<number>(0);
  useEffect(() => {
    // console.log("FromCalendarYear", year, months);
    setSketchesCount(calculateYearSketches(months));
  }, []);
  return (
    <div className=" pl-16 pr-16 pb-16 mb-16">
      <div className="p-4 rounded-t-3xl text-3xl w-full bg-red-200 font-bold">
        {year}
        <span className="font-semibold text-lg ml-4">{`${sketchesCount} ${
          sketchesCount === 1 ? "Sketch" : "Sketches"
        }`}</span>
      </div>

      {months.map((monthData) => {
        return (
          <CalendarMonth
            key={monthData.month}
            monthNumber={monthData.month}
            sketches={monthData.sketches}
          />
        );
      })}
    </div>
  );
};
export default CalendarYear;
