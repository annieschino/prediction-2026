import { type Card } from "@shared/schema";
import { predictions } from "./predictions";

// Helper to generate the 21 cards
// In a real scenario, you would edit the text and images here manually.


export const cards: Card[] = Array.from({ length: 21 }, (_, i) => {
  const num = i + 1;
  const id = num < 10 ? `0${num}` : `${num}`;
  
  return {
    slug: `card-${id}`,
    title: ` `,
    thumbnail: `/assets/mini/mini-${id}.png`,
    images: [
      `/assets/cards/card-${id}-1.png`,
      `/assets/cards/card-${id}-2.png`,
      `/assets/cards/card-${id}-3.png`,
    ],
    prediction: predictions[i]
  };
});
