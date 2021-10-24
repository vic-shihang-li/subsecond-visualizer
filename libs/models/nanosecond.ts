import { MicroSecond, MilliSecond, Second } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class NanoSecond extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toMicroSeconds(): MicroSecond {
    return new MicroSecond(this.value * 0.001);
  }

  toMilliSeconds(): MilliSecond {
    return new MilliSecond(this.value * 0.000001);
  }

  toSeconds(): Second {
    return new Second(this.value * 0.000000001);
  }
}
