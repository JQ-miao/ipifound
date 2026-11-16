export function isValidDate(year: string, month: string, day: string): boolean {
  if (!/^\d{4}$/.test(year) || !/^\d{1,2}$/.test(month) || !/^\d{1,2}$/.test(day)) return false;
  const y = Number(year), m = Number(month), d = Number(day);
  if (y < 1 || m < 1 || m > 12 || d < 1) return false;
  const leap = y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0);
  return d <= [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
}
/** Add every date digit repeatedly until a single number from 1–9 remains. */
export function getLuckyNumber(year: string, month: string, day: string): number | null {
  if (!isValidDate(year, month, day)) return null;
  const sum = [...`${year}${month}${day}`].reduce((total, digit) => total + Number(digit), 0);
  return ((sum - 1) % 9) + 1;
}
