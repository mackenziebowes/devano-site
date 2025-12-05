import { createSignal } from "solid-js";
import {
  Heading,
  Page,
  Stack,
  Card,
  TextInput,
  CheckboxInput,
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
  Message,
  SingleSimpleSeparator,
  FlexSeparator,
  KeyIndicator,
  Show,
} from "~/devano/atoms";
import { Button, Anchor, Grid, Tile } from "~/devano/components";

const Title = () => {
  return (
    <div class="grid w-full h-full items-end p-4">
      <h1 class="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold tracking-tight text-start h-fit">
        Devano
      </h1>
    </div>
  );
};

const GetStartedCard = () => {
  return (
    <div class="grid w-full h-full place-items-center">
      <div class="flex flex-col lg:hidden p-4">
        <p class="text-muted-foreground max-w-xl text-start">
          Devano is a work in progress. The components are built with SolidJS,
          TypeScript, and Tailwind CSS. This site serves as both documentation
          and a living style guide.
        </p>
        <Stack direction="row" class="gap-4 mt-8">
          <Button variant="primary">Explore Components</Button>
          <Button variant="outline">View on GitHub</Button>
        </Stack>
      </div>
      <Card
        class="max-w-2xl bg-card/50 border-border/50 hidden lg:flex"
        title="Get Started"
      >
        <Stack direction="col" class="items-center text-center gap-4">
          <p class="text-muted-foreground max-w-2xl text-start">
            Devano is a work in progress. The components are built with SolidJS,
            TypeScript, and Tailwind CSS. This site serves as both documentation
            and a living style guide.
          </p>
          <Stack direction="row" class="gap-4 mt-4">
            <Button variant="primary" size="lg">
              Explore Components
            </Button>
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

const Subtitle = () => {
  return (
    <div class="p-4">
      <h2 class="text-xl md:text-xl lg:text-3xl xl:text-4xl tracking-normal leading-normal text-muted-foreground font-normal text-start pt-3">
        A design system for SolidJS with idiosyncratic charm
      </h2>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <Grid class="w-[80dvw] max-w-7xl md:grid-cols-3 md:grid-rows-5 aspect-16/9 xl:grid-rows-10 xl:grid-cols-10 xl:aspect-16/9 border-2 border-muted hidden md:grid">
        <Tile
          class="hidden md:grid xl:hidden border-b-[1px] border-muted overflow-clip"
          xd={"full"}
          yd={1}
          y1={1}
        >
          <Title />
        </Tile>
        <Tile
          class="hidden md:grid xl:hidden border-y-[1px] border-muted overflow-clip"
          xd={"full"}
          yd={1}
          y1={2}
        >
          <Subtitle />
        </Tile>
        <Tile class="hidden md:grid xl:hidden" xd={"full"} y2={6} y1={3}>
          <GetStartedCard />
        </Tile>
        <Tile
          x1={1}
          x2={5}
          y1={1}
          y2={5}
          class="border-b-[1px] border-muted border-r-[1px] hidden xl:block"
        >
          <Title />
        </Tile>

        <Tile
          x1={1}
          x2={5}
          y1={5}
          y2={11}
          class="border-t-[1px] border-r-[1px] border-muted hidden xl:block"
        >
          <Subtitle />
        </Tile>

        <Tile
          x1={5}
          x2={11}
          y1={1}
          y2={11}
          class="border-l-[1px] border-muted p-4 hidden xl:block"
        >
          <GetStartedCard />
        </Tile>
      </Grid>

      <Stack direction="col" class="items-start md:hidden">
        <Title />
        <Subtitle />
        <GetStartedCard />
      </Stack>
    </>
  );
};

export default function Home() {
  return (
    <Page>
      <Stack direction="col" class="justify-center h-full flex-grow gap-12 p-8">
        {/* Hero Section */}
        <Stack
          direction="col"
          class="items-center text-center gap-6 max-w-[80dvw]"
        >
          <Hero />
        </Stack>

        <SingleSimpleSeparator />

        {/* Footer */}
        <Stack direction="col" class="items-center text-center gap-4 mt-12">
          <Card class="max-w-2xl mt-4 p-6 bg-card/50 border-border/50">
            <Stack direction="col" class="gap-4">
              <Heading as="h3">CLI Companion Tool</Heading>
              <p class="text-foreground/80">
                Install components directly into your project with the future
                Devano CLI:
              </p>
              <pre class="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
                <code>npx devano add button --variant=primary --size=md</code>
              </pre>
              <p class="text-sm text-muted-foreground">
                Coming soon: A tool to scaffold, customize, and integrate Devano
                components.
              </p>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Page>
  );
}
