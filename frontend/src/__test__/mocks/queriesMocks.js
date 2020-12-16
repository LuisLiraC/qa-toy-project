import { GET_CHARACTERS, GET_ENUM_VALUES } from '../../gql/queries'

export const mocks = [
  {
    request: {
      query: GET_CHARACTERS
    },
    result: {
      data: {
        characters: [
          {
            _id: 1,
            name: 'Link',
            race: 'Hylian',
            gender: 'Male',
            image_url: 'image_url',
            description: 'lorem ipsum'
          },
          {
            _id: 2,
            name: 'Zelda',
            race: 'Hylian',
            gender: 'Female',
            image_url: 'image_url',
            description: 'lorem ipsum'
          }
        ]
      }
    }
  }
]

export const enumsMock = {
  request: {
    query: GET_ENUM_VALUES
  },
  result: {
    data: {
      genderValues: {
        enumValues: [
          {
            name: 'Female'
          },
          {
            name: 'Male'
          }
        ]
      },
      raceValues: {
        enumValues: [
          {
            name: 'Hylian'
          },
          {
            name: 'Fairy'
          }
        ]
      }
    }
  }
}
