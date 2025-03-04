import { countSmileyFace } from './smily'

describe('Smiley', () => {
    it('should be tested with valid smiles', () => {
        const smiles = [':)', ';(', ';}', ':-D']
        const result = countSmileyFace(smiles)
        expect(result).toEqual(2)
    })

    it('should be tested with some valid smiles', () => {
        const smiles = [';D', ':-(', ':-)', ';~)']
        const result = countSmileyFace(smiles)
        expect(result).toEqual(3)
    })
    it('should be tested with empty smiles', () => {
        const smiles = [';]', ':[', ';*', ':$', ';-D']
        const result = countSmileyFace(smiles)
        expect(result).toEqual(1)
    })
})