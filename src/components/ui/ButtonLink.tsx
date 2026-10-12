import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  title: string;
  href: string;
  backgroundColor?: string;
  variant?: "outline" | "yellow" | "solid";
  size?: "small" | "medium" | "large";
};

const variants = {
  outline:
    "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white",
  yellow:
    "border-2 border-yellow-300 bg-transparent text-yellow-300 hover:bg-yellow-300 hover:text-black",
  solid: "bg-black text-white hover:bg-zinc-950",
} as const;

const sizes = {
  small: "sm:w-36",
  medium: "sm:w-48",
  large: "sm:w-68",
} as const;

export function ButtonLink({
  title,
  href,
  variant,
  size = "medium",
  backgroundColor,
}: ButtonLinkProps) {
  return (
    <Link
      to={href}
      style={backgroundColor ? { backgroundColor } : undefined}
      className={`group grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2
        rounded-full px-5 py-3 text-sm font-bold leading-5 transition-colors 
        duration-300 focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-yellow-300 motion-reduce:transition-none
        ${variant ? variants[variant] : ""}
        ${sizes[size]}`}
    >
      <span className="col-start-2 text-center">{title}</span>

      <ArrowRightIcon
        aria-hidden="true"
        size={18}
        weight="bold"
        className="col-start-3 justify-self-end
          translate-x-1 opacity-0
          transition-[transform,opacity] duration-300
          group-hover:translate-x-0 group-hover:opacity-100
          group-focus-visible:translate-x-0 group-focus-visible:opacity-100
          motion-reduce:transition-none"
      />
    </Link>
  );
}
