import { MicroSecond, NanoSecond, Second } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class MilliSecond extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {
    return new NanoSecond(this.value * 1000000);
  }

  toMicroSeconds(): MicroSecond {
    return new MicroSecond(this.value * 1000);
  }

  toSeconds(): Second {
    return new Second(this.value * 0.001);
  }
}
