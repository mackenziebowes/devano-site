import z from "zod";
import { cn } from "~/devano/utils";
import { JSX, splitProps } from "solid-js";

type GridProps = JSX.HTMLAttributes<HTMLDivElement>;

export const Grid = (props: GridProps) => {
  const [l, rest] = splitProps(props, ["children", "class"]);

  const className = cn(["grid w-full h-full", l?.class]);

  return (
    <div class={className} {...rest}>
      {l.children}
    </div>
  );
};
