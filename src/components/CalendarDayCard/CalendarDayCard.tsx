import { FC } from "react";
import { Skeleton, Card } from "@nextui-org/react";

interface CalendarDayCardProps {
  day?: number;
  image?: string;
  title?: string;
}

const CalendarDayCard: FC<CalendarDayCardProps> = ({ day }) => {
  if (!day) {
    return <Skeleton className="flex rounded-lg m-2 w-52 h-52" />;
  }
  return (
    <div className="flex flex-grow justify-center items-center m-2 w-52 h-52 rounded-md bg-rose-200">
      {day}
    </div>
  );
};

export default CalendarDayCard;
