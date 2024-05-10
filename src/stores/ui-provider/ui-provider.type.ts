export enum DialogView {
  // Common
  LOADING = "loading",
}

export enum SheetView {
  SIDEBAR = "sidebar",
}

export const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export type SheetSide = (typeof SHEET_SIDES)[number];

export interface UiProviderStoreState {
  displayDialog: boolean;
  dialogView: DialogView;
  displaySheet: boolean;
  sheetSide: SheetSide;
  sheetView: SheetView;
}

export interface UiProviderStore extends UiProviderStoreState {
  openDialog: (view: DialogView) => void;
  closeDialog: () => void;
  openSheet: (view: SheetView) => void;
  setSheetSide: (side: SheetSide) => void;
  closeSheet: () => void;
}
