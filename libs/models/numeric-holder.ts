export class NumericHolder {
  private readonly number: number;

  constructor(value: number) {
    this.number = value;
  }

  get get() {
    return this.number;
  }
}
