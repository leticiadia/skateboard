import { motion } from "motion/react";

import type { AthleteGalleryItem } from "../../../mocks/athletes/type";

type GalleryItemProps = {
  item: AthleteGalleryItem;
  index: number;
  accentColor: string;
};

export function GalleryItem({ item, index, accentColor }: GalleryItemProps) {
  const isOffset = index % 2 !== 0;

  return (
    <motion.figure
      className={isOffset ? "md:mt-8" : ""}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className="group relative overflow-hidden">
        <img
          src={item.image}
          alt={item.caption ?? ""}
          className="aspect-[4/5] w-full object-cover transition-transform 
          duration-700 group-hover:scale-105"
        />

        <div
          className="absolute bottom-0 left-0 h-2 w-16"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <figcaption className="mt-5">
        <div
          className="flex flex-wrap items-center gap-2 text-xs font-bold 
          uppercase tracking-widest"
        >
          {item.year && <span style={{ color: accentColor }}>{item.year}</span>}

          {item.year && item.championshipSlug && (
            <span className="text-gray-300">/</span>
          )}

          {item.championshipSlug && (
            <span className="text-gray-500">{item.championshipSlug}</span>
          )}
        </div>

        {item.caption && (
          <p className="mt-2 max-w-md text-base leading-7 text-gray-600">
            {item.caption}
          </p>
        )}
      </figcaption>
    </motion.figure>
  );
}
