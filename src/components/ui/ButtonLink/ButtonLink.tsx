import { ArrowRightIcon } from "@phosphor-icons/react";

type ButtonLinkProps = {
  title: string;
  href: string;
  variant?: "outline" | "yellow" | "solid";
  size?: "default" | "large";
};

const variants = {
  outline: "border-2 border-black text-black bg-transparent",
  yellow: "border-2 border-yellow-300 text-yellow-300 bg-transparent",
  solid: "bg-black text-white border-2 border-black",
};

const sizes = {
  default: "w-full lg:w-[12.5rem]",
  large: "w-full lg:w-[16rem]",
};

export function ButtonLink({
  title,
  href,
  variant = "outline",
  size = "default",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`group relative p-4 w-full lg:w-[12.5rem] h-12 rounded-full flex items-center justify-center gap-2 font-bold mb-8 overflow-hidden transition-all duration-300 ${variants[variant]} ${sizes[size]}`}
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-2">
        {title}
      </span>

      <ArrowRightIcon
        size={18}
        weight="bold"
        className="absolute right-8 opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0"
      />
    </a>
  );
}
