import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { th } from "@/dictionaries/th";
import { en } from "@/dictionaries/en";

const dictionaries = {
  th: th,
  en: en,
};

const getDictionaryClientOnly = (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.th;

export const useDictionary = () => {
  const pathname = usePathname();
  const currentLanguage = pathname.split("/")[1] as "en" | "th";

  const [dictionary, setDictionary] = useState<
    Awaited<ReturnType<typeof getDictionary>>
  >(dictionaries[currentLanguage]);

  const findOutDictionary = useCallback(async () => {
    const dictionary = getDictionaryClientOnly(currentLanguage);
    setDictionary(dictionary);
  }, [currentLanguage]);

  useEffect(() => {
    findOutDictionary();
  }, [findOutDictionary]);

  return { dictionary, lang: currentLanguage };
};
