import {gql} from '@apollo/client';

export const allcharacters = gql`
  query {
    characters {
      info {
        count
      }
      results {
        name
        image
        type
        species
      }
    }
  }
`;
