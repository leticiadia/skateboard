import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

import { championships } from "../../championships/data/championships";
import type { AthleteGalleryItem } from "../types/athlete";

type GalleryItemProps = {
  item: AthleteGalleryItem;
  index: number;
  accentColor: string;
};

const HIDDEN_STATE = { opacity: 0, y: 35 } as const;
const VISIBLE_STATE = { opacity: 1, y: 0 } as const;

const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.2,
} as const;

const ANIMATION_TRANSITION = {
  duration: 0.7,
  ease: "easeOut",
} as const;

export function GalleryItem({ item, index, accentColor }: GalleryItemProps) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const isOffset = index % 2 !== 0;

  const championship = item.championshipSlug
    ? championships.find(
        (championship) => championship.slug === item.championshipSlug,
      )
    : undefined;

  const caption = item.caption ? t(item.caption) : "";

  const initialAnimation = shouldReduceMotion ? false : HIDDEN_STATE;

  return (
    <motion.figure
      className={isOffset ? "md:mt-8" : ""}
      initial={initialAnimation}
      whileInView={VISIBLE_STATE}
      viewport={VIEWPORT_CONFIG}
      transition={ANIMATION_TRANSITION}
    >
      <div className="group relative overflow-hidden">
        <img
          src={item.image}
          alt={caption}
          className="aspect-[4/5] w-full object-cover transition-transform 
          duration-700 group-hover:scale-105 motion-reduce:transition-none"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-2 w-16"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <figcaption className="mt-5">
        <div
          className="flex flex-wrap items-center gap-2 text-xs font-bold 
          uppercase tracking-widest"
        >
          {item.year != null && (
            <span style={{ color: accentColor }}>{item.year}</span>
          )}

          {item.year != null && championship && (
            <span aria-hidden="true" className="text-gray-300">
              /
            </span>
          )}

          {championship && (
            <span className="text-gray-500">{t(championship.title)}</span>
          )}
        </div>

        {item.caption && (
          <p className="mt-2 max-w-md text-base leading-7 text-gray-600">
            {caption}
          </p>
        )}
      </figcaption>
    </motion.figure>
  );
}
