import "@/styles/globals.css";
import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";

import { getDictionary } from "@/lib/get-dictionary";

import { Locale, i18n } from "@/config/i18n-config";

import UIProvider from "@/providers/ui-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const { params } = props;
  const dictionary = await getDictionary(params.lang);

  return (
    <html suppressHydrationWarning={true}>
      <body>
        <NextTopLoader color={"var(--primary)"} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UIProvider dictionary={dictionary}>{children || null}</UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
