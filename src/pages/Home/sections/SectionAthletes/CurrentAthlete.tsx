import { motion, AnimatePresence } from "motion/react";
import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";
import type { Athlete } from "./types";

type AthleteProps = {
  athlete: Athlete;
};

export function CurrentAthlete({ athlete }: AthleteProps) {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={athlete.id}
          src={athlete.image}
          alt={athlete.name}
          loading="lazy"
          className="w-full h-80 object-cover rounded-2xl lg:w-[28rem] lg:h-[30rem]"
          initial={{ opacity: 0, x: 2, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -80, scale: 0.98 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div
        className="flex items-center justify-center gap-2 absolute bottom-0 
      bg-yellow-300 w-full h-24 rounded-b-lg"
      >
        <h2 className="text-2xl font-bold">{athlete.name}</h2>

        <ArrowCircleUpRightIcon size={28} weight="fill" />
      </div>
    </div>
  );
}
