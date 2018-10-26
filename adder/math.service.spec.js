import { MathService } from './math.service'

describe('MathService', () => {
  it('should sum two integer numbers', () => {
    expect(MathService.adder(1, 2)).toBe(3)
  })

  it('should sum one number or more', () => {
    expect(MathService.adder(1)).toBe(1)
    expect(MathService.adder(1, 2)).toBe(3)
    expect(MathService.adder(1, 2, 3)).toBe(6)
  })

  it('should sum two string numbers', () => {
    expect(MathService.adder('1', '2')).toBe(3)
    expect(MathService.adder('010', '2')).toBe(12)
  })

  it('should return null for a invalid number', () => {
    expect(MathService.adder('little potato', 2)).toBe(null)
  })

  it('should return null if there is no numbers specified', () => {
    expect(MathService.adder('', '')).toBe(null)
  })
})