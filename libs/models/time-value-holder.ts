export class TimeValueHolder {
  private readonly number: number;

  constructor(value: number) {
    this.number = value;
  }

  get value() {
    return this.number;
  }
}
