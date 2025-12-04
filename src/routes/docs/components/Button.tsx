import { Heading } from "~/devano/atoms";
import { Button } from "~/devano/components";
import Page from "../_components/Page";
import WriteUp from "../_components/ComponentWriteUp";
import CodeBlock from "../_components/CodeBlock";

export default function ButtonPage() {
	const AllVariant = {
		jsx: <AllDemoComponent />,
		codeBlock: <AllDemoCodeBlock />,
		name: "Style Variants",
		description: "All style variants of the Anchor component",
	};

	return (
		<WriteUp
			name={"Button"}
			description={"Styled Buttons components"}
			demoJSX={<DefaultDemo />}
			demoCodeBlock={<DefaultDemoCode />}
			variants={[AllVariant]}
		/>
	);
}

//
//     ____      ___         _ _
//    |    \ ___|  _|___ _ _| | |_
//    |  |  | -_|  _| .'| | | |  _|
//    |____/|___|_| |__,|___|_|_|
//

const DefaultDemoCodeInner = `import { Button } from "~/devano/components";

export function ButtonDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Button>Hello!</Button>
  </div>
  )
};
`;

const DefaultDemoCode = () => {
	return (
		<CodeBlock
			code={DefaultDemoCodeInner}
			lang="tsx"
		/>
	);
};

const DefaultDemo = () => {
	return (
		<div class="py-24 w-fit place-self-center mx-auto">
			<Button>Hello!</Button>
		</div>
	);
};

//
//     _____ _ _
//    |  _  | | |
//    |     | | |
//    |__|__|_|_|
//

const AllDemoCodeInner = `import { Button } from "~/devano/components";

export function AllButtonsDemo() {
  return (
    <div class="py-24 flex flex-wrap gap-2 max-w-[80%]">
      <Button>Default</Button>
      <Button variant="primary">Login</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
};
`;

const AllDemoCodeBlock = () => {
	return (
		<CodeBlock
			code={AllDemoCodeInner}
			lang="tsx"
		/>
	);
};

const AllDemoComponent = () => {
	return (
		<div class="py-24 flex flex-wrap gap-2 max-w-[80%] mx-auto text-sm">
			<Button>Default</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="link">Link</Button>
		</div>
	);
};
