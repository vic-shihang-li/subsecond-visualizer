import { NanoSecond } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class MilliSecond extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {}

  toMicroSeconds(): MicroSecond {}

  toSeconds(): Second {}
}
