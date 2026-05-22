import { XLogoIcon } from "@phosphor-icons/react";
import { InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="border-b-8 border-black-700 mt-20 px-4">
      <div className="flex flex-col items-start justify-around gap-4 mb-4 lg:flex-row lg:items-center lg:gap-70">
        <p className="text-base font-bold">
          Copyright© 2026. Todos os direitos reservados a leticiadias
        </p>

        <div className="flex items-center justify-around gap-4">
          <InstagramLogo size={24} />
          <XLogoIcon size={24} />
          <LinkedinLogo size={24} />
        </div>
      </div>
    </div>
  );
}
