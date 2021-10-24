import { MicroSecond, MilliSecond, NanoSecond, Second } from ".";

describe("NanoSecond", () => {
  it("should be able to construct", () => {
    expect(new NanoSecond(35)).toBeTruthy();
  });

  it("should be able to convert to microseconds", () => {
    expect(new NanoSecond(35).toMicroSeconds()).toEqual(new MicroSecond(0.035));
  });

  it("should be able to convert to milliseconds", () => {
    expect(new NanoSecond(35).toMilliSeconds()).toEqual(
      new MilliSecond(0.000035)
    );
  });

  it("should be able to convert to seconds", () => {
    expect(new NanoSecond(35).toSeconds()).toEqual(new Second(0.000000035));
  });
});
