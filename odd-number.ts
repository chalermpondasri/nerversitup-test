/**
 *
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number {
    const map = numbers.reduce((acc, currentValue) => {
        acc.set(currentValue, (acc.get(currentValue) ?? 0) + 1)
        return acc
    }, new Map<number, number>())

    let odd = null
    for (const mapElement of map) {
        if(mapElement[1] % 2 !== 0) {
            odd = mapElement[0]
            break
        }
    }

    return odd
}