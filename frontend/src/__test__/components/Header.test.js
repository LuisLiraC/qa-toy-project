import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import Header from '../../components/Header'

describe('<Header />', () => {
    const header = shallow(<Header />)

    test('Render title', () => {
        expect(header.text().includes('QA Toy Project')).toBe(true)
    })

    test('Render subtitle', () => {
        expect(header.text().includes('Characters App')).toBe(true)
    })

    // test('Header Snapshot', () => {
    //     const header = create(<Header />)
    //     expect(header.toJSON()).toMatchSnapshot()
    // })
})


