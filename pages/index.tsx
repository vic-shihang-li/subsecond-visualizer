import type { NextPage } from "next";
import { Square } from "../components/square";
import { MicroSecond, NanoSecond } from "../libs/models";

/**
 * Use arrow keys to make slides
 *
 * Transitions:
 *
 * 1. Initially, show nanosecond (25px)
 * 2. Next slide: nanosecond to microsecond comparison (1 vs. 1000)
 * 3. Next slide: ns vs. miusec. vs. ms (1 vs. 1,000 vs. 1,000,000)
 * 4. Next slide: full scale (1 vs. 1,000 vs. 1,000,000 vs. 1,000,000,000).
 *
 * On each transition, show operations that can be done relative to a time unit.
 * e.g. instruction works on nanoseconds, OS has done many multitasking over
 * one second, etc.
 *
 * Inspirations:
 * - https://mkorostoff.github.io/1-pixel-wealth/
 */

const Home: NextPage = () => {
  const BASE_VALUE = 25;
  const nanoSecondSize = new NanoSecond(BASE_VALUE);
  const microSecondSize = new MicroSecond(BASE_VALUE);

  return (
    <>
      <Square sizePx={nanoSecondSize.value} />
    </>
  );
};

export default Home;
