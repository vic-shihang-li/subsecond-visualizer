import { MilliSecond, NanoSecond, Second } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class MicroSecond extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {
    return new NanoSecond(this.value * 1000);
  }

  toMilliSeconds(): MilliSecond {
    return new MilliSecond(this.value * 0.001);
  }

  toSeconds(): Second {
    return new Second(this.value * 0.000001);
  }
}
