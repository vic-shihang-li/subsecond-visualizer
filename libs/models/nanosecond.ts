import { MicroSecond, Second } from ".";
import { TimeValueHolder } from "./time-value-holder";

export class NanoSecond extends TimeValueHolder {
  constructor(value: number) {
    super(value);
  }

  toMicroSeconds(): MicroSecond {}

  toMilliSeconds(): Second {}

  toSeconds(): Second {}
}
