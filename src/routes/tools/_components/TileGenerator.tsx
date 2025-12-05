import { Button, Page } from "~/devano/components";
import { calculateStyles } from "./TileLogic";
import { TextArea } from "~/devano/atoms";
import { createSignal, JSX, type Accessor, type Setter } from "solid-js";
import z from "zod";

type NumberInput = number | undefined;
type DistanceInput = number | "full" | "auto" | undefined;

export default function TileGeneratorPage() {
  return (
    <Page>
      <div class="grid grid-cols-1 p-8 w-full">
        <h1 class="text-2xl xl:text-4xl text-start w-full">Tile Generator</h1>

        <TileGeneratorTextInput />

        {/* <Button onclick={}>Generate</Button> */}
      </div>
    </Page>
  );
}

const TileGeneratorTextInput = () => {
  const [textInput, set_textInput] = createSignal<string>("");
  return (
    <div class="p-8 w-[40ch] h-fit">
      <TextArea get={textInput} set={set_textInput} label="JSON Input" />
    </div>
  );
};

interface TileGeneratorSizeProps {
  label: string;
}

const TileGeneratorSize = (props: TileGeneratorSizeProps) => {
  const [x1, set_x1] = createSignal<NumberInput>(1);
  const [x2, set_x2] = createSignal<NumberInput>(-1);
  const [y1, set_y1] = createSignal<NumberInput>(1);
  const [y2, set_y2] = createSignal<NumberInput>(-1);
  const [xd, set_xd] = createSignal<DistanceInput>();
  const [yd, set_yd] = createSignal<DistanceInput>();

  return (
    <div class="flex flex-col gap-4 py-4 pt-8">
      <h3 class="text-xl lg:text-2xl xl:text-3xl font-bold">{props.label}</h3>
      <div class="flex flex-col max-w-[50ch] gap-3 py-4">
        <TileNumberInput get={x1} set={set_x1} label="x1" />
        <TileNumberInput get={x2} set={set_x2} label="x2" />
        <TileNumberInput get={y1} set={set_y1} label="y1" />
        <TileNumberInput get={y2} set={set_y2} label="y2" />
      </div>
      <div class="flex flex-col max-w-[50ch] gap-3 py-4">
        <TileDistanceInput get={xd} set={set_xd} label="xd" />
        <TileDistanceInput get={yd} set={set_yd} label="yd" />
      </div>
    </div>
  );
};

interface TileNumberInputProps extends JSX.HTMLAttributes<HTMLDivElement> {
  get: Accessor<NumberInput>;
  set: Setter<NumberInput>;
  label: string;
}

interface ExtendedInputEvent extends InputEvent {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
}

const TileNumberInput = (props: TileNumberInputProps) => {
  let inputRef!: HTMLInputElement;
  const updateValue = (e: ExtendedInputEvent) => {
    if (!e.target || !e.target.value) return null;
    const value = z.number().safeParse(e.target.value);
    if (!value.success) return null;
    props.set(value.data);
  };
  return (
    <div class="flex flex-row gap-0 p-2 items-center rounded-md border-2 w-fit border-muted overflow-clip has-[input:focus-within]:outline-2 has-[input:focus-within]:bg-muted has-[input:focus-within]:outline-ring hover:bg-muted">
      <label
        class="bg-muted p-3 peer-focus-within:bg-primary"
        onclick={() => {
          if (inputRef) {
            inputRef.focus();
          }
        }}
      >
        {props.label}
      </label>
      <div class="p-3">
        <input
          ref={inputRef}
          type="number"
          value={props.get()}
          onInput={updateValue}
          inputmode="numeric"
          step="1"
          class="peer focus:border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

interface TileDistanceInputProps extends JSX.HTMLAttributes<HTMLDivElement> {
  get: Accessor<DistanceInput>;
  set: Setter<DistanceInput>;
  label: string;
}

const TileDistanceInput = (props: TileDistanceInputProps) => {
  let inputRef!: HTMLInputElement;
  const updateValue = (e: ExtendedInputEvent) => {
    if (!e.target || !e.target.value) return null;
    const value = z.number().safeParse(e.target.value);
    if (!value.success) return null;
    props.set(value.data);
  };
  return (
    <div class="flex flex-row gap-0 p-2 items-center rounded-md border-2 w-fit border-muted overflow-clip has-[input:focus-within]:outline-2 has-[input:focus-within]:bg-muted has-[input:focus-within]:outline-ring hover:bg-muted">
      <label
        class="bg-muted p-3 peer-focus-within:bg-primary"
        onclick={() => {
          if (inputRef) {
            inputRef.focus();
          }
        }}
      >
        {props.label}
      </label>
      <div class="p-3">
        <input
          ref={inputRef}
          type="text"
          value={props.get()}
          onInput={updateValue}
          class="peer focus:border-none focus:outline-none"
        />
      </div>
    </div>
  );
};
