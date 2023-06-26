import { useQuery } from "@apollo/client";
import getAllFilms from "../queries/getAllFilms";

const useGetAllFilms = () => {
  const { loading, error, data } = useQuery(getAllFilms);
  const { films } = data?.allFilms || {};

  return {
    loading,
    error,
    films,
  };
};


export default useGetAllFilms