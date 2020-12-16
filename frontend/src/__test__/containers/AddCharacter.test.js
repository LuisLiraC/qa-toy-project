import { shallow } from 'enzyme'
import AddCharacter from '../../containers/AddCharacter'

describe('<AddCharacter />', () => {
    const addCharacter = shallow(<AddCharacter />)

    test('Have link to back Home', () => {
        expect(addCharacter.find('BackButton').length).toEqual(1)
    })

    test('Show section name', () => {
        expect(addCharacter.text().includes('Add character')).toBe(true)
    })

    test('Have CharacterForm', () => {
        expect(addCharacter.find('AddCharacterForm').length).toEqual(1)
    })
})