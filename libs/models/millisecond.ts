import { NanoSecond } from ".";
import { NumericHolder } from "./numeric-holder";

export class MilliSecond extends NumericHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {}

  toMicroSeconds(): MicroSecond {}

  toSeconds(): Second {}
}
