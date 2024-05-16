import { FC } from "react";
import CalendarDayCard from "../CalendarDayCard/CalendarDayCard";

const mockCalendarData = [
  {
    year: 2022,
    month: "January",
    days: [
      { day: 1 },
      { day: 2 },
      { day: 3 },
      { day: 4 },
      { day: 5 },
      { day: 6 },
      { day: 7 },
      { day: 8 },
      { day: 9 },
      { day: 10 },
      { day: 11 },
      { day: 12 },
      { day: 13 },
      { day: 14 },
      { day: 15 },
      { day: 16 },
      { day: 17 },
      { day: 18 },
      { day: 19 },
      { day: 20 },
      { day: 21 },
      { day: 22 },
      { day: 23 },
      { day: 24 },
      { day: 25 },
      { day: 26 },
      { day: 27 },
      { day: 28 },
      { day: 29 },
    ],
  },
];

const SketchCalendar: FC = () => {
  return (
    <div>
      {mockCalendarData.map((monthData) => {
        return (
          <div>
            <div className="mt-16 mb-4 text-3xl font-bold">
              {monthData.month}
            </div>
            <div className="flex flex-wrap">
              {monthData.days.map((dayData) => {
                return <CalendarDayCard day={dayData.day} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SketchCalendar;
