import { useTranslation } from "react-i18next";

interface ChampionshipRegistrationProps {
  championshipTitle: string;
}

export function ChampionshipRegistration({
  championshipTitle,
}: ChampionshipRegistrationProps) {
  const { t } = useTranslation();

  return (
    <section
      className="my-8 w-full rounded-2xl border border-zinc-800 
      bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-5 
      text-center shadow-xl sm:p-8"
    >
      <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
        {t("championship-registration.title")}
      </h2>

      <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-zinc-400">
        {t("championship-registration.description", {
          championshipTitle,
        })}
      </p>

      <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <label htmlFor="athlete-email" className="sr-only">
          {t("championship-registration.emailLabel")}
        </label>

        <input
          id="athlete-email"
          type="email"
          placeholder={t("championship-registration.emailPlaceholder")}
          className="min-w-0 flex-1 rounded-lg border border-zinc-800 
          bg-zinc-950 px-4 py-3 text-sm text-zinc-100 transition-colors
          focus:border-yellow-300 focus:outline-none focus:ring-2 
          focus:ring-yellow-300/20"
        />

        <button
          type="button"
          className="w-full shrink-0 cursor-pointer rounded-lg bg-yellow-300
          px-6 py-3 text-sm font-semibold text-zinc-950 transition-all 
          hover:brightness-90 focus:outline-none focus:ring-2 
          focus:ring-yellow-300/40 sm:w-auto"
        >
          {t("championship-registration.submit")}
        </button>
      </form>
    </section>
  );
}
