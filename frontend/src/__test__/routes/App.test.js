import App from '../../routes/App'
import { shallow } from 'enzyme'
import Home from '../../containers/Home'
import Details from '../../containers/Details'
import AddCharacter from '../../containers/AddCharacter'
import EditCharacter from '../../containers/EditCharacter'

describe('<App />', () => {
    let app
    beforeEach(() => app = shallow(<App />))

    test('Have Header component', () => {
        expect(app.find('Header').length).toEqual(1)
    })

    test('routes / to Home', () => {
        expect(app.find('Route[exact=true][path="/"]').first().prop('component')).toBe(Home)
    })

    test('routes /character/add to AddCharacter', () => {
        expect(app.find('Route[exact=true][path="/character/add"]').first().prop('component')).toBe(AddCharacter)
    })

    test('routes /character/edit/:id to EditCharacter', () => {
        expect(app.find('Route[exact=true][path="/character/edit/:id"]').first().prop('component')).toBe(EditCharacter)
    })

    test('routes /character/details/:id to Details', () => {
        expect(app.find('Route[exact=true][path="/character/details/:id"]').first().prop('component')).toBe(Details)
    })
})