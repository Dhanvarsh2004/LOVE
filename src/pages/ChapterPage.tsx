import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
<<<<<<< HEAD
import Y1PIC1 from "src/images/Y1PIC1.jpeg";
import OurFirstStepBackground from "src/images/OurFirstStepBackground.jpeg";
=======

>>>>>>> e5af5ca066a7bfdf0d803ab70f621cc8ae09a0d6
// Data for each chapter — poems, placeholder images
const chapterData: Record<number, { title: string; emoji: string; poem: string; images: string[] }> = {
  1: {
    title: "Our First Meeting",
    emoji: "🌹",
<<<<<<< HEAD
    poem: `My love for you overflows from the deepest part of my heart, my baby. One day I stood before Lord Shiva and prayed with all my soul, asking him for just one special girl to stay with me for the rest of my life. From that pure and sacred place, he blessed me with you............ Later, I prayed again before Andal, asking for that same girl to always remain mine. And today, that girl is my soulmate. Your soul and my soul are no longer two — they have become one, forever connected in love............ On the sacred night of Shivaratri, Lord Shiva gave me a sign that you were meant to be mine forever. He sent a spiritual woman who looked exactly like you, and in that moment I realized something beautiful — even God wants us to be together, to love each other, and to walk through this life side by side forever.\n\n\n\nThe first year with you felt like a beautiful dream,\nEvery moment glowing with a soft golden gleam.\nYour smile became the home my heart knew\nEvery day I fell a little deeper for you.\n\n,And from that first year, I knew my forever was you. 💕`,
    images: ["/Y1PIC1.jpeg", "/Y1PIC2.jpeg", "/Y1PIC3.jpeg", "/Y1PIC4.jpeg"],
=======
    poem: `The world stood still the day we met,\nA moment I will never forget.\nYour eyes, a universe untold,\nA love story waiting to unfold.\n\nIn crowded rooms you were my light,\nTurning ordinary into bright.\nFrom that first glance, I always knew—\nMy heart was always meant for you.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
>>>>>>> e5af5ca066a7bfdf0d803ab70f621cc8ae09a0d6
  },
  2: {
    title: "Adventures Together",
    emoji: "✈️",
<<<<<<< HEAD
    poem: `Chellam, you are the most beautiful thing that has ever happened in my life. I still remember that day so clearly — the day we sat together eating pasta. It may have looked like a simple moment to anyone else, but for us it was something much deeper and more special.That was the moment when everything between us changed. It was the point where our relationship became even more perfect, where our hearts and body understood each other in a way words could never fully explain. In that moment it felt like two separate souls slowly became one.From that day onwards, we never stopped loving each other. Every day that passed only made our bond stronger, and our love kept growing bigger and bigger. What started as something beautiful slowly became the most precious and powerful love I have ever known.\n\nTwo years with you feels like a dream,\nA love brighter than it may seem.\nEvery day my heart chooses you,\n\nForever begins with us two. 💕`,
    images: ["/Y2PIC1.jpeg", "/Y2PIC2.jpeg", "/Y2PIC3.jpeg", "/Y2PIC4.jpeg"],
=======
    poem: `We chased the sun across the sea,\nYou and I, wild and free.\nEvery road became our song,\nWith you is where I belong.\n\nMountain peaks and city lights,\nStarlit walks on summer nights.\nEvery journey, hand in hand,\nTogether we explore this land.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
>>>>>>> e5af5ca066a7bfdf0d803ab70f621cc8ae09a0d6
  },
  3: {
    title: "Little Moments",
    emoji: "☕",
<<<<<<< HEAD
    poem: `By our third year together, we realized that love is not just about hugs and kisses. Love is about standing beside each other through every hardship without ever giving up. It is about understanding one another deeply and facing every problem together so that we can overcome it and grow into a perfect match. During this year, we grew stronger and stronger together. Step by step, we became more than just two people in love — we became a team. A team that can stand against the world to protect the things we love and fight for our dreams. And as time goes on, we will keep growing together, stronger every day. One day, we will look back and realize that we achieved everything we ever dreamed of, because we faced the world side by side.\n\nThree years have passed, yet it feels like the start,\nEvery moment with you lives deep in my heart.\nThrough every storm and every sunny day,\nYour love has always guided my way.\n\nAnd with you beside me, forever feels closer each day. 💕`,
    images: ["/Y3PIC1.jpeg", "/Y3PIC2.jpeg", "/Y3PIC3.jpeg", "/Y3PIC4.jpeg"],
  },
  4: {
    title: "Eyes of Beauty",
    emoji: "💍",
    poem: `It has already been five years since I saw your gorgeous and beautiful eyes. Three years ago on this day(8-3-2023)you said you would love me forever, ever since you have been showering me with infinite amount of love. I can still remember that day when I promised I would take you out to the beach every time and will spend our life there....... Since then I have never stopped dreaming about taking you to a foreign beach and make love with you forever....My love I could never stop thinking about your eyes it glows like a wonderful and marvelous star, even moon will feel jealous of your face's glow.Hemu my favorite thing to do is to explain our love story again and again. I will contiue doing this till the world ends.\n\n\nFive years since I first saw your eyes,\nYet they still feel like my sunrise.\nThree years since you promised forever,\nAnd you’ve kept that vow in every weather\nWith you, my love, every dream feels closer than ever. 💕,\n\nI LOVE YOU SOO MUCH PONDATI`,
    images: ["/Y4PIC2.jpeg", "/Y4PIC1.jpeg", "/Y4PIC3.jpeg", "/Y4PIC4.jpeg","/Y4PIC5.jpeg", "/Y4PIC6.jpeg", "/Y4PIC7.jpeg", "/Y4PIC8.jpeg",],
=======
    poem: `Morning coffee, sleepy eyes,\nLazy Sundays, butterflies.\nIn the silence, love speaks loud,\nYou're my sun behind the cloud.\n\nA stolen kiss, a whispered word,\nThe sweetest song I ever heard.\nIn little things, our love resides—\nA gentle warmth that never hides.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  4: {
    title: "Forever & Always",
    emoji: "💍",
    poem: `Forever starts with you and me,\nA love as vast as any sea.\nThrough every storm, through every day,\nI choose you in every way.\n\nGrow old with me, the best is near,\nWith you there's nothing left to fear.\nForever written in the stars above—\nAn endless, ever-burning love.`,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
>>>>>>> e5af5ca066a7bfdf0d803ab70f621cc8ae09a0d6
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
<<<<<<< HEAD
          <h2 className="mb-6 text-center font-display text-xl text-primary">My love</h2>
=======
          <h2 className="mb-6 text-center font-display text-xl text-primary">A Poem for You</h2>
>>>>>>> e5af5ca066a7bfdf0d803ab70f621cc8ae09a0d6
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
