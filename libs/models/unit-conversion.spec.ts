import { MicroSecond, MilliSecond, Second } from ".";

describe("Unit Conversion", () => {
  it("should convert second to nanosecond and back", () => {
    expect(new Second(3).toNanoSeconds().toSeconds()).toEqual(new Second(3));
  });

  it("should support conversion chaining", () => {
    expect(new MilliSecond(32).toNanoSeconds().toMicroSeconds()).toEqual(
      new MicroSecond(32000)
    );
  });
});
