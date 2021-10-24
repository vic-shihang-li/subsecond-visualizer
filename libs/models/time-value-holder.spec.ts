import { TimeValueHolder } from "./time-value-holder";

describe("TimeValueHolder", () => {
  it("should be able to construct", () => {
    expect(new TimeValueHolder(30)).toBeTruthy();
  });

  it("should be able to hold floating point value", () => {
    expect(new TimeValueHolder(33.2)).toBeTruthy();
  });

  it("should be able to obtain the held value", () => {
    const s = new TimeValueHolder(33);
    expect(s.value).toEqual(33);
  });

  it("should throw if negative time value is provided", () => {
    expect(() => {
      new TimeValueHolder(-23);
    }).toThrow();
  });
});
