import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const chapters = [

  { id: 1, title: "Our first step", emoji: "🌹", description: "Where it all began" },
  { id: 2, title: "Two Years of Us", emoji: "✈️", description: "Journeys we shared" },
  { id: 3, title: "Third Chapter", emoji: "☕", description: "The quiet magic" },
  { id: 4, title: "Eyes of Beauty", emoji: "💍", description: "Soulful radiant beauty" },
  { id: 1, title: "Our First Meeting", emoji: "🌹", description: "Where it all began" },
  { id: 2, title: "Adventures Together", emoji: "✈️", description: "Journeys we shared" },
  { id: 3, title: "Little Moments", emoji: "☕", description: "The quiet magic" },
  { id: 4, title: "Forever & Always", emoji: "💍", description: "Our future story" },];

const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-romantic-gradient px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-4 font-display text-4xl font-bold text-gradient-romantic md:text-5xl"
      >
        Our Love Story
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-12 text-muted-foreground font-body text-lg"
      >
        Choose a chapter to explore
      </motion.p>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {chapters.map((ch, i) => (
          <motion.button
            key={ch.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i + 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(`/chapter/${ch.id}`)}
            className="flex flex-col items-center rounded-2xl bg-card p-8 shadow-lg transition-shadow hover:shadow-2xl"
          >
            <span className="mb-4 text-5xl">{ch.emoji}</span>
            <h2 className="font-display text-xl font-semibold text-foreground">{ch.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{ch.description}</p>
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => navigate("/celebration")}
        className="mt-10 font-body text-sm text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
      >
        ← Back to Celebration
      </motion.button>
    </div>
  );
};

export default GalleryPage;
