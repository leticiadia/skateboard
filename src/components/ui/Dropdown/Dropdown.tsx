import { CaretDownIcon, TranslateIcon } from "@phosphor-icons/react";
import { useEffect, useId, useRef, useState } from "react";

import type { DropdownProps } from "./types";

export function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionsId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleToggle() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }

  function handleOptionSelect(optionValue: string) {
    onChange(optionValue);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div ref={containerRef} className="relative inline-flex">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
        aria-controls={optionsId}
        aria-haspopup="true"
        onClick={handleToggle}
        className="flex cursor-pointer items-center gap-2 rounded-sm p-2 
        text-xs font-bold text-white transition-colors 
        hover:text-yellow-300 focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-yellow-300 
        md:text-base"
      >
        <TranslateIcon size={20} weight="bold" aria-hidden="true" />
        <CaretDownIcon size={16} weight="bold" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id={optionsId}
          className="absolute right-0 top-full z-50 flex min-w-max flex-col 
          gap-1 rounded-sm border border-zinc-300 bg-white p-2 shadow-lg"
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full cursor-pointer rounded-sm p-2 text-left 
                  text-sm font-medium text-zinc-800 transition-colors 
                  hover:bg-yellow-300/80 hover:text-black 
                  focus-visible:bg-yellow-300 focus-visible:text-black 
                  focus-visible:outline-none ${
                    isSelected
                      ? "bg-yellow-300/80 font-semibold text-black"
                      : ""
                  }`}
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
