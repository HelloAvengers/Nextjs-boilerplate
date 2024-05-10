import { getDictionary } from "@/lib/get-dictionary";

import { PageProps } from "@/interfaces/page.interface";

import HomeView from "@/views/home";

export default async function HomePage({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return <HomeView dictionary={dictionary} lang={lang} />;
}
