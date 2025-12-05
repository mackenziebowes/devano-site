import { Heading } from "~/devano/atoms";
import { ProgressBar } from "~/devano/components";
import CodeBlock from "../_components/CodeBlock";
import WriteUp from "../_components/ComponentWriteUp";

const DefaultDemoCodeInner = `import { ProgressBar } from "~/devano/components";

export function ProgressBarDemo() {
  return (
  <div class="py-24 px-8 flex place-self-center mx-auto">
    <ProgressBar length={100} index={50} />
  </div>
  )
};
`;

const DefaultDemoCode = () => {
  return <CodeBlock code={DefaultDemoCodeInner} lang="tsx" />;
};

const DefaultDemo = () => {
  return (
    <div class="py-24 px-8 flex place-self-center mx-auto">
      <ProgressBar length={100} index={50} />
    </div>
  );
};

export default function ProgressBarPage() {
  const RecolorVariant = {
    jsx: <RecolorDemo />,
    codeBlock: <RecolorDemoCode />,
    name: "Recolour",
    description: "Use filled / empty tailwind bg rules",
  };
  return (
    <WriteUp
      name={"Button"}
      description={"Styled Buttons components"}
      demoJSX={<DefaultDemo />}
      demoCodeBlock={<DefaultDemoCode />}
      variants={[RecolorVariant]}
    />
  );
}

const RecolorDemoCodeInner = `import { ProgressBar } from "~/devano/components";

export function RecolorProgressBarDemo() {
  return (
  <div class="py-24 px-8 flex place-self-center mx-auto">
    <ProgressBar length={100} index={50} />
  </div>
  )
};
`;

const RecolorDemoCode = () => {
  return <CodeBlock code={RecolorDemoCodeInner} lang="tsx" />;
};

const RecolorDemo = () => {
  return (
    <div class="py-24 px-8 flex place-self-center mx-auto">
      <ProgressBar
        length={100}
        index={50}
        filledBg="bg-sidebar-foreground"
        emptyBg="bg-sidebar"
      />
    </div>
  );
};
