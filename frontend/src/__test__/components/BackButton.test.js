import { shallow } from 'enzyme'
import BackButton from '../../components/BackButton'

describe('<BackButton />', () => {
    const button = shallow(<BackButton />)

    test('Have link to Home', () => {
        expect(button.find('Link').prop('to')).toEqual('/')
    })
})