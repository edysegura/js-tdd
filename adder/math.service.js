export class MathService {
  static areValidNumbers(numbers) {
    const isNumber = number => Number.isFinite(parseFloat(number))
    return numbers.every(isNumber)
  }

  static adder(...numbers) {
    let result = null
    if (this.areValidNumbers(numbers)) {
      result = numbers
        .map(number => +number)
        .reduce((current, next) => current + next)
    }
    return result
  }
}
