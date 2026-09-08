import { motion } from "motion/react";

import type { AthleteProfileData } from "../../../../mocks/athletes/profile.types";

import { GalleryItem } from "../../../../components/layout/GalleryItem/GalleryItem";
import { Container } from "../../../../components/layout/container/Container";

type AthleteGalleryProps = {
  gallery: AthleteProfileData["gallery"];
  accentColor: string;
};

export function AthleteGallery({ gallery, accentColor }: AthleteGalleryProps) {
  return (
    <section className="w-full my-10">
      <Container>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <span
            className="text-sm font-bold uppercase tracking-widest"
            style={{ color: accentColor }}
          >
            Momentos
          </span>

          <h2
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl 
            lg:text-5xl"
          >
            Momentos que marcaram essa trajetória.
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-24">
          {gallery.map((item, index) => (
            <GalleryItem
              key={`${item.image}-${index}`}
              item={item}
              index={index}
              accentColor={accentColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
