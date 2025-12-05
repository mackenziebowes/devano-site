import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";

interface ProgressBarProps extends JSX.HTMLAttributes<HTMLDivElement> {
  length: number;
  index: number;
  filledBg?: string;
  emptyBg?: string;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const [l, rest] = splitProps(props, [
    "length",
    "index",
    "class",
    "filledBg",
    "emptyBg",
  ]);
  let containerCn = cn([
    "flex align-center items-center justify-center select-none w-full overflow-clip",
    l?.class,
  ]);
  let filledCn = cn(["h-3", l?.filledBg ?? "bg-chart-1"]);
  let emptyCn = cn(["h-3", l?.emptyBg ?? "bg-muted"]);
  return (
    <div class={containerCn} {...rest} aria-hidden>
      <div
        class={filledCn}
        style={{ width: `${((l.index + 1) / l.length) * 100}%` }}
      />
      <div
        class={emptyCn}
        style={{ width: `${100 - ((l.index + 1) / l.length) * 100}%` }}
      />
    </div>
  );
};
