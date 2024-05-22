import { Year, Month, Sketch } from "../models";

export const getDaysForCalendar = (sketches: Sketch[], reversedDays: boolean = false): Sketch[] => {
  const setDefaultSketch = (date: Date): Sketch => {
    return {
      id: 0,
      title: "",
      description: "",
      image: "",
      date: date,
    };
  };
  const sortedSketches = [...sketches].sort(
    (a, b) => b.date.getTime() - a.date.getTime() 
  );
  const newestDate = sortedSketches[0].date;
  const oldestDate = sortedSketches[sortedSketches.length - 1].date;
  const days = [];
  for (
    let d = new Date();
    d > new Date(oldestDate);
    d.setDate(d.getDate() - 1)
  ) {
    const sketch = sortedSketches.find(
      (sketch) => sketch.date.toDateString() === d.toDateString()
    );

    if (sketch) {
      days.push(sketch);
    } else {
      days.push(setDefaultSketch(new Date(d)));
    }
  }
    if (reversedDays) {
        return days.reverse();
    }
  console.log(days);
  return days;
};

export const groupByYearAndMonth = (sketches: Sketch[]): Year[] => {
  const grouped: Year[] = [];

  for (const sketch of sketches) {
    const sketchYear = sketch.date.getFullYear();
    const sketchMonth = sketch.date.getMonth();
    const groupedYear: Year | undefined = grouped.find((year) => year.year === sketchYear);
    if (groupedYear) {
        const groupedMonth: Month | undefined = groupedYear.months.find((month) => month.month === sketchMonth);
        if (groupedMonth) {
            groupedMonth.sketches.push(sketch);
        } else {
            groupedYear.months.push({
            month: sketchMonth,
            sketches: [sketch],
            });
        }
    } else {
        grouped.push({
            year: sketchYear,
            months: [
            {
                month: sketchMonth,
                sketches: [sketch],
            },
            ],
        });
    }
  }
  console.log(grouped)
  return grouped;
};

export const calculateYearSketches = (months: Month[]) => {
  let count = 0;

  months.forEach((month) => {
    month.sketches.forEach((sketch: Sketch) => {
      if (sketch.title !== "" && sketch.image !== "") {
        count++;
      }
    });
  });

  return count;
};
