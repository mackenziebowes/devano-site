import { cwd } from "node:process";
import { join } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";

const writeOut = (fileName: string, contents: string) => {
  const outLocation = join(cwd(), "scripts", "variantMarkup", fileName);
  writeFileSync(outLocation, contents, "utf-8");
};

type VariantDetails = {
  propName: string;
  propValue: string;
};

const makeComponentName = (name: string) => {
  return name[0].toUpperCase() + name.slice(1, name.length);
};

type VariantCreationDetails = {
  propName: string;
  propValue: string;
  componentName: string;
  variantName: string;
};

const formatPropForJSX = (propName: string, propValue: string) => {
  // Check if propValue is a boolean or number represented as a string
  if (propValue === "true" || propValue === "false") {
    return propValue === "true" ? propName : `${propName}={false}`;
  }
  if (!isNaN(Number(propValue))) {
    return `${propName}={${propValue}}`;
  }
  return `${propName}=\"${propValue}\"`;
};

const formatPropForCodeBlock = (propName: string, propValue: string) => {
  // Check if propValue is a boolean or number represented as a string
  if (propValue === "true" || propValue === "false") {
    return propValue === "true" ? propName : `${propName}={false}`;
  }
  if (!isNaN(Number(propValue))) {
    return `${propName}={${propValue}}`;
  }
  return `${propName}=\"${propValue}\"`;
};

const makeDemoTemplate = (details: VariantCreationDetails) => {
  const propAttribute = formatPropForJSX(details.propName, details.propValue);
  return `const ${details.variantName}Demo = () => {
	return (
		<div class="py-24 w-fit place-self-center mx-auto">
			<${details.componentName}
				${propAttribute}
			>
				Hello!
			</${details.componentName}>
		</div>
	);
  };`;
};

const makeDemoCodeInner = (details: VariantCreationDetails) => {
  const propAttribute = formatPropForCodeBlock(
    details.propName,
    details.propValue,
  );
  return `const ${details.variantName}CodeInner = \`import { ${details.componentName} } from "~/devano/components";

export function ${details.componentName}${details.variantName}Demo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <${details.componentName} ${propAttribute}>Hello!</${details.componentName}>
    </div>
  )
};\`;
`;
};

const makeDemoCodeBlock = (details: VariantCreationDetails) => {
  return `const ${details.variantName}Code = () => {
	return (
		<CodeBlock
			code={${details.variantName}CodeInner}
			lang="tsx"
		/>
	);
  };`;
};

const makeVariant = (componentName: string, variantDetails: VariantDetails) => {
  const camelCaseVariantName = makeComponentName(variantDetails.propValue);
  const camelCaseComponentName = makeComponentName(componentName);
  const details: VariantCreationDetails = {
    propName: variantDetails.propName,
    propValue: variantDetails.propValue,
    componentName: camelCaseComponentName,
    variantName: camelCaseVariantName,
  };
  const demoTemplate = makeDemoTemplate(details);
  const demoCodeInner = makeDemoCodeInner(details);
  const demoCodeBlock = makeDemoCodeBlock(details);
  return `\n${demoTemplate}\n${demoCodeInner}\n${demoCodeBlock}`;
};

const makeVariants = (
  componentName: string,
  variantDetails: VariantDetails[],
) => {
  let payload = ``;
  for (const variant of variantDetails) {
    payload += makeVariant(componentName, variant) + "\n";
  }
  return payload;
};

const makeVariantDetails = (values: string[], propName: string) => {
  let payload: VariantDetails[] = [];
  for (const value of values) {
    payload.push({
      propName,
      propValue: value,
    });
  }
  return payload;
};

const missingAnchorStyleVariants = makeVariantDetails(
  ["ghost", "destructive"],
  "variant",
);

const missingAnchorSizeVariants = makeVariantDetails(
  ["sm", "md", "lg"],
  "size",
);

const anchorStyleVariants = makeVariants("Anchor", missingAnchorStyleVariants);
const anchorSizeVariants = makeVariants("Anchor", missingAnchorSizeVariants);

const missingButtonStyleVariants = makeVariants(
  "Button",
  makeVariantDetails(
    ["secondary", "outline", "ghost", "destructive", "link"],
    "variant",
  ),
);

const missingButtonSizeVariants = makeVariants(
  "Button",
  makeVariantDetails(["sm", "md", "lg"], "size"),
);

const main = () => {
  writeOut("Anchor", anchorStyleVariants + "\n" + anchorSizeVariants);
  writeOut(
    "Button",
    missingButtonStyleVariants + "\n" + missingButtonSizeVariants,
  );
};

main();
