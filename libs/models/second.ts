import { MilliSecond, NanoSecond } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class Second extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {}

  toMicroSeconds(): MicroSecond {}

  toMilliSeconds(): MilliSecond {}
}
