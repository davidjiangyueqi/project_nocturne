import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { restaurantReviews } from "../data/reviews";

export function FoodDetailPage() {
  const { restaurantSlug } = useParams<{ restaurantSlug: string }>();
  const navigate = useNavigate();

  const review = restaurantReviews.find((r) => r.restaurantSlug === restaurantSlug);

  if (!review) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-400">Review not found</p>
      </div>
    );
  }

  const backgroundColor = review.backgroundColor || "#0f172a"; // Default to slate-900

  return (
    <div 
      className="fixed inset-0 z-40 overflow-y-auto"
      style={{ backgroundColor }}
    >
      {/* Floating back button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 hover:border-white/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="h-5 w-5 text-white" />
      </motion.button>

      {review.images.map((imageSrc, imageIndex) => (
        <div key={imageIndex} className="flex justify-center" style={{ backgroundColor }}>
          <img
            src={imageSrc}
            alt={`Review page ${imageIndex + 1}`}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}


