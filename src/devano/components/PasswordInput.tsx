import { JSX, Match, splitProps, Switch, createSignal } from "solid-js";
import { cn } from "~/devano/utils";
import { Eye, EyeOff, Pi } from "lucide-solid";
import { Button } from "./Button";

import type { Accessor, Setter } from "solid-js";
import { ZodType, ZodError } from "zod";

interface ExtendedPasswordInputProps
  extends JSX.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  get: Accessor<string>;
  set: Setter<string>;
  validationSchema?: ZodType<any>;
  onValidationError?: (error: string) => void;
}

interface ExtendedInputEvent extends InputEvent {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
}

export function PasswordInput(props: ExtendedPasswordInputProps) {
  const [vis, setVis] = createSignal(false);
  const [l, most] = splitProps(props, [
    "class",
    "label",
    "placeholder",
    "get",
    "set",
    "validationSchema",
    "onValidationError",
  ]);
  const [_, rest] = splitProps(most, [
    "value",
    "on:change",
    "onChange",
    "onchange",
    "on:input",
    "onInput",
    "oninput",
    "on:blur",
    "onBlur",
    "onblur",
  ]);

  const [error, set_error] = createSignal<string | null>(null);

  let className = cn([
    "select-none focus:outline-none focus:border-[transparent] flex-1",
    l?.class,
    error()
      ? "border-red-500 dark:border-red-800 hover:border-red-400 dark:border-red-700"
      : "",
  ]);

  const handleBlur = () => {
    if (l.validationSchema) {
      try {
        l.validationSchema.parse(l.get());
        set_error(null);
      } catch (err) {
        if (err instanceof ZodError) {
          const errorMessage = err.errors[0]?.message || "Invalid Input";
          if (l.onValidationError) {
            l.onValidationError(errorMessage);
          } else {
            set_error(errorMessage);
          }
        }
      }
    }
  };

  const handleInput = (evt: ExtendedInputEvent) => {
    if (l.validationSchema && l.onValidationError) {
      l.onValidationError("");
    } else {
      set_error("");
    }
    l.set(evt.target.value);
  };

  const toggleVis = () => {
    setVis((v) => !v);
  };

  return (
    <div class="flex flex-col gap-0.5 flex-grow w-full">
      <label class="text-sm select-none pl-3.5">{l.label}</label>
      <div class="has-[input:focus-within]:outline-2 has-[input:focus-within]:bg-muted has-[input:focus-within]:outline-ring flex bg-background hover:bg-muted rounded-md px-1.5 py-1.5 border-2 border-muted-foreground hover:border-foreground pl-3">
        <input
          type={vis() ? "text" : "password"}
          placeholder={l?.placeholder || l.label}
          class={className}
          value={l.get()}
          onInput={handleInput}
          onBlur={handleBlur}
          {...rest}
        />
        <Button size="icon-sm" variant="ghost" onClick={() => toggleVis()}>
          <Switch fallback={<></>}>
            <Match when={vis() == false}>
              <Eye class="w-6" />
            </Match>
            <Match when={vis() == true}>
              <EyeOff class="w-6" />
            </Match>
          </Switch>
        </Button>
      </div>
      {error() && <span class="text-(--c-e-e) text-[12px]">{error()}</span>}
    </div>
  );
}
