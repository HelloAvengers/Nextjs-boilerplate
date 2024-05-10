import { getDictionary } from "@/lib/get-dictionary";

import { PageProps } from "@/interfaces/page.interface";

import ComponentView from "@/views/component";

export default async function ComponentPage({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return <ComponentView dictionary={dictionary} />;
}
