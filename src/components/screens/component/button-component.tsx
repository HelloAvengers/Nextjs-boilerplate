"use client";

import { useDictionary } from "@/hooks/use-dictionary";

import { Button } from "@/components/ui/button";

const ButtonComponent = () => {
  const { dictionary } = useDictionary();

  return (
    <section id="button-components">
      <h1 className="font-bold">Button</h1>
      <div className="flex space-x-4">
        <Button variant="default">{dictionary.common.button.submit}</Button>
        <Button variant="destructive">{dictionary.common.button.cancel}</Button>
        <Button variant="ghost">{dictionary.common.button.edit}</Button>
        <Button variant="link">{dictionary.common.button.view}</Button>
        <Button variant="outline">{dictionary.common.button.save}</Button>
      </div>
    </section>
  );
};

export default ButtonComponent;
