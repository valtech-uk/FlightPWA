export const addDays = (date: Date, days: number, minutes: number) => {
  const newDate = new Date(date);
  const plop = new Date(newDate.setDate(newDate.getDate() + days));
  return new Date(plop.setMinutes(newDate.getDate() + minutes));
};
