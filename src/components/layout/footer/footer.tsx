import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

import SkateboardLogo from "../../../assets/images/skateboard-logo.svg";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-200 bg-black-700">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 
        py-12 lg:flex-row lg:justify-between"
      >
        <div className="max-w-sm space-y-4">
          <img src={SkateboardLogo} className="h-10" alt="Logo do Skateboard" />

          <p className="text-sm leading-relaxed text-zinc-400">
            Mais do que um esporte, o skateboard representa liberdade,
            criatividade e expressão em cada detalhe.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="rounded-full border border-zinc-200 text-zinc-200 
              p-2 transition-all hover:-translate-y-1 hover:border-black 
              hover:bg-zinc-300 hover:text-black"
            >
              <InstagramLogoIcon size={20} />
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-200 text-zinc-200 
              p-2 transition-all hover:-translate-y-1 hover:border-black 
              hover:bg-zinc-300 hover:text-black"
            >
              <XLogoIcon size={20} />
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-200 text-zinc-200 
              p-2 transition-all hover:-translate-y-1 hover:border-black 
              hover:bg-zinc-300 hover:text-black"
            >
              <LinkedinLogoIcon size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="space-y-4">
            <h3
              className="text-sm font-semibold uppercase tracking-wide 
            text-white"
            >
              Navegação
            </h3>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  Home
                </a>
              </li>

              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  Projetos
                </a>
              </li>

              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-sm font-semibold uppercase tracking-wide 
            text-white"
            >
              Contato
            </h3>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a
                  className="transition-colors hover:text-zinc-200"
                  href="mailto:contato@email.com"
                >
                  Email
                </a>
              </li>

              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  LinkedIn
                </a>
              </li>

              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="text-sm font-semibold uppercase tracking-wide 
            text-white"
            >
              Social
            </h3>

            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  Instagram
                </a>
              </li>

              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  Twitter/X
                </a>
              </li>

              <li>
                <a className="transition-colors hover:text-zinc-200" href="#">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-50/10">
        <div
          className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm 
        text-white sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 Skateboard. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
