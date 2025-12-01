import { Heading } from "~/devano/atoms";
import { ProgressDots } from "~/devano/components";
import Page from "../_components/Page";
import ComponentDisplayArea from "../_components/ComponentDisplayArea";
import CodeBlock from "../_components/CodeBlock";
import ComponentArticle from "../_components/ComponentArticle";

const DefaultDemo = `import { ProgressDots } from "~/devano/components";

export function ProgressDotsDemo() {
  return (
    <ProgressDots length={6} index={3} />
  )
};
`;
const VerticalDemo = `import { ProgressDots } from "~/devano/components";

export function ProgressDotsDemo() {
  return (
    <ProgressDots length={6} index={3} direction="vertical" />
  )
};
`;

export default function ProgressDotsPage() {
  return (
    <Page>
      <ComponentArticle>
        <Heading as="h3">Progress Bar</Heading>
        <p>A feedback component</p>
        <div class="flex flex-col gap-0 rounded-md overflow-clip">
          <ComponentDisplayArea>
            <div class="py-24 px-8 flex place-self-center mx-auto">
              <ProgressDots length={6} index={3} />
            </div>
          </ComponentDisplayArea>
          <CodeBlock code={DefaultDemo} lang="tsx" />
        </div>
        <Heading as="h4">Vertical variant</Heading>
        <div class="flex flex-col gap-0 rounded-md overflow-clip">
          <ComponentDisplayArea>
            <div class="py-24 px-8 flex place-self-center mx-auto">
              <ProgressDots length={6} index={3} direction="vertical" />
            </div>
          </ComponentDisplayArea>
          <CodeBlock code={VerticalDemo} lang="tsx" />
        </div>
      </ComponentArticle>
    </Page>
  );
}
