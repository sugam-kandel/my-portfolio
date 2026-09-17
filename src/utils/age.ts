export const DATE_OF_BIRTH = { year: 2009, month: 10, day: 24 };

export function getAge(now: Date = new Date()): number {
  let age = now.getFullYear() - DATE_OF_BIRTH.year;
  const monthDiff = now.getMonth() + 1 - DATE_OF_BIRTH.month;
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < DATE_OF_BIRTH.day)) {
    age--;
  }
  return age;
}