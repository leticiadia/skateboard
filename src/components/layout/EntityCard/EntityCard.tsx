import { Link } from "react-router-dom";
import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";

export type EntityCardColor = "yellow" | "blue" | "red";

interface EntityCardProps {
  name: string;
  image: string;
  href: string;
  color: EntityCardColor;
}

const colorClasses: Record<EntityCardColor, string> = {
  yellow: "bg-[#ffc857]",
  blue: "bg-[#2ab7ca]",
  red: "bg-[#ef4444]",
};

export function EntityCard({ name, image, href, color }: EntityCardProps) {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          className="h-80 w-full rounded-2xl object-cover opacity-90 
          transition-transform duration-500 ease-out hover:scale-105 lg:h-full"
          alt=""
        />
      </div>

      <div
        className={`absolute bottom-0 flex h-24 w-full items-center 
        justify-center gap-2 rounded-b-2xl ${colorClasses[color]}`}
      >
        <Link to={href} className="text-2xl font-bold hover:underline">
          {name}
        </Link>

        <ArrowCircleUpRightIcon size={28} weight="fill" />
      </div>
    </div>
  );
}
