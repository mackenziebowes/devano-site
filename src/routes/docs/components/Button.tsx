import { Heading } from "~/devano/atoms";
import { Button } from "~/devano/components";
import Page from "../_components/Page";
import WriteUp from "../_components/ComponentWriteUp";
import CodeBlock from "../_components/CodeBlock";

export default function ButtonPage() {
  const AllVariant = {
    jsx: <AllDemoComponent />,
    codeBlock: <AllDemoCodeBlock />,
    name: "Style Variants",
    description: "All style variants of the Anchor component",
  };
  const SecondaryVariant = {
    jsx: <SecondaryDemo />,
    codeBlock: <SecondaryCode />,
    name: "Secondary",
    description: "A lower contrast variant",
  };
  const OutlineVariant = {
    jsx: <OutlineDemo />,
    codeBlock: <OutlineCode />,
    name: "Outline",
    description: "A lower contrast variant",
  };
  const GhostVariant = {
    jsx: <GhostDemo />,
    codeBlock: <GhostCode />,
    name: "Ghost",
    description: "A lower contrast variant",
  };
  const DestructiveVariant = {
    jsx: <DestructiveDemo />,
    codeBlock: <DestructiveCode />,
    name: "Destructive",
    description: "A lower contrast variant",
  };
  const LinkVariant = {
    jsx: <LinkDemo />,
    codeBlock: <LinkCode />,
    name: "Link",
    description: "A lower contrast variant",
  };
  const SmVariant = {
    jsx: <SmDemo />,
    codeBlock: <SmCode />,
    name: "Sm Size",
    description: "A Smaller Button Variant",
  };
  const MdVariant = {
    jsx: <MdDemo />,
    codeBlock: <MdCode />,
    name: "Md Size",
    description: "A Medium Button Variant (default)",
  };
  const LgVariant = {
    jsx: <LgDemo />,
    codeBlock: <LgCode />,
    name: "Lg Size",
    description: "A Large Button Variant (default)",
  };

  return (
    <WriteUp
      name={"Button"}
      description={"Styled Buttons components"}
      demoJSX={<DefaultDemo />}
      demoCodeBlock={<DefaultDemoCode />}
      variants={[
        AllVariant,
        SecondaryVariant,
        OutlineVariant,
        GhostVariant,
        DestructiveVariant,
        LinkVariant,
        SmVariant,
        MdVariant,
        LgVariant,
      ]}
    />
  );
}

//
//     ____      ___         _ _
//    |    \ ___|  _|___ _ _| | |_
//    |  |  | -_|  _| .'| | | |  _|
//    |____/|___|_| |__,|___|_|_|
//

const DefaultDemoCodeInner = `import { Button } from "~/devano/components";

export function ButtonDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Button>Hello!</Button>
  </div>
  )
};
`;

const DefaultDemoCode = () => {
  return <CodeBlock code={DefaultDemoCodeInner} lang="tsx" />;
};

const DefaultDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button>Hello!</Button>
    </div>
  );
};

//
//     _____ _ _
//    |  _  | | |
//    |     | | |
//    |__|__|_|_|
//

const AllDemoCodeInner = `import { Button } from "~/devano/components";

export function AllButtonsDemo() {
  return (
    <div class="py-24 flex flex-wrap gap-2 max-w-[80%]">
      <Button>Default</Button>
      <Button variant="primary">Login</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
};
`;

const AllDemoCodeBlock = () => {
  return <CodeBlock code={AllDemoCodeInner} lang="tsx" />;
};

const AllDemoComponent = () => {
  return (
    <div class="py-24 flex flex-wrap gap-2 max-w-[80%] mx-auto text-sm">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

const SecondaryDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="secondary">Hello!</Button>
    </div>
  );
};
const SecondaryCodeInner = `import { Button } from "~/devano/components";

export function ButtonSecondaryDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="secondary">Hello!</Button>
    </div>
  )
};`;

const SecondaryCode = () => {
  return <CodeBlock code={SecondaryCodeInner} lang="tsx" />;
};

const OutlineDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="outline">Hello!</Button>
    </div>
  );
};
const OutlineCodeInner = `import { Button } from "~/devano/components";

export function ButtonOutlineDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="outline">Hello!</Button>
    </div>
  )
};`;

const OutlineCode = () => {
  return <CodeBlock code={OutlineCodeInner} lang="tsx" />;
};

const GhostDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="ghost">Hello!</Button>
    </div>
  );
};
const GhostCodeInner = `import { Button } from "~/devano/components";

export function ButtonGhostDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="ghost">Hello!</Button>
    </div>
  )
};`;

const GhostCode = () => {
  return <CodeBlock code={GhostCodeInner} lang="tsx" />;
};

const DestructiveDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="destructive">Hello!</Button>
    </div>
  );
};
const DestructiveCodeInner = `import { Button } from "~/devano/components";

export function ButtonDestructiveDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="destructive">Hello!</Button>
    </div>
  )
};`;

const DestructiveCode = () => {
  return <CodeBlock code={DestructiveCodeInner} lang="tsx" />;
};

const LinkDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="link">Hello!</Button>
    </div>
  );
};
const LinkCodeInner = `import { Button } from "~/devano/components";

export function ButtonLinkDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button variant="link">Hello!</Button>
    </div>
  )
};`;

const LinkCode = () => {
  return <CodeBlock code={LinkCodeInner} lang="tsx" />;
};

const SmDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button size="sm">Hello!</Button>
    </div>
  );
};
const SmCodeInner = `import { Button } from "~/devano/components";

export function ButtonSmDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button size="sm">Hello!</Button>
    </div>
  )
};`;

const SmCode = () => {
  return <CodeBlock code={SmCodeInner} lang="tsx" />;
};

const MdDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button size="md">Hello!</Button>
    </div>
  );
};
const MdCodeInner = `import { Button } from "~/devano/components";

export function ButtonMdDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button size="md">Hello!</Button>
    </div>
  )
};`;

const MdCode = () => {
  return <CodeBlock code={MdCodeInner} lang="tsx" />;
};

const LgDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button size="lg">Hello!</Button>
    </div>
  );
};
const LgCodeInner = `import { Button } from "~/devano/components";

export function ButtonLgDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Button size="lg">Hello!</Button>
    </div>
  )
};`;

const LgCode = () => {
  return <CodeBlock code={LgCodeInner} lang="tsx" />;
};
