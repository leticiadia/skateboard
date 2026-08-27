interface ChampionshipRegistrationProps {
  championshipTitle: string;
  title?: string;
}

export function ChampionshipRegistration({
  championshipTitle,
  title = "Inscreva-se para o Campeonato",
}: ChampionshipRegistrationProps) {
  return (
    <section
      className="my-8 w-full rounded-2xl border border-zinc-800 
      bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-5 
      text-center shadow-xl sm:p-8"
    >
      <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">{title}</h2>

      <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-zinc-400">
        Garanta sua vaga nas próximas etapas do {championshipTitle} e receba a
        confirmação de elegibilidade no seu e-mail.
      </p>

      <form className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <label htmlFor="athlete-email" className="sr-only">
          E-mail do atleta ou participante
        </label>

        <input
          id="athlete-email"
          type="email"
          placeholder="Seu e-mail de atleta ou participante"
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
          Garantir vaga
        </button>
      </form>
    </section>
  );
}
