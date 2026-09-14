export const ZODIACS = [
  { id: "rat", name: "鼠", left: "2.7%" },
  { id: "ox", name: "牛", left: "9.7%" },
  { id: "tiger", name: "虎", left: "18.7%" },
  { id: "rabbit", name: "兔", left: "28.6%" },
  { id: "dragon", name: "龙", left: "35.6%" },
  { id: "snake", name: "蛇", left: "43.5%" },
  { id: "horse", name: "马", left: "52.5%" },
  { id: "goat", name: "羊", left: "61.9%" },
  { id: "monkey", name: "猴", left: "69.4%" },
  { id: "rooster", name: "鸡", left: "76.4%" },
  { id: "dog", name: "狗", left: "86.9%" },
  { id: "pig", name: "猪", left: "95.5%" },
] as const;

export type ZodiacId = (typeof ZODIACS)[number]["id"];

export function getZodiac(id: string | undefined) {
  return ZODIACS.find((zodiac) => zodiac.id === id) ?? ZODIACS[2];
}
