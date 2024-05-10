"use client";

import { useDictionary } from "@/hooks/use-dictionary";

import useUiProvider from "@/stores/ui-provider/ui-provider.store";

import { Button } from "@/components/ui/button";
import { DialogView } from "@/stores/ui-provider/ui-provider.type";

const DialogComponent = () => {
  const { dictionary } = useDictionary();
  const { openDialog } = useUiProvider();

  return (
    <section id="dialog-components">
      <h1 className="font-bold">Dialog</h1>
      <Button onClick={() => openDialog(DialogView.LOADING)}>
        {dictionary.common.dialog.button.open}
      </Button>
    </section>
  );
};

export default DialogComponent;
