import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";

import type { AthleteProfileData } from "../types/athlete-profile";

import { Container } from "../../../components/layout/Container";
import { GalleryItem } from "./GalleryItem";

type AthleteGalleryProps = {
  gallery: AthleteProfileData["gallery"];
  accentColor: string;
};

const HIDDEN_STATE = { opacity: 0, y: 25 };
const VISIBLE_STATE = { opacity: 1, y: 0 };

const VIEWPORT_OPTIONS = {
  once: true,
  amount: 0.3,
} as const;

const SECTION_TRANSITION = {
  duration: 0.6,
  ease: "easeOut" as const,
};

export function AthleteGallery({ gallery, accentColor }: AthleteGalleryProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const initialAnimation = shouldReduceMotion ? false : HIDDEN_STATE;

  const animationTransition = shouldReduceMotion
    ? { duration: 0 }
    : SECTION_TRANSITION;

  return (
    <section className="my-10 w-full">
      <Container>
        <motion.div
          className="max-w-2xl"
          initial={initialAnimation}
          whileInView={VISIBLE_STATE}
          viewport={VIEWPORT_OPTIONS}
          transition={animationTransition}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            {t("athlete-gallery.label")}
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            {t("athlete-gallery.headline")}
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
          {gallery.map((galleryItem, index) => (
            <GalleryItem
              key={`${galleryItem.image}-${index}`}
              item={galleryItem}
              index={index}
              accentColor={accentColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
