import { Anchor } from "~/devano/components";
import WriteUp from "../_components/ComponentWriteUp";
import CodeBlock from "../_components/CodeBlock";

const DefaultDemo = `import { Anchor } from "~/devano/components";

export function AnchorDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Anchor href="#">Hello!</Anchor>
  </div>
  )
};
`;

const SecondaryDemo = `import { Button } from "~/devano/components";

export function ButtonDemo() {
  return (
    <div class="py-24 flex flex-wrap gap-2 max-w-[80%]">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};
`;

export default function ButtonPage() {
  const SecondaryVariant = {
    jsx: (
      <div class="py-24 w-fit place-self-center mx-auto">
        <Anchor variant="secondary" href="#">
          Hello!
        </Anchor>
      </div>
    ),
    codeBlock: (
      <CodeBlock
        code={`import { Anchor } from "~/devano/components";

export function AnchorSecondaryDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Anchor variant="secondary" href="#">Hello!</Anchor>
  </div>
  )
};
`}
        lang="tsx"
      />
    ),
    name: "Secondary",
    description:
      "A button-like link, for use as a secondary action routing to an internal page.",
  };

  const OutlineVariant = {
    jsx: (
      <div class="py-24 w-fit place-self-center mx-auto">
        <Anchor variant="outline" href="#">
          Hello!
        </Anchor>
      </div>
    ),
    codeBlock: (
      <CodeBlock
        code={`import { Anchor } from "~/devano/components";

export function AnchorOutlineDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Anchor variant="outline" href="#">Hello!</Anchor>
  </div>
  )
};
`}
        lang="tsx"
      />
    ),
    name: "Outline",
    description:
      "A button-like link, for use as a tertiary action routing to an internal page.",
  };

  return (
    <WriteUp
      name={"Anchor"}
      description={"Styled Solid-Router native Anchor components"}
      demoJSX={
        <div class="py-24 w-fit place-self-center mx-auto">
          <Anchor href="#">Hello!</Anchor>
        </div>
      }
      demoCodeBlock={<CodeBlock code={DefaultDemo} lang="tsx" />}
      variants={[SecondaryVariant, OutlineVariant]}
    />
  );
}
