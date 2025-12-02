import { Heading } from "~/devano/atoms";
import { Button } from "~/devano/components";
import Page from "../_components/Page";
import ComponentDisplayArea from "../_components/ComponentDisplayArea";
import CodeBlock from "../_components/CodeBlock";
import ComponentArticle from "../_components/ComponentArticle";

const DefaultDemo = `import { Button } from "~/devano/components";

export function ButtonDemo() {
  return (
    <Button>Hello!</Button>
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
  return (
    <Page>
      <ComponentArticle>
        <Heading as="h3">Button</Heading>
        <p>
          A component that displays a button element with useful default styles.
        </p>
        <div class="flex flex-col gap-0 rounded-md overflow-clip">
          <ComponentDisplayArea>
            <div class="py-24 w-fit place-self-center mx-auto">
              <Button>Hello!</Button>
            </div>
          </ComponentDisplayArea>
          <CodeBlock code={DefaultDemo} lang="tsx" />
        </div>
        <Heading as="h4">Variants</Heading>
        <div class="flex flex-col gap-0 rounded-md overflow-clip">
          <ComponentDisplayArea>
            <div class="py-24 flex flex-wrap gap-2 max-w-[80%] mx-auto text-sm">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </ComponentDisplayArea>
          <CodeBlock code={SecondaryDemo} lang="tsx" />
        </div>
      </ComponentArticle>
    </Page>
  );
}
