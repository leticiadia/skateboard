import { motion, useReducedMotion } from "motion/react";

interface ProfileImageProps {
  image: string;
  altText: string;
  accentColor: string;
}

const FRAME_TRANSITION = {
  duration: 0.5,
  ease: "easeOut" as const,
};

const PROFILE_TRANSITION = {
  duration: 0.8,
  delay: 0.2,
  ease: "easeOut" as const,
};

export function ProfileImage({
  image,
  altText,
  accentColor,
}: ProfileImageProps) {
  const shouldReduceMotion = useReducedMotion();

  const decorativeTransition = shouldReduceMotion
    ? { duration: 0 }
    : FRAME_TRANSITION;

  const profileTransition = shouldReduceMotion
    ? { duration: 0 }
    : PROFILE_TRANSITION;

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md px-8 py-8"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.3, delay: 0.15 }
      }
    >
      <motion.div
        aria-hidden="true"
        className="absolute right-0 top-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: accentColor }}
        initial={shouldReduceMotion ? false : { opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ...decorativeTransition,
          delay: shouldReduceMotion ? 0 : 0.15,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: accentColor }}
        initial={shouldReduceMotion ? false : { opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ...decorativeTransition,
          delay: shouldReduceMotion ? 0 : 0.25,
        }}
      />

      <motion.div
        className="relative z-10 overflow-hidden rounded-sm"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={profileTransition}
      >
        <img
          src={image}
          alt={altText}
          className="aspect-square w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
