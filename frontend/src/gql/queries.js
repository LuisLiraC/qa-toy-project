import { gql } from '@apollo/client/core'

export const GET_CHARACTERS = gql`
  query {
    getCharacters {
      _id
      name
      image_url
    }
  }
`

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    getCharacter(_id: $id) {
      name
      race
      gender
      image_url
      description
    }
  }
`

export const GET_ENUM_VALUES = gql`
  {
    genderValues: __type(name: "Gender") {
      enumValues {
        name
      }
    }

    raceValues: __type(name: "Race") {
      enumValues {
        name
      }
    }
  }
`

export const ADD_CHARACTER = gql`
  mutation addCharacter($characterInfo: AddCharacterInput!) {
    addCharacter(characterInfo: $characterInfo) {
      _id
      message
      error
      status
    }
  }
`

export const EDIT_CHARACTER = gql`
  mutation editCharacter($id: ID!, $characterInfo: EditCharacterInput!) {
    editCharacter(_id: $id, characterInfo: $characterInfo) {
      _id
      message
      error
      status
    }
  }
`

export const DELETE_CHARACTER = gql`
  mutation deleteCharacter($id: ID!) {
    deleteCharacter(_id: $id) {
      message
      error
      status
    }
  }
`
