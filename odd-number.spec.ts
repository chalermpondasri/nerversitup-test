// Write your test here
import { findOddNumber } from './odd-number'

describe('Odd number', () => {
    it('should return 7', () => {
        const expectedResult = 7
        const result = findOddNumber([7])
        expect(result).toEqual(expectedResult)
    })

    it('should return 0', () => {
        const expectedResult = 0
        const result = findOddNumber([0])
        expect(result).toEqual(expectedResult)
    })

    it('should return 2', () => {
        const expectedResult = 2
        const result = findOddNumber([1,1,2])
        expect(result).toEqual(expectedResult)
    })

    it('should return 0', () => {
        const expectedResult = 0
        const result = findOddNumber([0,1,0,1,0])
        expect(result).toEqual(expectedResult)
    })

    it('should return 4', () => {
        const expectedResult = 4
        const result = findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])
        expect(result).toEqual(expectedResult)
    })

    it('should return 1', () => {
        const expectedResult = 1
        const result = findOddNumber([1,2,2,1,3,3,1,2,3,3,1,2,1])
        expect(result).toEqual(expectedResult)
    })
})