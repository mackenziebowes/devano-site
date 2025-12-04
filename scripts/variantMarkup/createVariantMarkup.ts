import { cwd } from "node:process";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

const writeOut = (fileName: string, contents: string) => {
  const outLocation = join(cwd(), "scripts", "variantMarkup", fileName);
  writeFileSync(outLocation, contents, "utf-8");
};

// type VariantDetails = {
//   name: string,
// }

// const createVariant = (componentName: string, variantDetails: )
