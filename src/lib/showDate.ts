/**
 * js-yaml parses bare dates (e.g. 2026-09-12) as UTC midnight Date objects.
 * In US timezones that shifts the calendar day backward when formatted locally.
 * Always rebuild as a local-midnight Date from the intended calendar day.
 */
export function toLocalShowDate(date: string | Date): Date {
  if (date instanceof Date) {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  return new Date(`${date}T00:00:00`);
}
