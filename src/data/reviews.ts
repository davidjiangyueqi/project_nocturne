export type RestaurantReview = {
  restaurantSlug: string;
  title?: string;
  subtitle?: string;
  images: string[];
  backgroundColor?: string; // CSS color value (hex, rgb, or named color)
};

// Helper function to encode image paths with spaces and special characters
const imagePath = (filename: string) => 
  `/photos/reviews/Vespertine/${encodeURIComponent(filename)}`;

export const restaurantReviews: RestaurantReview[] = [
  {
    restaurantSlug: "vespertine-culver-city",
    backgroundColor: "#000000", // black
    images: [
      imagePath("DS Fine Dining | Vespertine 2.0-0.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-1.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-2.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-3.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-4.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-5.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-6.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-7.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-8.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-9.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-10.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-11.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-12.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-13.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-14.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-15.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-16.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-17.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-18.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-19.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-20.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-21.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-22.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-23.png"),
      imagePath("DS Fine Dining | Vespertine 2.0-24.png"),
    ],
  },
];


