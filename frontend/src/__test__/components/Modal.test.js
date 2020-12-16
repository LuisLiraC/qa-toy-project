import { shallow, mount } from 'enzyme'
import Modal from '../../components/Modal'

describe('<Modal />', () => {
  test('must return null', () => {
    const wrapper = mount(<Modal open={false} />)
  })
})
