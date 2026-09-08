import { motion } from "motion/react";

interface ProfileImageProps {
  image: string;
  altText: string;
  accentColor: string;
}

export function ProfileImage({
  image,
  altText,
  accentColor,
}: ProfileImageProps) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.15,
      }}
    >
      <motion.div
        className="absolute right-0 top-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: accentColor }}
        initial={{ opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-20 w-20 lg:h-32 lg:w-32"
        style={{ backgroundColor: accentColor }}
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="relative z-10 overflow-hidden rounded-sm"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
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
