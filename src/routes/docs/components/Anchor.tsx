import { Anchor } from "~/devano/components";
import WriteUp from "../_components/ComponentWriteUp";
import CodeBlock from "../_components/CodeBlock";

export default function ButtonPage() {
  const AllVariant = {
    jsx: <AllDemoComponent />,
    codeBlock: <AllDemoCodeBlock />,
    name: "Style Variants",
    description: "All style variants of the Anchor component",
  };

  const PrimaryVariant = {
    jsx: <PrimaryDemo />,
    codeBlock: <PrimaryCode />,
    name: "Primary",
    description:
      "A button-like link, for use as a primary action routing to an internal page.",
  };

  const SecondaryVariant = {
    jsx: <SecondaryDemo />,
    codeBlock: <SecondaryCode />,
    name: "Secondary",
    description:
      "A button-like link, for use as a secondary action routing to an internal page.",
  };

  const OutlineVariant = {
    jsx: <OutlineDemo />,
    codeBlock: <OutlineDemoCode />,
    name: "Outline",
    description:
      "A button-like link, for use as a tertiary action routing to an internal page.",
  };

  const GhostVariant = {
    jsx: <GhostDemo />,
    codeBlock: <GhostCode />,
    name: "Ghost",
    description:
      "A button-like link, for use as a tertiary action routing to an internal page.",
  };

  const DestructiveVariant = {
    jsx: <DestructiveDemo />,
    codeBlock: <DestructiveCode />,
    name: "Destructive",
    description:
      "A button-like link, for use as a tertiary action routing to an internal page.",
  };

  const SmVariant = {
    jsx: <SmDemo />,
    codeBlock: <SmCode />,
    name: "Sm Size",
    description: "A small link.",
  };

  const MdVariant = {
    jsx: <MdDemo />,
    codeBlock: <MdCode />,
    name: "Md Size",
    description: "A medium (default) sized link",
  };

  const LgVariant = {
    jsx: <LgDemo />,
    codeBlock: <LgCode />,
    name: "Lg Size",
    description: "A large link.",
  };

  return (
    <WriteUp
      name={"Anchor"}
      description={"Styled Solid-Router native Anchor components"}
      demoJSX={<DefaultDemo />}
      demoCodeBlock={<DefaultDemoCode />}
      variants={[
        AllVariant,
        PrimaryVariant,
        SecondaryVariant,
        OutlineVariant,
        GhostVariant,
        DestructiveVariant,
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

const DefaultDemoCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Anchor href="#">Hello!</Anchor>
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
      <Anchor href="#">Hello!</Anchor>
    </div>
  );
};

//
//     _____ _ _
//    |  _  | | |
//    |     | | |
//    |__|__|_|_|
//

const AllDemoCodeInner = `import { Anchor } from "~/devano/components";

export function AllAnchorsDemo() {
  return (
    <div class="py-24 flex flex-wrap gap-2 max-w-[80%] mx-auto text-sm">
      <Anchor href="#">Default</Anchor>
      <Anchor href="/login" variant="primary">Login</Anchor>
      <Anchor href="#" variant="secondary">Secondary</Anchor>
      <Anchor href="#" variant="outline">Outline</Anchor>
      <Anchor href="#" variant="ghost">Ghost</Anchor>
      <Anchor href="#" variant="destructive">Destructive</Anchor>
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
      <Anchor href="#">Default</Anchor>
      <Anchor href="#" variant="primary">
        Login
      </Anchor>
      <Anchor href="#" variant="secondary">
        Secondary
      </Anchor>
      <Anchor href="#" variant="outline">
        Outline
      </Anchor>
      <Anchor href="#" variant="ghost">
        Ghost
      </Anchor>
      <Anchor href="#" variant="destructive">
        Destructive
      </Anchor>
    </div>
  );
};

//
//     _____     _
//    |  _  |___|_|_____ ___ ___ _ _
//    |   __|  _| |     | .'|  _| | |
//    |__|  |_| |_|_|_|_|__,|_| |_  |
//                              |___|

const PrimaryDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="primary" href="#">
        Hello!
      </Anchor>
    </div>
  );
};

const PrimaryCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorPrimaryDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="primary" href="#">Hello!</Anchor>
    </div>
  )
};`;

const PrimaryCode = () => {
  return <CodeBlock code={PrimaryCodeInner} lang="tsx" />;
};

//
//     _____                   _
//    |   __|___ ___ ___ ___ _| |___ ___ _ _
//    |__   | -_|  _| . |   | . | .'|  _| | |
//    |_____|___|___|___|_|_|___|__,|_| |_  |
//                                      |___|

const SecondaryDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="secondary" href="#">
        Hello!
      </Anchor>
    </div>
  );
};

const SecondaryCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorSecondaryDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="secondary" href="#">Hello!</Anchor>
    </div>
  )
};`;

const SecondaryCode = () => {
  return <CodeBlock code={SecondaryCodeInner} lang="tsx" />;
};

//
//     _____     _   _ _
//    |     |_ _| |_| |_|___ ___
//    |  |  | | |  _| | |   | -_|
//    |_____|___|_| |_|_|_|_|___|
//

const OutlineDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="outline" href="#">
        Hello!
      </Anchor>
    </div>
  );
};

const OutlineCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorOutlineDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="outline" href="#">Hello!</Anchor>
    </div>
  )
};`;

const OutlineDemoCode = () => {
  return <CodeBlock code={OutlineCodeInner} lang="tsx" />;
};

const GhostDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="ghost" href="#">
        Hello!
      </Anchor>
    </div>
  );
};
const GhostCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorGhostDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="ghost" href="#">Hello!</Anchor>
    </div>
  )
};`;

const GhostCode = () => {
  return <CodeBlock code={GhostCodeInner} lang="tsx" />;
};

const DestructiveDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="destructive" href="#">
        Hello!
      </Anchor>
    </div>
  );
};
const DestructiveCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorDestructiveDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="destructive" href="#">Hello!</Anchor>
    </div>
  )
};`;

const DestructiveCode = () => {
  return <CodeBlock code={DestructiveCodeInner} lang="tsx" />;
};

const SmDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor size="sm" href="#">
        Hello!
      </Anchor>
    </div>
  );
};
const SmCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorSmDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor size="sm" href="#">Hello!</Anchor>
    </div>
  )
};`;

const SmCode = () => {
  return <CodeBlock code={SmCodeInner} lang="tsx" />;
};

const MdDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor size="md" href="#">
        Hello!
      </Anchor>
    </div>
  );
};
const MdCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorMdDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor size="md" href="#">Hello!</Anchor>
    </div>
  )
};`;

const MdCode = () => {
  return <CodeBlock code={MdCodeInner} lang="tsx" />;
};

const LgDemo = () => {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor size="lg" href="#">
        Hello!
      </Anchor>
    </div>
  );
};
const LgCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorLgDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor size="lg" href="#">Hello!</Anchor>
    </div>
  )
};`;

const LgCode = () => {
  return <CodeBlock code={LgCodeInner} lang="tsx" />;
};
