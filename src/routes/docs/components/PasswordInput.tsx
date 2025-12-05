import { PasswordInput } from "~/devano/components";
import WriteUp from "../_components/ComponentWriteUp";
import CodeBlock from "../_components/CodeBlock";

export default function PasswordInputPage() {
  return (
    <WriteUp
      name={"Password Input"}
      description={
        "Prebuilt Password input with toggleable password masking. This is somewhat of an Antipattern lately - you should prefer to use the <OTP /> utility in a proper application for increased accessibility."
      }
      demoJSX={<DefaultDemo />}
      demoCodeBlock={<DefaultDemoCode />}
      variants={[]}
    />
  );
}

const DefaultDemoCodeInner = `import { PasswordInput } from "~/devano/components";


export function PasswordInputDemo() {
const [password, set_password] = createSignal("");

return (
  <div class="py-24 w-fit place-self-center mx-auto">
    <PasswordInput
      get={password}
      set={set_password}
      label="password"
    ></PasswordInput>
  </div>
);
};`;

const DefaultDemoCode = () => {
  return <CodeBlock code={DefaultDemoCodeInner} lang="tsx" />;
};

import { createSignal } from "solid-js";

const DefaultDemo = () => {
  const [password, set_password] = createSignal("");

  return (
    <div class="py-24 w-fit place-self-center mx-auto">
      <PasswordInput
        get={password}
        set={set_password}
        label="password"
      ></PasswordInput>
    </div>
  );
};
