import {gql} from '@apollo/client';

export const ALL_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
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
