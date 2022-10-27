import { useQueryClient, UseQueryResult } from "@tanstack/react-query";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { FeedDataType } from "../../hooks/rss/useGetFeeds";
import FeedCard from "./FeedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/utils/useDebounce";
import { useGetSuggests } from "../../hooks/search/useGetSuggests";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = cache.getQueryData(["feeds"]) as FeedDataType[];

  const [searchWord, setSearchWord] = useState("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const debounceValue = useDebounce(searchWord, 1000);

  const { data }: UseQueryResult = useGetSuggests(
    searchWord,
    Boolean(debounceValue)
  );
  console.log(data);

  return (
    <RssWrapper>
      <SearchContainer>
        <FontAwesomeIcon icon={faSearch} size="lg"></FontAwesomeIcon>
        <InputSearch placeholder="Google Search" onChange={handleInputValue} />
      </SearchContainer>
      {feedData.map(feed => (
        <FeedCard key={feed.guid} feedData={feed} />
      ))}
    </RssWrapper>
  );
};

export default RssPage;

const RssWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px 10px;

  a {
    all: unset;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 50px;
  padding: 10px 10px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
`;
const InputSearch = styled.input`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;
