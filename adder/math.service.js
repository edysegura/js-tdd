export class MathService {
  static adder(...numbers) {
    return numbers.reduce((current, next) => current + next)
  }
}
