import designs from "@/lib/design/personalities.json";

/** Content and artwork from the corresponding Figma result frame. */
export type Personality = (typeof designs)[number];
export const PERSONALITIES = designs.filter((item) => !/^\d$/.test(item.id));
export const NUMBER_PERSONALITIES = designs.filter((item) => /^\d$/.test(item.id)).sort((a, b) => Number(a.id) - Number(b.id));

export function getPersonality(id?: string): Personality {
  return PERSONALITIES.find((item) => item.id === id) ?? PERSONALITIES.find((item) => item.id === "rat")!;
}
export function getNumberPersonality(number: number): Personality {
  return NUMBER_PERSONALITIES[number - 1] ?? NUMBER_PERSONALITIES[0];
}
export { isValidDate, getLuckyNumber } from "@/lib/date-personality";
