const dateFormatterOptions: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "long",
  year: "numeric",
};

export function formatEventDate(date: string, language: string) {
  const locale = language === "en" ? "en-US" : "pt-BR";

  return new Intl.DateTimeFormat(locale, dateFormatterOptions).format(
    new Date(`${date}T00:00:00`),
  );
}
