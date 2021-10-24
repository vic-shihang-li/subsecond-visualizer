import { MicroSecond, MilliSecond, NanoSecond, Second } from ".";

describe("MicroSecond", () => {
  it("should be able to construct", () => {
    expect(new MicroSecond(3)).toBeTruthy();
  });

  it("should be able to convert to milliseconds", () => {
    expect(new MicroSecond(3).toMilliSeconds()).toEqual(new MilliSecond(0.003));
  });

  it("should be able to convert to nanoseconds", () => {
    expect(new MicroSecond(3).toNanoSeconds()).toEqual(new NanoSecond(3000));
  });

  it("should be able to convert to seconds", () => {
    expect(new MicroSecond(3).toSeconds()).toEqual(new Second(0.000003));
  });
});
