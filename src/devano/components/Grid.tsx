import z from "zod";
import { cn } from "~/devano/utils";
import { JSX, splitProps } from "solid-js";

// Two "main" types of grids possible
// A) Relative
// needs at minimum:
// - count (applied to x & y)
// - children
// B) Unit
// needs at minimum:
// - size (applied to x & y)
// - children
// Default is "Relative" style
// Todo: Figure out how to accept Unit style

interface GridSchema {
  // Core dimensions
  class?: string;
  // Grid structure
  count?: number;
  aspect?: string;
  rows?: number | string; // 24 or "repeat(24, 1fr)"
  cols?: number | string;
  style?: Record<string, string>;
  // Spacing
  gap?: string;

  children: JSX.Element;
}

const aspectSchema = z
  .string()
  .regex(/^(\d+)(\/|:)?(\d+)?$/, {
    message: "Invalid format",
  })
  .refine(
    (val) => {
      if (val.includes("/") || val.includes(":")) {
        // ratio form, validate both sides numerically
        const [a, b] = val.split(/\/|:/).map(Number);
        return a > 0 && b > 0; // both must be positive
      } else {
        // single number form, limit to a range
        const n = Number(val);
        return n > 0 && n <= 9;
      }
    },
    {
      message: "Invalid aspect ratio or number out of range",
    },
  );

type GridProps = JSX.HTMLAttributes<HTMLDivElement> & GridSchema;

const testArgs = (args: GridSchema) => {
  const hasCols = z.number().safeParse(args.cols).success;
  const hasRows = z.number().safeParse(args.rows).success;
  const hasCount = z.number().safeParse(args.count).success;
  const hasAspect = aspectSchema.safeParse(args.aspect).success;
  // todo - better!
  // Check grid-gap spec for acceptable units, check tailwind for acceptable numerics & their conversions
  const hasGap = z.string().safeParse(args.gap).success;
  return {
    hasCols,
    hasRows,
    hasCount,
    hasAspect,
    hasGap,
  };
};

const foldObjects = (a: Record<string, string>, b: Record<string, string>) => {
  return { ...a, ...b };
};

export default function Grid(props: GridProps) {
  const [l, rest] = splitProps(props, [
    "children",
    "class",
    "count",
    "aspect",
    "rows",
    "cols",
    "gap",
    "style",
  ]);

  const className = cn(["grid w-full h-full", l?.class]);
  const testRes = testArgs(l);
  const aspectStyle = { "aspect-ratio": l.aspect! };
  const gapStyle = { gap: l.gap! };
  const countStyle = {
    "grid-template-rows": `repeat(${l.count!}, 1fr)`,
    "grid-template-columns": `repeat(${l.count!}, 1fr)`,
  };
  const rowStyle = {
    "grid-template-rows": `repeat(${l.count!}, 1fr)`,
  };
  const colStyle = {
    "grid-template-columns": `repeat(${l.count!}, 1fr)`,
  };
  const countStyles = () => {
    let returnObject: Record<string, string> = { ...countStyle };
    if (testRes.hasGap) {
      returnObject = foldObjects(returnObject, gapStyle);
    }
    if (testRes.hasAspect)
      returnObject = foldObjects(returnObject, aspectStyle);
    return returnObject;
  };
  const styleArgs = () => {
    let returnObject: Record<string, string> = {};
    if (testRes.hasCount) {
      return countStyles();
    }
    if (testRes.hasCols) {
      foldObjects(returnObject, colStyle);
    }
    if (testRes.hasRows) {
      foldObjects(returnObject, rowStyle);
    }
    if (testRes.hasGap) foldObjects(returnObject, gapStyle);
    if (testRes.hasAspect) foldObjects(returnObject, aspectStyle);
    return returnObject;
  };
  return (
    <div
      class={className}
      {...rest}
      style={foldObjects(l?.style ?? {}, styleArgs())}
    >
      {l.children}
    </div>
  );
}
