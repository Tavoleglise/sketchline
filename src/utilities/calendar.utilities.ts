import { Sketch } from "../models";

export const getDaysForCalendar = (sketches: Sketch[]): Sketch[] => {
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
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  const oldestDate = sortedSketches[0].date;
  const days = [];
  for (
    let d = new Date(oldestDate);
    d <= new Date();
    d.setDate(d.getDate() + 1)
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
  return days;
};

export const groupByYearAndMonth = (sketches: Sketch[]) => {
  const grouped: { [key: number]: { [key: number]: Sketch[] } } = {};

  for (const sketch of sketches) {
    const year = sketch.date.getFullYear();
    const month = sketch.date.getMonth();

    if (!grouped[year]) {
      grouped[year] = {};
    }

    if (!grouped[year][month]) {
      grouped[year][month] = [];
    }

    grouped[year][month].push(sketch);
  }

  return grouped;
};
