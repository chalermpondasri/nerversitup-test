/**
 * 
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smiley face detected
 */
export function countSmileyFace(texts: string[]) : number {

    const smileyRegex = /^[:;][-~]?[)D]/

    return texts.reduce((total, currentValue) => {
        return smileyRegex.test(currentValue) ? ++total : total
    }, 0)
}