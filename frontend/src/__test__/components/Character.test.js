import { shallow } from 'enzyme'
import Character from '../../components/Character'

describe('<Character />', () => {
  test('Must render character info', () => {
    const wrapper = shallow(<Character _id={1} name={'Luis'} image={'image'} />)

    expect(wrapper.find('p').text()).toEqual('Luis')
    expect(wrapper.find('Link').at(0).props().to).toBe('/character/details/1')
    expect(wrapper.find('Link').at(1).props().to).toBe('/character/edit/1')
  })

  test('must call details click', () => {})
})
