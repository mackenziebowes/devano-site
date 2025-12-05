import { Heading, Page, Stack } from "~/devano/atoms";

export default function Home() {
  return (
    <Page>
      <Stack direction="col" class="justify-center h-[100%] flex-grow gap-12">
        <Heading as="h1">Blank Canvas</Heading>
      </Stack>
    </Page>
  );
}
