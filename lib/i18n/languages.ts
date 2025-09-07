export const LANGS = [
  { code: "en", name: "English",  flag: "🇺🇸" },
  { code: "es", name: "Español",  flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch",  flag: "🇩🇪" },
  { code: "ro", name: "Română",   flag: "🇷🇴" },
] as const;

export type Language = (typeof LANGS)[number]["code"];
export const LANG_CODES = LANGS.map(l => l.code) as Language[];

// Generic typed fromEntries
const toRecord = <K extends string, V>(entries: readonly (readonly [K, V])[]) =>
  Object.fromEntries(entries) as Record<K, V>;

export const LANG_META = toRecord<Language, { name: string; flag: string }>(
  LANGS.map(l => [l.code, { name: l.name, flag: l.flag }] as const)
);

export const DEFAULT_LANG: Language = "en";
