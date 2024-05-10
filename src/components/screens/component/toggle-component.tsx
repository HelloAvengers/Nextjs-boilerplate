"use client";

import { ModeToggle } from "@/components/toggle/mode-toggle";
import { LanguageToggle } from "@/components/toggle/language-toggle";

const ToggleComponents = () => {
  return (
    <section id="dialog-components">
      <h1 className="font-bold">Toggle</h1>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <LanguageToggle />
      </div>
    </section>
  );
};

export default ToggleComponents;
