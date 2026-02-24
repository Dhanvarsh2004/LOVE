import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Data for each chapter — poems, placeholder images
const chapterData: Record<number, { title: string; emoji: string; poem: string; images: string[] }> = {
  1: {
    title: "Our First Meeting",
    emoji: "🌹",
    poem: `The world stood still the day we met,\nA moment I will never forget.\nYour eyes, a universe untold,\nA love story waiting to unfold.\n\nIn crowded rooms you were my light,\nTurning ordinary into bright.\nFrom that first glance, I always knew—\nMy heart was always meant for you.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  2: {
    title: "Adventures Together",
    emoji: "✈️",
    poem: `We chased the sun across the sea,\nYou and I, wild and free.\nEvery road became our song,\nWith you is where I belong.\n\nMountain peaks and city lights,\nStarlit walks on summer nights.\nEvery journey, hand in hand,\nTogether we explore this land.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  3: {
    title: "Little Moments",
    emoji: "☕",
    poem: `Morning coffee, sleepy eyes,\nLazy Sundays, butterflies.\nIn the silence, love speaks loud,\nYou're my sun behind the cloud.\n\nA stolen kiss, a whispered word,\nThe sweetest song I ever heard.\nIn little things, our love resides—\nA gentle warmth that never hides.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  4: {
    title: "Forever & Always",
    emoji: "💍",
    poem: `Forever starts with you and me,\nA love as vast as any sea.\nThrough every storm, through every day,\nI choose you in every way.\n\nGrow old with me, the best is near,\nWith you there's nothing left to fear.\nForever written in the stars above—\nAn endless, ever-burning love.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
};

const ChapterPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chapter = chapterData[Number(id)];

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-romantic-gradient">
        <p className="text-muted-foreground">Chapter not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-romantic-gradient px-4 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-5xl">{chapter.emoji}</span>
          <h1 className="mt-4 font-display text-3xl font-bold text-gradient-romantic md:text-5xl">
            {chapter.title}
          </h1>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 grid grid-cols-2 gap-4"
        >
          {chapter.images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 * i + 0.4, duration: 0.4 }}
              className="aspect-square overflow-hidden rounded-2xl bg-card shadow-md"
            >
              <img
                src={src}
                alt={`${chapter.title} photo ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Poem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mb-12 rounded-2xl bg-card p-8 shadow-lg md:p-12"
        >
          <h2 className="mb-6 text-center font-display text-xl text-primary">A Poem for You</h2>
          <p className="whitespace-pre-line text-center font-body text-base leading-relaxed text-foreground md:text-lg">
            {chapter.poem}
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/gallery")}
            className="rounded-full bg-primary px-8 py-3 font-display text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            ← Back to Gallery
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ChapterPage;
