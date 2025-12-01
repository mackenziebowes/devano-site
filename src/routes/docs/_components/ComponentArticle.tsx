import { JSX } from "solid-js";

export default function ComponentArticle(
  props: JSX.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <article class="w-[70ch] px-4 py-2 flex flex-col gap-4">
      {props.children}
    </article>
  );
}
