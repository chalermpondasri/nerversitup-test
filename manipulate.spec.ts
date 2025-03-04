import { manipulate } from './manipulate'

describe('manipulate', () => {
    it('should return [a]', () => {
        const expectedOutput = ['a']
        const result = manipulate('a')
        expect(result).toHaveLength(1)
        expect(result).toEqual(expectedOutput)
    })
    it('should return [ab, ba]', () => {
        const expectedOutput = ['ab', 'ba']
        const result = manipulate('ab')
        expect(result).toHaveLength(2)
        result.forEach(permutation => {
            expect(expectedOutput).toContain(permutation)
        })

    })
    it('should return [abc, acb, bac, bca, cab, cba]', () => {
        const expectedOutput = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
        const result = manipulate('abc')
        expect(result).toHaveLength(6)
        result.forEach(permutation => {
            expect(expectedOutput).toContain(permutation)
        })

    })
    it(`should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']`, () => {
        const expectedOutput = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
        const result = manipulate('aabb')
        expect(result).toHaveLength(6)
        result.forEach(permutation => {
            expect(expectedOutput).toContain(permutation)
        })
    })

    it('should return permutation of abcd ',() => {
        const result = manipulate('abcd')
        const expectedOutput = [
            'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb',
            'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca',
            'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba',
            'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']
        expect(result).toHaveLength(24)
        result.forEach(permutation => {
            expect(expectedOutput).toContain(permutation)
        })

    })

})