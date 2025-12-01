import { codeToHtml } from "shiki";
import { createResource, onCleanup, createEffect } from "solid-js";
import { cn } from "~/devano/utils";

const CodeBlock = (props: {
  code: string;
  lang: "tsx" | "jsx";
  class?: string;
}) => {
  let containerRef!: HTMLDivElement;

  // Fetch the highlighted HTML
  const [html] = createResource(async () => {
    return (await codeToHtml(props.code, {
      lang: props.lang,
      theme: "github-dark",
    })) as string;
  });

  // Clear previous HTML before setting new content
  onCleanup(() => {
    if (containerRef) containerRef.innerHTML = "";
  });

  // Render the highlighted HTML
  createEffect(() => {
    if (html() && containerRef) {
      containerRef.innerHTML = html() as string;
    }
  });

  return (
    <div
      ref={containerRef}
      class={cn(
        "[&>*]:p-3 [&>*]:font-mono [&>*]:text-sm",
        props.class,
        "shiki-code-block",
      )}
    ></div>
  );
};

export default CodeBlock;
