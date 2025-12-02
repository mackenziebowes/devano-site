import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";
export function Page(props: JSX.HTMLAttributes<HTMLElement>) {
  const [l, rest] = splitProps(props, ["class"]);
  let pageCn = cn([
    "flex flex-col w-full min-h-dvh gap-16 items-center bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100",
    l?.class,
  ]);
  return <main class={pageCn} {...rest} />;
}
