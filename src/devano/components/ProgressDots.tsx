import { JSX, splitProps, For } from "solid-js";
import { cn } from "~/devano/utils";
interface ProgressDotsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  length: number;
  index: number;
  direction?: "horizontal" | "vertical";
  filledBg?: string;
  emptyBg?: string;
}

export const ProgressDots = (props: ProgressDotsProps) => {
  const [l, rest] = splitProps(props, [
    "length",
    "index",
    "direction",
    "class",
    "filledBg",
    "emptyBg",
  ]);
  let dir = l?.direction ?? "horizontal";
  let containerCn = cn([
    "flex align-center items-center gap-3 justify-center select-none w-full",
    {
      "flex-col": dir == "vertical",
    },
  ]);
  let dotCn = cn([
    "w-3 h-3 rounded-6",
    l.class?.includes("scale-")
      ? l.class
          .split(" ")
          .filter((cls) => cls.startsWith("scale-"))
          .join("")
      : "",
  ]);
  let filledCn = cn([dotCn, l?.filledBg ?? "bg-chart-1"]);
  let emptyCn = cn([dotCn, l?.emptyBg ?? "bg-muted"]);
  const index = () => l.index;
  return (
    <div class={containerCn} {...rest} aria-hidden>
      <For each={Array.from({ length: l.length })}>
        {(_, i) => {
          return <div class={i() == index() ? filledCn : emptyCn} />;
        }}
      </For>
    </div>
  );
};
