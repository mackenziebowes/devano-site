import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card(props: CardProps) {
  let [l, rest] = splitProps(props, ["class", "children", "title"]);

  let cardCN = cn([
    "flex flex-col min-w-[35ch] border-[4px] border-border px-6 py-4 pb-4 rounded-md gap-6 overflow-clip",
    l?.class,
  ]);
  let titleCN = cn([
    "flex flex-grow bg-chart-5 text-foreground py-2 px-4 -mt-4 -mx-6 text-2xl",
  ]);

  return (
    <div class={cardCN} {...rest}>
      {l?.title && <div class={titleCN}>{l.title}</div>}
      {l.children}
    </div>
  );
}
