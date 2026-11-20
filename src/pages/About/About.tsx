import { useTranslation } from "react-i18next";
import { PageHero } from "../../components/ui/PageHero/PageHero";
import { Container } from "../../components/layout/Container";

import SkateboardBlackLogo from "../../assets/brand/skateboard-logo-black.png";
import ThumbnailAbout from "../../assets/images/thumbnail-about.jpg";

const FEATURES = [
  {
    number: "01",
    key: "athletes",
  },
  {
    number: "02",
    key: "championships",
  },
  {
    number: "03",
    key: "events",
  },
  {
    number: "04",
    key: "playlists",
  },
] as const;

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        title={t("about.hero.title")}
        subtitle={t("about.hero.description")}
        backgroundImage={ThumbnailAbout}
      />

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div>
              <span
                className="text-sm font-bold uppercase tracking-widest 
              text-yellow-500"
              >
                {t("about.project.label")}
              </span>

              <img
                src={SkateboardBlackLogo}
                className="mt-4"
                alt="logo do skateboard na cor preta"
              />
            </div>

            <div className="space-y-5 leading-relaxed text-neutral-500">
              <p>{t("about.project.paragraphs.0")}</p>

              <p>{t("about.project.paragraphs.1")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-yellow-300 py-20 text-black">
        <Container>
          <div className="mx-auto max-w-7xl">
            <span
              className="text-sm font-bold uppercase tracking-widest 
            text-black"
            >
              {t("about.purpose.label")}
            </span>

            <h2
              className="mt-4 max-w-3xl text-4xl font-black uppercase 
              leading-tight md:text-6xl"
            >
              {t("about.purpose.title")}
            </h2>

            <p className="mt-8 max-w-2xl leading-relaxed text-black">
              {t("about.purpose.description")}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-7xl">
            <span
              className="text-sm font-bold uppercase tracking-widest 
            text-yellow-500"
            >
              {t("about.features.label")}
            </span>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
              {t("about.features.title")}
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <article
                  key={feature.number}
                  className="border-t border-neutral-300 py-6"
                >
                  <span className="text-sm font-bold text-yellow-500">
                    {feature.number}
                  </span>

                  <h3 className="mt-4 text-2xl font-black uppercase">
                    {t(`about.features.items.${feature.key}.title`)}
                  </h3>

                  <p className="mt-3 max-w-md leading-relaxed text-neutral-500">
                    {t(`about.features.items.${feature.key}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
