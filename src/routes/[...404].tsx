import { A } from "@solidjs/router";
import { Heading, Stack } from "~/devano/atoms";
import { Page, Anchor } from "~/devano/components";

export default function NotFound() {
  return (
    <Page>
      <Stack direction="col" class="items-center justify-center h-dvh w-dvw">
        <Heading as="h1">Not Found</Heading>
        <p>The requested resource does not exist.</p>
        <Anchor href="/" class="md:hidden">
          Go Back
        </Anchor>
        <p class="hidden md:block">
          Press <kbd>CMD</kbd>/<kbd>Alt</kbd> + <kbd>←</kbd> to go back.
        </p>
      </Stack>
    </Page>
  );
}
