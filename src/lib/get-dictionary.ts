import "server-only";
import type { Locale } from "@/config/i18n-config";

import { en } from "@/dictionaries/en";
import { th } from "@/dictionaries/th";

const dictionaries = {
  th: th,
  en: en,
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.th;
