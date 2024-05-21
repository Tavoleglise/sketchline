import { FC, useEffect, useState } from "react";
import { getDaysForCalendar, groupByYearAndMonth } from "../../utilities";
import CalendarYear from "./CalendarYear";
import { Sketch } from "../../models";

const mockSketches = [
  {
    id: 1,
    title: "test1",
    description: "",
    image: "",
    date: new Date(2024, 4, 10, 8, 42, 0, 0),
  },
  {
    id: 2,
    title: "test2",
    description: "",
    image: "",
    date: new Date(2024, 4, 15, 8, 42, 0, 0),
  },
  {
    id: 3,
    title: "test3",
    description: "",
    image: "",
    date: new Date(2024, 4, 12, 8, 42, 0, 0),
  },
  {
    id: 3,
    title: "test4",
    description: "",
    image: "",
    date: new Date(2023, 11, 24, 8, 42, 0, 0),
  },
];
interface CalendarProps {
  [year: number]: {
    [month: number]: Sketch[];
  };
}

const SketchCalendar: FC = () => {
  const initialCalendarData: CalendarProps = groupByYearAndMonth(
    getDaysForCalendar(mockSketches)
  );
  const [calendarData] = useState<CalendarProps>(initialCalendarData);
  useEffect(() => {
    console.log(initialCalendarData);
    // getDaysForCalendar(mockSketches);
  }, []);
  return (
    <div className="w-full">
      {Object.keys(calendarData).map((year) => {
        return (
          <CalendarYear
            key={year}
            year={parseInt(year)}
            months={calendarData[parseInt(year)]}
          />
        );
      })}
    </div>
  );
};

export default SketchCalendar;
