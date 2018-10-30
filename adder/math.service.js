export class MathService {
  static adder(...numbers) {
    return numbers
      .map(number => +number)
      .reduce((current, next) => current + next)
  }
}
