/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */


export function manipulate(text: string): string[] {
    const result: string[] = []
    const charArray = text.split('')

    heapPermutation(charArray, charArray.length, result)
    return Array.from(new Set(result))
}

function heapPermutation(values: string[], size: number, result: string[]) {
    if (size === 1) {
        result.push(values.join(''))
        return
    }

    for (let i = 0; i < size; i++) {
        heapPermutation(values, size - 1, result)

        if (size % 2 === 1) {
            [values[0], values[size - 1]] = [values[size - 1], values[0]]
        } else {
            [values[i], values[size - 1]] = [values[size - 1], values[i]]
        }
    }


}


