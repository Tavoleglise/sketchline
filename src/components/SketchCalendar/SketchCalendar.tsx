import { FC, useEffect, useState } from "react";
import { getDaysForCalendar, groupByYearAndMonth } from "../../utilities";
import CalendarYear from "./CalendarYear";
import { Sketch, Year } from "../../models";

const mockSketches = [
  {
    id: 1,
    title: "test1",
    description: "",
    image: "/assets/images/test-image2.jpg",
    date: new Date(2024, 4, 10, 8, 42, 0, 0),
  },
  {
    id: 2,
    title: "test2",
    description: "",
    image: "/assets/images/test-image2.jpg",
    date: new Date(2024, 4, 15, 8, 42, 0, 0),
  },
  {
    id: 3,
    title: "test3",
    description: "",
    image: "/assets/images/test-image2.jpg",
    date: new Date(2024, 4, 12, 8, 42, 0, 0),
  },
  {
    id: 3,
    title: "test4",
    description: "",
    image: "/assets/images/test-image2.jpg",
    date: new Date(2023, 11, 24, 8, 42, 0, 0),
  },
];
interface CalendarProps {
  [year: number]: {
    [month: number]: Sketch[];
  };
}

const prueba: Year[] = [
  {
    year: 2023,
    months: [
      {
        month: 11,
        sketches: [
          {
            id: 3,
            title: "test4",
            description: "",
            image: "/assets/images/test-image2.jpg",
            date: new Date(2023, 11, 24, 8, 42, 0, 0),
          },
        ],
      },
    ],
  },
];

const SketchCalendar: FC = () => {
  const [calendarData, setCalendarData] = useState<Year[]>([]);
  useEffect(() => {
    setCalendarData(groupByYearAndMonth(getDaysForCalendar(mockSketches)));
  }, []);
  return (
    <div className="w-full">
      {calendarData.map((yearData) => {
        return (
          <CalendarYear
            key={yearData.year}
            year={yearData.year}
            months={yearData.months}
          />
        );
      })}
    </div>
  );
};

export default SketchCalendar;
