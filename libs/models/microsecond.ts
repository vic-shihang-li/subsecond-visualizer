import { MilliSecond, NanoSecond } from ".";
import { NumericHolder } from "./numeric-holder";

export class MicroSecond extends NumericHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {}

  toMilliSeconds(): MilliSecond {}

  toSeconds(): Second {}
}
