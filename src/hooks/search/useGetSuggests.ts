import { useQuery } from "@tanstack/react-query";
import { request } from "utils/axios-utils";

const fetchGoogleSuggests = ({ queryKey }: { queryKey: string[] }) => {
  if (queryKey[0] === "") return false;
  return request({
    url: `/search?q=${encodeURIComponent(queryKey[0])}`,
  });
};

export const useGetSuggests = (searchWord: string, debounceValue: boolean) => {
  return useQuery([searchWord], fetchGoogleSuggests, {
    enabled: debounceValue,
  });
};
