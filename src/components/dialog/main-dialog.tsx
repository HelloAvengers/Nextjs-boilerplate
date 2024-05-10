import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface MainDialogProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

const MainDialog = ({ children, open, onClose }: MainDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="overflow-y-auto max-h-screen">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default MainDialog;
