import { ActionButton } from "@/src/components/ActionButton";
import Page from "@/src/components/layouts/page";
import { PlusIcon } from "lucide-react";

export default function Evalution() {
  return (
    <Page
      headerProps={{
        title: "Evaluation",
        help: { description: "전달하고 싶은 설명 적을 것" },
        actionButtonsRight: (
          <ActionButton
            icon={<PlusIcon className="h-4 w-4" aria-hidden="true" />}
            onClick={() => {}}
          >
            New Evaluation
          </ActionButton>
        ),
      }}
    >
      <div></div>
    </Page>
  );
}
