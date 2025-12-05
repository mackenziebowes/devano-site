import { Heading } from "~/devano/atoms";
import { ProgressDots } from "~/devano/components";
import CodeBlock from "../_components/CodeBlock";
import WriteUp from "../_components/ComponentWriteUp";

const DefaultDemoCodeInner = `import { ProgressDots } from "~/devano/components";

export function ProgressDotsDemo() {
  return (
    <ProgressDots length={6} index={3} />
  )
};
`;

const DefaultDemoCode = () => {
  return <CodeBlock code={DefaultDemoCodeInner} lang="tsx" />;
};
const DefaultDemo = () => {
  return (
    <div class="py-24 px-8 flex place-self-center mx-auto">
      <ProgressDots length={6} index={3} />
    </div>
  );
};
const VerticalDemo = `import { ProgressDots } from "~/devano/components";

export function ProgressDotsDemo() {
  return (
    <ProgressDots length={6} index={3} direction="vertical" />
  )
};
`;

export default function ProgressDotsPage() {
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
    <ProgressDots
      length={6}
      index={2}
      filledBg="bg-sidebar-foreground"
      emptyBg="bg-sidebar"
    />
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
      <ProgressDots
        length={6}
        index={2}
        filledBg="bg-sidebar-foreground"
        emptyBg="bg-sidebar"
      />
    </div>
  );
};
