import { JSX, splitProps } from "solid-js";
import { A } from "@solidjs/router";
import { cn } from "~/devano/utils";

interface AnchorProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link";
  size?: "sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg";
  pill?: boolean;
  href: string;
  activeClass?: string;
  inactiveClass?: string;
  end?: boolean;
}

/**
 * A button that looks like a button.
 * @param props Accepts standard button props and three optional custom props.
 * @param props.variant Optional, defaults to "primary". Pass "secondary", "outline", "ghost", "destructive", or "link" to select subcomponents.
 * @param props.size Optional, defaults to "md". Pass "sm", "lg", "icon-sm", "icon", or "icon-lg" to change the size.
 * @param props.pill Optional, boolean. Makes the button fully rounded.
 * @param props.class Optional, goes into a cn function so you can override default styles as needed.
 */
export const Anchor = (props: AnchorProps) => {
  const [l, rest] = splitProps(props, [
    "variant",
    "size",
    "pill",
    "class",
    "activeClass",
    "inactiveClass",
    "end",
    "children",
  ]);
  const variant = l?.variant || "link";
  const size = l?.size || "md";
  const isPill = l?.pill || false;
  let className = cn([
    "flex flex-row items-center justify-start select-none hover:cursor-pointer focus:outline-ring",
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
      "bg-primary text-primary-foreground border-primary hover:opacity-85":
        variant == "primary",
      "bg-secondary text-secondary-foreground border-secondary hover:opacity-85":
        variant == "secondary",
      "bg-primary/10 text-foreground border-border hover:opacity-85":
        variant == "outline",
      "text-foreground hover:bg-primary/20 bg-transparent border-transparent focus:bg-primary/20":
        variant == "ghost",
      "bg-destructive text-foreground focus:outline-red-300":
        variant == "destructive",
      "hover:underline gap-2 border-0": variant == "link",
    },
    l?.class,
  ]);

  const end = l?.end ?? true;

  let inactiveCn = cn([
    "select-none hover:cursor-pointer focus:outline-none",
    className,
    l?.inactiveClass,
  ]);

  let activeCn = cn([
    "select-none hover:cursor-pointer focus:outline-none",
    className,
    l?.activeClass,
  ]);

  return (
    <A {...rest} activeClass={activeCn} inactiveClass={inactiveCn} end={end}>
      {l?.children ?? ""}
    </A>
  );
};
