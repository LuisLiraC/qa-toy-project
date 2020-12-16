import { act, create } from 'react-test-renderer'
import React from 'react'
import AddCharacterForm from '../../components/AddCharacterForm'
import { MockedProvider } from '@apollo/client/testing'
// import { enumsMock } from '../mocks/queriesMocks'

describe('<CharacterForm />', () => {
  test('render without error', () => {
    let component
    act(() => {
      component = create(
        <MockedProvider mocks={[]}>
          <AddCharacterForm />
        </MockedProvider>
      )
    })
    const tree = component.toJSON()
    expect(tree.children).toContain('Loading')
  })

  test('should render form', () => {
    // let component
    // act(async () => {
    //   component = create(
    //     <MockedProvider mocks={[enumsMock]} addTypename={false}>
    //       <AddCharacterForm />
    //     </MockedProvider>
    //   )
    //   await new Promise((resolve) => setTimeout(resolve, 1000))
    // })
    // expect(component.root.findByType('p')).toBe(true)
  })
})
