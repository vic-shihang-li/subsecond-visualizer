import { NanoSecond, Second } from ".";

describe("Second", () => {
  it("should be able to construct", () => {
    const s = new Second(30);
  });

  it("should convert to nanoseconds correctly", () => {
    const s = new Second(2.4);

    expect(s.toNanoSeconds()).toEqual(
      new NanoSecond(2400000000) // 2.4 billion ns
    );
  });

  it("should convert to microseconds correctly", () => {
    const s = new Second(2.4);

    expect(s.toNanoSeconds()).toEqual(
      new NanoSecond(2400000) // 2.4 million microseconds
    );
  });

  it("should convert to milliseconds correctly", () => {
    const s = new Second(2.4);

    expect(s.toNanoSeconds()).toEqual(
      new NanoSecond(2400) // 2.4 milliseconds
    );
  });
});
