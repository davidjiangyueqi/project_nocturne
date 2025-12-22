export type Restaurant = {
  slug: string;
  name: string;
  city: string;
  country: string;
  cuisine?: string;
  latitude: number;
  longitude: number;
  thumbnail?: string;
  shortSummary?: string;
  rating?: string;
  visitedAt?: string; // ISO date or readable label for timeline
};

export const restaurants: Restaurant[] = [
  {
    slug: "rosetta-mexico-city",
    name: "Rosetta",
    city: "Mexico City",
    country: "Mexico",
    cuisine: "Modern Mexican",
    latitude: 19.4177,
    longitude: -99.1638,
    thumbnail: "/photos/restaurants/rosetta.jpg",
    shortSummary:
      "Mexico City's iconic Rosetta in Roma Norte; see the full PDF review for the complete story.",
    rating: "Review PDF available",
    visitedAt: "2024-09-06",
  },
  {
    slug: "vespertine-culver-city",
    name: "Vespertine",
    city: "Culver City",
    country: "USA",
    cuisine: "Fine dining",
    latitude: 34.0259,
    longitude: -118.3884,
    thumbnail: "/photos/restaurants/vespertine.jpg",
    shortSummary:
      "A multi-course, architecture-driven experience; see the full PDF review for the complete story.",
    rating: "Review PDF available",
    visitedAt: "2025-05-06",
  },
];


