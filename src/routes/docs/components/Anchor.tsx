import { Anchor } from "~/devano/components";
import WriteUp from "../_components/ComponentWriteUp";
import CodeBlock from "../_components/CodeBlock";

export default function ButtonPage() {
	const AllVariant = {
		jsx: <AllDemoComponent />,
		codeBlock: <AllDemoCodeBlock />,
		name: "Style Variants",
		description: "All style variants of the Anchor component",
	};

	const PrimaryVariant = {
		jsx: <PrimaryDemo />,
		codeBlock: <PrimaryCode />,
		name: "Primary",
		description:
			"A button-like link, for use as a primary action routing to an internal page.",
	};

	const SecondaryVariant = {
		jsx: <SecondaryDemo />,
		codeBlock: <SecondaryCode />,
		name: "Secondary",
		description:
			"A button-like link, for use as a secondary action routing to an internal page.",
	};

	const OutlineVariant = {
		jsx: <OutlineDemo />,
		codeBlock: <OutlineDemoCode />,
		name: "Outline",
		description:
			"A button-like link, for use as a tertiary action routing to an internal page.",
	};

	return (
		<WriteUp
			name={"Anchor"}
			description={"Styled Solid-Router native Anchor components"}
			demoJSX={<DefaultDemo />}
			demoCodeBlock={<DefaultDemoCode />}
			variants={[AllVariant, PrimaryVariant, SecondaryVariant, OutlineVariant]}
		/>
	);
}

//
//     ____      ___         _ _
//    |    \ ___|  _|___ _ _| | |_
//    |  |  | -_|  _| .'| | | |  _|
//    |____/|___|_| |__,|___|_|_|
//

const DefaultDemoCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorDemo() {
  return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <Anchor href="#">Hello!</Anchor>
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
			<Anchor href="#">Hello!</Anchor>
		</div>
	);
};

//
//     _____ _ _
//    |  _  | | |
//    |     | | |
//    |__|__|_|_|
//

const AllDemoCodeInner = `import { Anchor } from "~/devano/components";

export function AllAnchorsDemo() {
  return (
    <div class="py-24 flex flex-wrap gap-2 max-w-[80%] mx-auto text-sm">
      <Anchor href="#">Default</Anchor>
      <Anchor href="/login" variant="primary">Login</Anchor>
      <Anchor href="#" variant="secondary">Secondary</Anchor>
      <Anchor href="#" variant="outline">Outline</Anchor>
      <Anchor href="#" variant="ghost">Ghost</Anchor>
      <Anchor href="#" variant="destructive">Destructive</Anchor>
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
			<Anchor href="#">Default</Anchor>
			<Anchor
				href="#"
				variant="primary"
			>
				Login
			</Anchor>
			<Anchor
				href="#"
				variant="secondary"
			>
				Secondary
			</Anchor>
			<Anchor
				href="#"
				variant="outline"
			>
				Outline
			</Anchor>
			<Anchor
				href="#"
				variant="ghost"
			>
				Ghost
			</Anchor>
			<Anchor
				href="#"
				variant="destructive"
			>
				Destructive
			</Anchor>
		</div>
	);
};

//
//     _____     _
//    |  _  |___|_|_____ ___ ___ _ _
//    |   __|  _| |     | .'|  _| | |
//    |__|  |_| |_|_|_|_|__,|_| |_  |
//                              |___|

const PrimaryDemo = () => {
	return (
		<div class="py-24 w-fit place-self-center mx-auto">
			<Anchor
				variant="primary"
				href="#"
			>
				Hello!
			</Anchor>
		</div>
	);
};

const PrimaryCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorPrimaryDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="primary" href="#">Hello!</Anchor>
    </div>
  )
};`;

const PrimaryCode = () => {
	return (
		<CodeBlock
			code={PrimaryCodeInner}
			lang="tsx"
		/>
	);
};

//
//     _____                   _
//    |   __|___ ___ ___ ___ _| |___ ___ _ _
//    |__   | -_|  _| . |   | . | .'|  _| | |
//    |_____|___|___|___|_|_|___|__,|_| |_  |
//                                      |___|

const SecondaryDemo = () => {
	return (
		<div class="py-24 w-fit place-self-center mx-auto">
			<Anchor
				variant="secondary"
				href="#"
			>
				Hello!
			</Anchor>
		</div>
	);
};

const SecondaryCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorSecondaryDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="secondary" href="#">Hello!</Anchor>
    </div>
  )
};`;

const SecondaryCode = () => {
	return (
		<CodeBlock
			code={SecondaryCodeInner}
			lang="tsx"
		/>
	);
};

//
//     _____     _   _ _
//    |     |_ _| |_| |_|___ ___
//    |  |  | | |  _| | |   | -_|
//    |_____|___|_| |_|_|_|_|___|
//

const OutlineDemo = () => {
	return (
		<div class="py-24 w-fit place-self-center mx-auto">
			<Anchor
				variant="outline"
				href="#"
			>
				Hello!
			</Anchor>
		</div>
	);
};

const OutlineCodeInner = `import { Anchor } from "~/devano/components";

export function AnchorOutlineDemo() {
  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <Anchor variant="outline" href="#">Hello!</Anchor>
    </div>
  )
};`;

const OutlineDemoCode = () => {
	return (
		<CodeBlock
			code={OutlineCodeInner}
			lang="tsx"
		/>
	);
};

//
//     _____ _           _
//    |   __| |_ ___ ___| |_
//    |  |  |   | . |_ -|  _|
//    |_____|_|_|___|___|_|
//

//
//     ____          _               _
//    |    \ ___ ___| |_ ___ _ _ ___| |_
//    |  |  | -_|_ -|  _|  _| | |  _|  _|
//    |____/|___|___|_| |_| |___|___|_|
//

//
//     __    _     _
//    |  |  |_|___| |_
//    |  |__| |   | '_|
//    |_____|_|_|_|_,_|
//
