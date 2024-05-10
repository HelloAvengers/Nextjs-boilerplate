import { create } from "zustand";

import {
  SheetSide,
  SheetView,
  DialogView,
  UiProviderStore,
  UiProviderStoreState,
} from "@/stores/ui-provider/ui-provider.type";

const initialState: UiProviderStoreState = {
  displayDialog: false,
  dialogView: DialogView.LOADING,
  sheetSide: "left",
  displaySheet: false,
  sheetView: SheetView.SIDEBAR,
};

const useUiProvider = create<UiProviderStore>((set, get) => ({
  ...initialState,
  openDialog: (view: DialogView) => {
    set({ displayDialog: true, dialogView: view });
  },
  closeDialog: () => {
    set({ displayDialog: false });
  },
  openSheet: (view: SheetView) => {
    set({ displaySheet: true, sheetView: view });
  },
  setSheetSide: (side: SheetSide) => {
    set({ sheetSide: side });
  },
  closeSheet: () => {
    set({ displaySheet: false });
  },
}));

export default useUiProvider;
