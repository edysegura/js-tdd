export class MathService {
  static adder(...numbers) {
    const result = numbers
      .map(number => +number)
      .reduce((current, next) => current + next)
    
    return isNaN(result) ? null : result
  }
}
