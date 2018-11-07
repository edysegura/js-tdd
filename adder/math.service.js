export const MathService = {
  adder: function() {
    var amount = arguments.length
    var total = 0

    if (amount > 0) {
      for (var i = 0; i < amount; i++) {
        var currentNumber = parseInt(arguments[i], 10)
        if (isNaN(currentNumber)) return null
        total += currentNumber
      }
      return total
    }

    return null
  }
}