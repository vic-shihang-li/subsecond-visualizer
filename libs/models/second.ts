import { MicroSecond, MilliSecond, NanoSecond } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class Second extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {
    return new NanoSecond(this.value * 1000000000);
  }

  toMicroSeconds(): MicroSecond {
    return new MicroSecond(this.value * 1000000);
  }

  toMilliSeconds(): MilliSecond {
    return new MilliSecond(this.value * 1000);
  }
}
