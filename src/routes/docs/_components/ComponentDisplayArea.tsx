import { Grid, Tile } from "~/devano/components";
import { JSX } from "solid-js";
export default function ComponentDisplayArea(
  props: JSX.HTMLAttributes<HTMLElement>,
) {
  return (
    <Grid count={1} class="bg-neutral-200 place-items-center">
      <Tile yd="full" xd="full">
        {props.children}
      </Tile>
    </Grid>
  );
}
