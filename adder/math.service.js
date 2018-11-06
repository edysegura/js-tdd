export class MathService {
  static adder() {
    const amount = arguments.length
    let total = 0

    if (amount > 0) {
      for (let i = 0; i < amount; i++) {
        let currentNumber = parseFloat(arguments[i])
        if (isNaN(currentNumber)) return null
        total += currentNumber
      }
      return total
    }

    return null
  }
}
