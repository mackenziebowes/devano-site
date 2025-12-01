import { Heading } from "~/devano/atoms";
import { ProgressBar } from "~/devano/components";
import Page from "../_components/Page";
import ComponentDisplayArea from "../_components/ComponentDisplayArea";
import CodeBlock from "../_components/CodeBlock";
import ComponentArticle from "../_components/ComponentArticle";

const DefaultDemo = `import { ProgressBar } from "~/devano/components";

export function ProgressBarDemo() {
  return (
      <ProgressBar length={100} index={50} direction="horizontal" />
  )
};
`;

export default function ProgressBarPage() {
  return (
    <Page>
      <ComponentArticle>
        <Heading as="h3">Progress Bar</Heading>
        <p>A feedback component</p>
        <div class="flex flex-col gap-0 rounded-md overflow-clip">
          <ComponentDisplayArea>
            <div class="py-24 px-8 place-self-center max-w-[80%] mx-auto">
              <ProgressBar length={100} index={50} />
            </div>
          </ComponentDisplayArea>
          <CodeBlock code={DefaultDemo} lang="tsx" />
        </div>
      </ComponentArticle>
    </Page>
  );
}
