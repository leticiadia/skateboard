export function getEventDateParts(date: string, language: string) {
  const eventDate = new Date(`${date}T00:00:00`);

  const locale = language === "pt" ? "pt-BR" : "en-US";

  return {
    day: new Intl.DateTimeFormat(locale, {
      day: "2-digit",
    }).format(eventDate),

    month: new Intl.DateTimeFormat(locale, {
      month: "short",
    })
      .format(eventDate)
      .replace(".", ""),

    year: eventDate.getFullYear(),
  };
}
