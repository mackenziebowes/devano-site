import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";
interface TileSchema {
  x1?: number; // col-start
  xd?: number | "full" | "auto"; // col-span (5 / full)
  x2?: number; // col-end
  y1?: number; // row-start
  yd?: number | "full" | "auto"; // row-span
  y2?: number;
  class?: string;
}

type TileProps = JSX.HTMLAttributes<HTMLDivElement> &
  TileSchema & {
    children: JSX.Element;
  };

const calculateGridColumn = (args: TileSchema): Record<string, string> => {
  const { x1, x2, xd } = args;
  if (xd == "full") {
    return { "grid-column": `1 / -1` };
  }
  if (xd == "auto") {
    return { "grid-column": `auto` };
  }
  const returnArgs = {
    startLine: 1,
    endLine: -1,
    span: 0,
  };
  if (x1) returnArgs.startLine = x1;
  if (x2) returnArgs.endLine = x2;
  if (x1 && xd) {
    return { "grid-column": `${x1} / span ${xd}` };
  }
  if (x2 && xd) {
    return { "grid-column": `span ${xd} / ${x2}` };
  }
  if (!xd)
    return { "grid-column": `${returnArgs.startLine} / ${returnArgs.endLine}` };
  return { "grid-column": `1 / -1` };
};

const calculateGridRow = (args: TileSchema): Record<string, string> => {
  const { y1, y2, yd } = args;
  if (yd == "full") {
    return { "grid-row": `1 / -1` };
  }
  if (yd == "auto") {
    return { "grid-row": `auto` };
  }
  const returnArgs = {
    startLine: 1,
    endLine: -1,
    span: 0,
  };
  if (y1) returnArgs.startLine = y1;
  if (y2) returnArgs.endLine = y2;
  if (y1 && yd) {
    return { "grid-row": `${y1} / span ${yd}` };
  }
  if (y2 && yd) {
    return { "grid-row": `span ${yd} / ${y2}` };
  }
  if (!yd)
    return { "grid-row": `${returnArgs.startLine} / ${returnArgs.endLine}` };
  return { "grid-row": `1 / -1` };
};

export const Tile = (props: TileProps) => {
  const [l, rest] = splitProps(props, [
    "style",
    "x1",
    "x2",
    "xd",
    "y1",
    "y2",
    "yd",
    "class",
    "children",
  ]);
  const className = cn([
    "overflow-y-scroll w-full h-full place-self-stretch subgrid",
    l?.class,
  ]);
  const columnStyle = calculateGridColumn(l);
  const rowStyle = calculateGridRow(l);

  return (
    <div class={className} style={{ ...columnStyle, ...rowStyle }} {...rest}>
      {l.children}
    </div>
  );
};
