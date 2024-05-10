"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languageList = [
  {
    name: "English",
    code: "en",
    flag: "/assets/flag/en.png",
  },
  {
    name: "ไทย",
    code: "th",
    flag: "/assets/flag/th.png",
  },
];

export const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = pathname.split("/")[1];
  const originalPathname = pathname.replace(`/${currentLanguage}`, "");

  const setLanguage = (language: string) => {
    router.replace(`/${language}${originalPathname}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src={
              languageList?.find(
                (language) => language.code === currentLanguage
              )?.flag || "/assets/flag/en.png"
            }
            width={20}
            height={20}
            alt="language"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageList?.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLanguage(language.code)}
          >
            <Image
              src={language.flag}
              width={20}
              height={20}
              alt={language.name}
            />
            <span className="ml-2">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
