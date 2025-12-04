import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";

interface ProgressBarProps extends JSX.HTMLAttributes<HTMLDivElement> {
  length: number;
  index: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const [l, rest] = splitProps(props, ["length", "index", "class"]);
  let containerCn = cn([
    "flex align-center items-center justify-center select-none w-full overflow-clip",
    l?.class,
  ]);
  let filledCn = cn([
    "h-3",
    l.class?.includes("text-")
      ? l.class
          .split(" ")
          .map((cls) =>
            cls.startsWith("text-") ? cls.replace("text-", "bg-") : cls,
          )
          .join(" ")
      : "bg-green-500",
  ]);
  let emptyCn = cn([
    "h-3",
    l.class?.includes("bg-")
      ? l.class
          .split(" ")
          .map((cls) =>
            cls.startsWith("bg-") ? cls.replace("bg-", "bg-") : cls,
          )
          .join(" ")
      : "bg-neutral-500",
  ]);
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
