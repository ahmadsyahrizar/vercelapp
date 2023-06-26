import { gql } from "@apollo/client";

const getAllFilms = gql`
  query getAllFilms {
    allFilms {
      films {
        id
        title
        director
      }
    }
  }
`;

export default getAllFilms;
