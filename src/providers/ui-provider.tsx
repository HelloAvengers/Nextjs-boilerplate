"use client";

import { getDictionary } from "@/lib/get-dictionary";

import useUiProvider from "@/stores/ui-provider/ui-provider.store";
import { DialogView } from "@/stores/ui-provider/ui-provider.type";

// Dialog
import MainDialog from "@/components/dialog/main-dialog";
import LoadingDialog from "@/components/dialog/loading-dialog";

interface UIProviderProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const UIProvider = ({ children, dictionary }: UIProviderProps) => {
  const DialogUI = () => {
    const { dialogView, displayDialog, closeDialog } = useUiProvider();

    return (
      <MainDialog open={displayDialog} onClose={closeDialog}>
        <div>
          {/* Common */}
          {dialogView === DialogView.LOADING && <LoadingDialog />}
        </div>
      </MainDialog>
    );
  };

  return (
    <>
      {children}
      <DialogUI />
    </>
  );
};

export default UIProvider;
