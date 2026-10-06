import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import SkateboardLogo from "../../assets/brand/skateboard-logo.svg";
import { Container } from "./Container";

export function Footer() {
  const { t } = useTranslation();

  const navigationLinks = [
    {
      label: t("footer.navigation.about"),
      href: "/sobre",
    },
    {
      label: t("footer.navigation.athletes"),
      href: "/atletas",
    },
    {
      label: t("footer.navigation.championships"),
      href: "/campeonatos",
    },
  ];

  const contactLinks = [
    {
      label: "Email",
      href: "#",
    },
    {
      label: "LinkedIn",
      href: "#",
    },
    {
      label: "GitHub",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "#",
      Icon: InstagramLogoIcon,
    },
    {
      label: "X",
      href: "#",
      Icon: XLogoIcon,
    },
    {
      label: "LinkedIn",
      href: "#",
      Icon: LinkedinLogoIcon,
    },
  ];

  const footerSections = [
    {
      title: t("footer.sections.navigation"),
      links: navigationLinks,
    },
    {
      title: t("footer.sections.contact"),
      links: contactLinks,
    },
    {
      title: t("footer.sections.social"),
      links: [
        { label: "Instagram", href: "#" },
        { label: "X", href: "#" },
        { label: "Medium", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-black-700">
      <Container>
        <div className="flex flex-col gap-12 py-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm space-y-4">
            <img
              src={SkateboardLogo}
              className="h-10"
              alt={t("footer.logoAlt")}
            />

            <p className="text-sm leading-relaxed text-zinc-400">
              {t("footer.description")}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-zinc-200 p-2 
                  text-zinc-200 transition-all hover:-translate-y-1 
                  hover:border-black hover:bg-zinc-300 hover:text-black"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerSections.map(({ title, links }) => (
              <div key={title} className="space-y-4">
                <h3
                  className="text-sm font-semibold uppercase tracking-wide 
                text-white"
                >
                  {title}
                </h3>

                <ul className="space-y-3 text-sm text-zinc-400">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      {href.startsWith("mailto:") ||
                      href.startsWith("https://") ? (
                        <a
                          href={href}
                          className="transition-colors hover:text-zinc-200"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          to={href}
                          className="transition-colors hover:text-zinc-200"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-50/10">
          <div
            className="flex flex-col gap-3 py-5 text-sm text-white 
            sm:flex-row sm:items-center sm:justify-between"
          >
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
