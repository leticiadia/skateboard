import { useEffect, useId, useRef, useState } from "react";

import { CaretDownIcon, TranslateIcon } from "@phosphor-icons/react";

import type { DropdownProps } from "./types";

export function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const listboxId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-2 rounded-sm p-2 text-xs font-bold 
        text-white transition-colors hover:text-yellow-300 
        focus-visible:outline-2 focus-visible:outline-yellow-300 
        focus-visible:outline-offset-2 cursor-pointer md:text-base"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => setIsOpen((previousValue) => !previousValue)}
      >
        <TranslateIcon size={20} weight="bold" aria-hidden="true" />

        <CaretDownIcon size={16} weight="bold" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute right-0 top-full z-50 flex min-w-max flex-col 
          gap-1 rounded-sm border border-zinc-300 bg-white p-2 shadow-lg"
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`w-full cursor-pointer rounded-sm p-2 
                text-left text-sm font-medium text-zinc-800 transition-colors
                hover:bg-yellow-300/80 hover:text-black 
                focus-visible:bg-yellow-300 focus-visible:text-black
                focus-visible:outline-none
                ${isSelected ? "bg-yellow-300/80 font-semibold text-black" : ""}
                `}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
