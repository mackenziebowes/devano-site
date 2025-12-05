import { JSX, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { animate } from "animejs";

export default function ComponentArticle(
  props: JSX.HTMLAttributes<HTMLDivElement>,
) {
  onMount(() => {
    animate(".compArticle", {
      opacity: 1,
      delay: 125,
      duration: 125,
    });
  });

  return (
    <article class="compArticle w-[70ch] px-4 py-2 flex flex-col gap-4 opacity-0 anime-out fade-out">
      {props.children}
    </article>
  );
}
