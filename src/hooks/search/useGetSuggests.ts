import { request } from "../../utils/axios-utils";
import { useQuery } from "@tanstack/react-query";

const fetchGoogleSuggests = ({ queryKey }: { queryKey: string[] }) => {
  return request({
    url: `/search?q=${encodeURIComponent(queryKey[0])}`,
  });
};

export const useGetSuggests = (searchWord: string, debounceValue: boolean) => {
  return useQuery([searchWord], fetchGoogleSuggests, {
    enabled: Boolean(debounceValue),
  });
};
