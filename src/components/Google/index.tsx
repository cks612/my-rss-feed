import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/utils/useDebounce";
import { useGetSuggests } from "../../hooks/search/useGetSuggests";
import { CompleteSuggestion } from "../../types/searchTypes";
import uuid from "react-uuid";

const GoogleSearchSuggests = () => {
  const [searchWord, setSearchWord] = useState("");
  let suggestionWords: CompleteSuggestion[] = [];

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > 0) {
      setSearchWord(e.target.value);
    } else {
      setSearchWord("");
    }
  };

  const debounceValue = useDebounce(searchWord, 1000);

  const { data } = useGetSuggests(searchWord, Boolean(debounceValue));

  data && (suggestionWords = data.data?.toplevel.CompleteSuggestion);

  return (
    <SearchContainer>
      <SearchBar>
        <FontAwesomeIcon icon={faSearch} size="lg" />
        <input placeholder="Google Search" onChange={handleInputValue} />
      </SearchBar>
      <SuggestsWrapper>
        {suggestionWords && suggestionWords.length > 0 ? (
          suggestionWords.map((res: CompleteSuggestion) => {
            const { data } = res.suggestion._attributes;
            return (
              <SuggestsContainer key={uuid()}>
                <a
                  href={`https://www.google.com/search?q=${data}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data}
                </a>
              </SuggestsContainer>
            );
          })
        ) : (
          <SuggestsContainer>검색어가 없습니다</SuggestsContainer>
        )}
      </SuggestsWrapper>
    </SearchContainer>
  );
};

export default GoogleSearchSuggests;

const SuggestsWrapper = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  gap: 20px;
  width: calc(100% + 2px);
  padding: 20px 20px;
  left: -1px;
  top: 35px;
  background: #fff;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1000;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 20px;

  :focus-within {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    ${SuggestsWrapper} {
      display: flex;
    }
  }
`;

const SuggestsContainer = styled.div`
  width: 100%;
  font-weight: 900;
  cursor: pointer;

  :hover {
    color: #52a8ec;
  }
`;

const SearchBar = styled.div`
  display: flex;
  gap: 20px;

  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;
