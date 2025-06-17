export const getDateValue = (date: string): string => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  let dayWithZero = day.toString();
  let monthWithZero = month.toString();

  if (day < 10) {
    dayWithZero = `0${dayWithZero}`;
  }
  if (month < 10) {
    monthWithZero = `0${monthWithZero}`;
  }

  return `${dayWithZero}.${monthWithZero}.${year}`
}
