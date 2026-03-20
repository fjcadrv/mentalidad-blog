const parsePostDate = (dateString) => {
  if (!dateString) return null;

  // Supports:
  // - "YYYY-MM-DD"
  // - "YYYY-MM-DDTHH:mm:ss" (optionally without timezone)
  const isoDateTimeMatch =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/.exec(
      dateString
    );

  if (isoDateTimeMatch) {
    const [, y, m, d, hh, mm, ss] = isoDateTimeMatch;
    return new Date(
      Number(y),
      Number(m) - 1,
      Number(d),
      Number(hh),
      Number(mm),
      Number(ss ?? '0'),
      0
    );
  }

  const isoDateMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  if (isoDateMatch) {
    const [, y, m, d] = isoDateMatch;
    // When only a date is provided, assume 9:00 am (local time).
    return new Date(Number(y), Number(m) - 1, Number(d), 9, 0, 0, 0);
  }

  // Fallback: let Date try its best.
  const d = new Date(dateString);
  return Number.isNaN(d.getTime()) ? null : d;
};

export const formatPostDate = (dateString) => {
  const date = parsePostDate(dateString);
  if (!date) return null;

  const datePart = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Force AM/PM in English format ("AM"/"PM").
  let hourPart = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // Spanish readers usually expect "am/pm".
  hourPart = hourPart.replace(/\s(AM|PM)$/, (m) => m.toLowerCase());

  // Example: "19 de marzo de 2026 · 8:30 am"
  return `${datePart} · ${hourPart}`;
};

