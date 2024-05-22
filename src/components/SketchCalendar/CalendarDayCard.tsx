import { FC } from "react";
import { Card } from "@nextui-org/react";
import { Sketch } from "../../models";

const CalendarDayCard: FC<Sketch> = ({
  id,
  title,
  description,
  image,
  date,
}) => {
  return (
    <Card className="flex justify-center items-center m-2 w-52 h-52 rounded-jg">
      {title ? title : date.getDate()}
    </Card>
  );
};

export default CalendarDayCard;
