import type { Accessor, Setter } from "solid-js";

export type Signal<T> = {
  get: Accessor<T>;
  set: Setter<T>;
};
