import {gql} from '@apollo/client';

export const ALL_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        id
        name
        image
        status
        gender
        species
        location {
          name
        }
      }
    }
  }
`;

export const ONE_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      type
      species
      status
      episode {
        id
        name
        air_date
      }
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

export const ONE_CHARACTER_BY_NAME = gql`
  query GetCharacters($name: String!) {
    characters(filter: {name: $name}) {
      results {
        id
        name
        image
        status
        gender
        species
        location {
          name
        }
      }
    }
  }
`;
