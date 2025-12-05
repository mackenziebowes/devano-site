import { Anchor } from "~/devano/components";
import { For } from "solid-js";

const routes = [
  { label: "Anchor", route: "Anchor" },
  { label: "Breadcrumb", route: "Breadcrumb" },
  { label: "Button", route: "Button" },
  { label: "Password Input", route: "PasswordInput" },
  { label: "ProgressBar", route: "ProgressBar" },
  { label: "ProgressDots", route: "ProgressDots" },
  { label: "", route: "" },
];

export default function ComponentNav() {
  const items = routes.filter((route) => route.label.length > 0);
  return (
    <div class="flex flex-col gap-2 items-start">
      <h3 class="text-md opacity-50">Components</h3>
      <For each={items}>
        {(item) => {
          return (
            <Anchor
              variant="ghost"
              href={`/docs/components/${item.route}`}
              activeClass="bg-neutral-200 dark:bg-neutral-600/50"
              inactiveClass=""
              end={false}
              size="sm"
              class="-ml-2"
            >
              {item.label}
            </Anchor>
          );
        }}
      </For>
    </div>
  );
}
