import Link from "next/link";

import { Locale } from "@/config/i18n-config";

import { getDictionary } from "@/lib/get-dictionary";

import { Button } from "@/components/ui/button";

interface HomeViewProps {
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const HomeView = async ({ lang, dictionary }: HomeViewProps) => {
  return (
    <div className="flex w-full min-h-screen space-x-2 justify-center items-center">
      <h1>{dictionary.home.navigator.title}</h1>
      <Link href={`/${lang}/component`}>
        <Button variant="outline">{dictionary.common.button.click}</Button>
      </Link>
    </div>
  );
};

export default HomeView;
