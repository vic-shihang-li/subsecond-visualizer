import { MilliSecond, NanoSecond } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class MicroSecond extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {}

  toMilliSeconds(): MilliSecond {}

  toSeconds(): Second {}
}
