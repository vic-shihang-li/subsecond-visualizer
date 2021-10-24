import { MicroSecond, MilliSecond, NanoSecond, Second } from ".";

describe("MilliSecond", () => {
  it("should be able to construct", () => {
    expect(new MilliSecond(68)).toBeTruthy();
  });

  it("should be able to convert to seconds", () => {
    expect(new MilliSecond(68).toSeconds()).toEqual(new Second(0.068));
  });

  it("should be able to convert to microseconds", () => {
    expect(new MilliSecond(68).toMicroSeconds()).toEqual(
      new MicroSecond(68000)
    );
  });

  it("should be able to convert to nanoseconds", () => {
    expect(new MilliSecond(68).toNanoSeconds()).toEqual(
      new NanoSecond(68000000)
    );
  });
});
