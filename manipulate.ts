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

function heapPermutation(source: string[], size: number, result: string[]) {
    if (size === 1) {
        result.push(source.join(''))
        return
    }

    for (let i = 0; i < size; i++) {
        heapPermutation(source, size - 1, result)
        if (size % 2 === 1) {
            swap(source, 0, size - 1)
        } else {
            swap(source, i, size - 1)
        }

    }

}

function swap(arr: string[], index1: number, index2: number): void {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}


