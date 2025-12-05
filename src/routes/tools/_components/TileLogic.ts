interface TileSchema {
  x1?: number; // col-start
  xd?: number | "full" | "auto"; // col-span (5 / full)
  x2?: number; // col-end
  y1?: number; // row-start
  yd?: number | "full" | "auto"; // row-span
  y2?: number;
  class?: string;
}

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type ValidDistance = number | "full" | "auto";
type ResponsiveNumber = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  "2xl"?: number;
};
type ResponsiveDistance = {
  xs?: ValidDistance;
  sm?: ValidDistance;
  md?: ValidDistance;
  lg?: ValidDistance;
  xl?: ValidDistance;
  "2xl"?: ValidDistance;
};

interface ResponsivePositions {
  x1?: ResponsiveNumber;
  x2?: ResponsiveNumber;
  y1?: ResponsiveNumber;
  y2?: ResponsiveNumber;
  xd?: ResponsiveDistance;
  yd?: ResponsiveDistance;
}

const parseXDFull = (args: ResponsiveDistance): string => {
  let className = "";
  if (args.xs == "full") className += "col-span-full";
  if (args.sm == "full") className += "sm:col-span-full";
  if (args.md == "full") className += "md:col-span-full";
  if (args.lg == "full") className += "lg:col-span-full";
  if (args.xl == "full") className += "xl:col-span-full";
  if (args["2xl"] == "full") className += "2xl:col-span-full";
  return className;
};

const parseXDAuto = (args: ResponsiveDistance): string => {
  let className = "";
  if (args.xs == "full") className += "col-auto";
  if (args.sm == "full") className += "sm:col-auto";
  if (args.md == "full") className += "md:col-auto";
  if (args.lg == "full") className += "lg:col-auto";
  if (args.xl == "full") className += "xl:col-auto";
  if (args["2xl"] == "full") className += "2xl:col-auto";
  return className;
};

const parseX1 = (args: ResponsiveNumber): string => {
  let className = "";
  if (args.xs) className += "col-start-" + args.xs;
  if (!args.xs) className += "col-start-1";
  if (args.sm) className += "col-start-" + args.sm;
  if (args.md) className += "col-start-" + args.md;
  if (args.lg) className += "col-start-" + args.lg;
  if (args.xl) className += "col-start-" + args.xl;
  if (args["2xl"]) className += "col-start-" + args["2xl"];
  return className;
};

const parseX2 = (args: ResponsiveNumber): string => {
  let className = "";
  if (args.xs) className += "col-end-" + args.xs;
  if (!args.xs) className += "-col-end-1";
  if (args.sm) className += "col-end-" + args.sm;
  if (args.md) className += "col-end-" + args.md;
  if (args.lg) className += "col-end-" + args.lg;
  if (args.xl) className += "col-end-" + args.xl;
  if (args["2xl"]) className += "col-end-" + args["2xl"];
  return className;
};

const calculateColumnStyles = (args: ResponsivePositions): string => {
  const { x1, x2, xd } = args;
  let className = "";
  if (args?.xd) {
    className += parseXDFull(args.xd);
    className += parseXDAuto(args.xd);
  }
  if (args?.x1) {
    className += parseX1(args.x1);
  }
  if (args?.x2) {
    className += parseX2(args.x2);
  }
  if (!x1 && !x2 && !xd) className = "col-auto";
  return className;
};

const parseYDFull = (args: ResponsiveDistance): string => {
  let className = "";
  if (args.xs == "full") className += "row-span-full";
  if (args.sm == "full") className += "sm:row-span-full";
  if (args.md == "full") className += "md:row-span-full";
  if (args.lg == "full") className += "lg:row-span-full";
  if (args.xl == "full") className += "xl:row-span-full";
  if (args["2xl"] == "full") className += "2xl:row-span-full";
  return className;
};

const parseYDAuto = (args: ResponsiveDistance): string => {
  let className = "";
  if (args.xs == "full") className += "row-auto";
  if (args.sm == "full") className += "sm:row-auto";
  if (args.md == "full") className += "md:row-auto";
  if (args.lg == "full") className += "lg:row-auto";
  if (args.xl == "full") className += "xl:row-auto";
  if (args["2xl"] == "full") className += "2xl:row-auto";
  return className;
};

const parseY1 = (args: ResponsiveNumber): string => {
  let className = "";
  if (args.xs) className += "row-start-" + args.xs;
  if (!args.xs) className += "row-start-1";
  if (args.sm) className += "row-start-" + args.sm;
  if (args.md) className += "row-start-" + args.md;
  if (args.lg) className += "row-start-" + args.lg;
  if (args.xl) className += "row-start-" + args.xl;
  if (args["2xl"]) className += "row-start-" + args["2xl"];
  return className;
};

const parseY2 = (args: ResponsiveNumber): string => {
  let className = "";
  if (args.xs) className += "row-end-" + args.xs;
  if (!args.xs) className += "-row-end-1";
  if (args.sm) className += "row-end-" + args.sm;
  if (args.md) className += "row-end-" + args.md;
  if (args.lg) className += "row-end-" + args.lg;
  if (args.xl) className += "row-end-" + args.xl;
  if (args["2xl"]) className += "row-end-" + args["2xl"];
  return className;
};

const calculatRowStyles = (args: ResponsivePositions): string => {
  const { y1, y2, yd } = args;
  let className = "";
  if (args?.yd) {
    className += parseXDFull(args.yd);
    className += parseXDAuto(args.yd);
  }
  if (args?.y1) {
    className += parseX1(args.y1);
  }
  if (args?.y2) {
    className += parseX2(args.y2);
  }
  if (!y1 && !y2 && !yd) className = "row-auto";
  return className;
};

export const calculateStyles = (args: ResponsivePositions): string => {
  let className = "";
  className += calculateColumnStyles(args);
  className += calculatRowStyles(args);
  return className;
};

// const calculateGridColumn = (args: TileSchema): Record<string, string> => {
//   const { x1, x2, xd } = args;
//   if (xd == "full") {
//     return { "grid-column": `1 / -1` };
//   }
//   if (xd == "auto") {
//     return { "grid-column": `auto` };
//   }
//   const returnArgs = {
//     startLine: 1,
//     endLine: -1,
//     span: 0,
//   };
//   if (x1) returnArgs.startLine = x1;
//   if (x2) returnArgs.endLine = x2;
//   if (x1 && xd) {
//     return { "grid-column": `${x1} / span ${xd}` };
//   }
//   if (x2 && xd) {
//     return { "grid-column": `span ${xd} / ${x2}` };
//   }
//   if (!xd)
//     return { "grid-column": `${returnArgs.startLine} / ${returnArgs.endLine}` };
//   return { "grid-column": `1 / -1` };
// };

// const calculateGridRow = (args: TileSchema): Record<string, string> => {
//   const { y1, y2, yd } = args;
//   if (yd == "full") {
//     return { "grid-row": `1 / -1` };
//   }
//   if (yd == "auto") {
//     return { "grid-row": `auto` };
//   }
//   const returnArgs = {
//     startLine: 1,
//     endLine: -1,
//     span: 0,
//   };
//   if (y1) returnArgs.startLine = y1;
//   if (y2) returnArgs.endLine = y2;
//   if (y1 && yd) {
//     return { "grid-row": `${y1} / span ${yd}` };
//   }
//   if (y2 && yd) {
//     return { "grid-row": `span ${yd} / ${y2}` };
//   }
//   if (!yd)
//     return { "grid-row": `${returnArgs.startLine} / ${returnArgs.endLine}` };
//   return { "grid-row": `1 / -1` };
// };
