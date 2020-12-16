import { shallow } from 'enzyme'
import Home from '../../containers/Home'

describe('<Home />', () => {
    const home = shallow(<Home />)

    test('Have link to Add Character', () => {
        expect(home.find('Link').prop('to')).toEqual('/character/add')
    })

    test('Have Characters Grid Component', () => {
        expect(home.find('CharactersGrid').length).toEqual(1)
    })
})