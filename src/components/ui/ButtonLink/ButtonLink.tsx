import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  title: string;
  href: string;
  backgroundColor?: string;
  variant?: "outline" | "yellow" | "solid";
  size?: "default" | "medium" | "large";
};

const variants = {
  outline:
    "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
  yellow:
    "border-2 border-yellow-300 text-yellow-300 bg-transparent hover:bg-yellow-300 hover:text-black",
  solid: "bg-black text-white hover:bg-zinc-950",
};

const sizes = {
  default: "w-full lg:w-[12.5rem]",
  medium: "w-full lg:w-[14rem]",
  large: "w-full lg:w-[16rem]",
};

export function ButtonLink({
  title,
  href,
  variant,
  size = "default",
  backgroundColor,
}: ButtonLinkProps) {
  return (
    <Link
      to={href}
      className={`group relative p-4 h-12 
      rounded-full flex items-center justify-center font-bold 
      overflow-hidden transition-all 
      duration-300 ${variant ? variants[variant] : ""} ${sizes[size]}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <span
        className="transition-transform duration-300 
        group-hover:-translate-x-2"
      >
        {title}
      </span>

      <ArrowRightIcon
        size={18}
        weight="bold"
        className="absolute right-6 opacity-0 -translate-x-2 transition-all 
        duration-400 group-hover:opacity-100 group-hover:translate-x-0"
      />
    </Link>
  );
}
