import { getDictionary } from "@/lib/get-dictionary";

import Container from "@/components/container/container";
import ButtonComponent from "@/components/screens/component/button-component";
import DialogComponent from "@/components/screens/component/dialog-component";
import ToggleComponents from "@/components/screens/component/toggle-component";

interface ComponentViewProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const ComponentView = async ({ dictionary }: ComponentViewProps) => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6">
        <ToggleComponents />
        <ButtonComponent />
        <DialogComponent />
      </div>
    </Container>
  );
};

export default ComponentView;
