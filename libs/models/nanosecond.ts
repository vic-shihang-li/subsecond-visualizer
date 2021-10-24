import { MicroSecond, Second } from ".";
import { NumericHolder } from "./numeric-holder";

export class NanoSecond extends NumericHolder {
  constructor(value: number) {
    super(value);
  }

  toMicroSeconds(): MicroSecond {}

  toMilliSeconds(): Second {}

  toSeconds(): Second {}
}
