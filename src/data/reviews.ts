export type RestaurantReview = {
  restaurantSlug: string;
  title?: string;
  subtitle?: string;
  images: string[];
  backgroundColor?: string; // CSS color value (hex, rgb, or named color)
};

// Helper functions to encode image paths with spaces and special characters
const vespertineImagePath = (filename: string) =>
  `/photos/reviews/Vespertine/${encodeURIComponent(filename)}`;

const rosettaImagePath = (filename: string) =>
  `/photos/reviews/Rosetta_09-06-2024/${encodeURIComponent(filename)}`;

export const restaurantReviews: RestaurantReview[] = [
  {
    restaurantSlug: "rosetta-mexico-city",
    backgroundColor: "#000000", // black
    images: [
      rosettaImagePath("DS Fine Dining _ Rosetta-0.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-1.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-2.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-3.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-4.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-5.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-6.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-7.png"),
      rosettaImagePath("DS Fine Dining _ Rosetta-8.png"),
    ],
  },
  {
    restaurantSlug: "vespertine-culver-city",
    backgroundColor: "#000000", // black
    images: [
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-0.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-1.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-2.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-3.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-4.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-5.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-6.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-7.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-8.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-9.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-10.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-11.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-12.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-13.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-14.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-15.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-16.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-17.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-18.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-19.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-20.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-21.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-22.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-23.png"),
      vespertineImagePath("DS Fine Dining | Vespertine 2.0-24.png"),
    ],
  },
];


