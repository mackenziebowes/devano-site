import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";
export const Page = (props: JSX.HTMLAttributes<HTMLElement>) => {
  const [l, rest] = splitProps(props, ["class"]);
  let pageCn = cn([
    "flex flex-col w-full min-h-dvh gap-16 items-center bg-background text-foreground",
    l?.class,
  ]);
  return <main class={pageCn} {...rest} />;
};
