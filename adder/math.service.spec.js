import { MathService } from './math.service'

describe('MathService', function() {
  it('should sum two integer numbers', function() {
    expect(MathService.adder(1, 2)).toBe(3)
  })

  it('should sum one number or more', function() {
    expect(MathService.adder(1)).toBe(1)
    expect(MathService.adder(1, 2)).toBe(3)
    expect(MathService.adder(1, 2, 3)).toBe(6)
  })

  it('should sum two string numbers', function() {
    expect(MathService.adder('1', '2')).toBe(3)
    expect(MathService.adder('010', '2')).toBe(12)
  })

  it('should return null for a invalid number', function() {
    expect(MathService.adder('little potato', 2)).toBe(null)
  })

  it('should return null if there is no numbers specified', function() {
    expect(MathService.adder('', '')).toBe(null)
  })
})