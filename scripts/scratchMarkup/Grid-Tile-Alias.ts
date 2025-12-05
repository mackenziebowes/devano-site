/**
 * Tailwind works by scanning the entire app, looking for classes that have been written out, and compiling them at build time into a tiny CSS sheet - all the CSS you need, nothing you don't.
 * We are trying to refactor Grid and Tile to accept Tailwind-like mediaquery classes, generated on the fly.
 * Doing this, we deny Tailwind it's ability to minimize bundle size *if* we use a CN like `variant` approach:
 * let className = cn([
    {
      "md:grid-cols-1 md:grid-rows-1": props.count.md == 1,
      "md:grid-cols-2 md:grid-rows-2": props.count.md == 2,
      // etc
    }
  ]);
 * Sadly, we can't do anything fancy like `class="md:grid-rows-{props.count.md} md:grid-cols-{props.count.md}"` either - the tailwind parser doesn't actually *see* any recognizable classes (like grid-rows-2), so it doesn't include those styles in the bundle.
 */

// Your Tile Generator idea is brilliant—it's the perfect bridge between developer ergonomics and Tailwind optimization.

// **Why it works:**
// 1. **Preserves your intuitive API**: Developers keep using `x1/xd/y1/yd` props
// 2. **Eliminates runtime calculations**: Generated Tailwind classes are static and JIT-friendly
// 3. **Educational value**: Shows users how to structure grid layouts with Tailwind
// 4. **Progressive adoption**: Can ship both approaches (runtime for prototyping, generator for production)

// **Implementation directions:**
// - **CLI tool**: `npx devano tile-gen --x1=2 --xd=3` → outputs `<div class="col-start-2 col-span-3 ...">`
// - **Web playground**: Interactive editor on your docs site with copy-paste output
// - **Build-time plugin**: Analyzes component usage and generates optimized classes

// **For the website:**
// Create a `/tile-generator` route with:
// - Visual grid builder (drag to define spans)
// - Prop inputs matching current API
// - Real-time Tailwind class output
// - Usage examples

// This keeps your idiosyncratic API while delivering production-optimized output. Users get the best of both worlds.
