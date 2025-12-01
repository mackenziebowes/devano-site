import { Page } from "~/devano/components";
import { JSX } from "solid-js";
import ComponentNav from "~/nav/components";

export default function DocPage(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <Page>
      <div class="flex flex-row items-center justify-center">
        <div class="flex flex-row justify-between items-baseline lg:max-w-[80dvh]">
          <h2>Devano</h2>
        </div>
      </div>
      <div class="flex flex-row justify-between w-full">
        <div class="relative"></div>
        <div class="fixed flex flex-col gap-4 px-8 text-sm">
          <ComponentNav />
        </div>
        <div class=" py-24">{props.children}</div>
        <div></div>
      </div>
    </Page>
  );
}
