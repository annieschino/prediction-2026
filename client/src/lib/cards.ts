import { type Card } from "@shared/schema";
import { predictions } from "./predictions";

const base = import.meta.env.BASE_URL;

export const cards: Card[] = Array.from({ length: 21 }, (_, i) => {
  const num = i + 1;
  const id = num < 10 ? `0${num}` : `${num}`;

  return {
    slug: `card-${id}`,
    title: ` `,
    thumbnail: `${base}assets/mini/mini-${id}.png`,
    images: [
      `${base}assets/cards/card-${id}-1.png`,
      `${base}assets/cards/card-${id}-2.png`,
      `${base}assets/cards/card-${id}-3.png`,
    ],
    prediction: predictions[i],
  };
});
