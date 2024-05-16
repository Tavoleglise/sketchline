export const getDays = (): number[][] => {
  const daysOfYear: number[][] = [];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(2022, month + 1, 0).getDate();
    const monthDays: number[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      monthDays.push(day);
    }

    daysOfYear.push(monthDays);
  }

  return daysOfYear;
};
