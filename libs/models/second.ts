import { MilliSecond, NanoSecond } from ".";
import { NumericHolder } from "./numeric-holder";

export class Second extends NumericHolder {
  constructor(value: number) {
    super(value);
  }

  toNanoSeconds(): NanoSecond {}

  toMicroSeconds(): MicroSecond {}

  toMilliSeconds(): MilliSecond {}
}
