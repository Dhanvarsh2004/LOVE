import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHeartsCanvas from "@/components/FloatingHeartsCanvas";
import FirecrackerCanvas from "@/components/FirecrackerCanvas";

const CelebrationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-romantic-deep">
      {/* Canvas animations */}
      <FirecrackerCanvas />
      <FloatingHeartsCanvas />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 font-display text-5xl font-bold text-primary-foreground md:text-7xl drop-shadow-lg"
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-4 max-w-md font-body text-lg text-romantic-blush md:text-xl"
        >
          You make every moment magical ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-12 text-6xl"
        >
          💖
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/gallery")}
          className="rounded-full bg-primary px-12 py-4 font-display text-xl text-primary-foreground shadow-2xl animate-pulse-glow"
        >
          Start Our Journey
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CelebrationPage;
