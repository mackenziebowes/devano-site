import DocPage from "./Page";
import ComponentArticle from "./ComponentArticle";
import ComponentDisplayArea from "./ComponentDisplayArea";
import { JSX, For, Show, children, Suspense } from "solid-js";

type WriteUpProps = {
  name: string;
  description: string;
  demoJSX: JSX.Element;
  demoCodeBlock: JSX.Element;
  variants: {
    jsx: JSX.Element;
    codeBlock: JSX.Element;
    name: string;
    description: string;
  }[];
};

export default function WriteUp(props: WriteUpProps) {
  const safeDemoJSX = children(() => props.demoJSX);
  const safeDemoCodeBlock = children(() => props.demoCodeBlock);
  return (
    <DocPage>
      <Suspense fallback={null}>
        <ComponentArticle>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <div class="flex flex-col gap-0 rounded-md overflow-clip">
            <ComponentDisplayArea>{safeDemoJSX()}</ComponentDisplayArea>
            {safeDemoCodeBlock()}
          </div>
          <Show when={props.variants.length > 0}>
            <For each={props.variants}>
              {(variant) => (
                <DemoVariant
                  jsx={variant.jsx}
                  codeBlock={variant.codeBlock}
                  name={variant.name}
                  description={variant.description}
                />
              )}
            </For>
          </Show>
        </ComponentArticle>
      </Suspense>
    </DocPage>
  );
}

const DemoVariant = (props: {
  jsx: JSX.Element;
  codeBlock: JSX.Element;
  name: string;
  description: string;
}) => {
  const safeDemoJSX = children(() => props.jsx);
  const safeDemoCodeBlock = children(() => props.codeBlock);
  return (
    <>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <div class="flex flex-col gap-0 rounded-md overflow-clip">
        <ComponentDisplayArea>{safeDemoJSX()}</ComponentDisplayArea>
        {safeDemoCodeBlock()}
      </div>
    </>
  );
};
