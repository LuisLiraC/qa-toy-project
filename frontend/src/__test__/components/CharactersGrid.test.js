import { render, mount } from 'enzyme'
import { MockedProvider } from '@apollo/client/testing'

import CharactersGrid from '../../components/CharactersGrid'
import mocks, { charactersMock } from '../mocks/queriesMocks'
import { act, create } from 'react-test-renderer'


describe('<CharactersGrid />', () => {

    test('should render testing state', () => {
        const container = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CharactersGrid />
            </MockedProvider>
        )

        expect(container.text().includes('Loading')).toBe(true)
    })
})