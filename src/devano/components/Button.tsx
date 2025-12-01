import { JSX, splitProps } from "solid-js";
import { cn } from "~/devano/utils";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link";
  size?: "sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg";
  pill?: boolean;
}

/**
 * A button that looks like a button.
 * @param props Accepts standard button props and three optional custom props.
 * @param props.variant Optional, defaults to "primary". Pass "secondary", "outline", "ghost", "destructive", or "link" to select subcomponents.
 * @param props.size Optional, defaults to "md". Pass "sm", "lg", "icon-sm", "icon", or "icon-lg" to change the size.
 * @param props.pill Optional, boolean. Makes the button fully rounded.
 * @param props.class Optional, goes into a cn function so you can override default styles as needed.
 */
export default function Button(props: ButtonProps) {
  const [l, rest] = splitProps(props, [
    "variant",
    "size",
    "pill",
    "class",
    "children",
    "disabled",
  ]);
  const variant = l?.variant || "primary";
  const size = l?.size || "md";
  const isPill = l?.pill || false;
  let className = cn([
    "flex flex-row transition-all items-center justify-start select-none hover:cursor-pointer focus:outline-neutral-500",

    {
      "gap-2 px-2 py-0.5 rounded-md border-2 focus:outline-2 text-sm":
        size == "sm",
      "gap-2 px-4 py-1 rounded-md border-2 focus:outline-2 text-md":
        size == "md",
      "gap-2 px-6 py-2 rounded-md border-2.5 focus:outline-2.5 text-lg":
        size == "lg",
      "justify-center px-2 aspect-1/1 rounded-md border-2 focus:outline-2 text-sm":
        size == "icon-sm",
      "justify-center px-4 aspect-1/1 rounded-md border-2 focus:outline-2 text-md":
        size == "icon",
      "justify-center px-4 aspect-1/1 rounded-md border-2.5 focus:outline-2.5 text-lg":
        size == "icon-lg",
    },
    {
      "rounded-full": isPill,
    },
    {
      "bg-neutral-800 border-neutral-800 text-neutral-100 hover:opacity-85":
        variant == "primary",
      "bg-neutral-600 border-neutral-600 text-neutral-100 hover:opacity-85":
        variant == "secondary",
      "bg-neutral-600/10 text-neutral-800/90 border-neutral-800/50 hover:opacity-85":
        variant == "outline",
      "text-neutral-800 border-transparent bg-transparent hover:bg-neutral-600/50 focus:bg-neutral-600/50":
        variant == "ghost",
      "bg-red-400 border-red-400 text-neutral-200 focus:outline-red-300":
        variant == "destructive",
      "hover:underline focus:underline gap-2 border-0 underline-offset-4":
        variant == "link",
    },
    l?.class,
    { "opacity-50 cursor-not-allowed": l?.disabled },
  ]);

  return (
    <button class={className} {...rest}>
      {l?.children ?? ""}
    </button>
  );
}

const meow = <button class="transition-colors">Meow</button>;
