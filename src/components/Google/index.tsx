import React, { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/utils/useDebounce";
import { useGetSuggests } from "../../hooks/search/useGetSuggests";
import { CompleteSuggestion } from "../../types/searchTypes";
import uuid from "react-uuid";
import { ThemeContext } from "../../pages/_app";
import { styles } from "../../styles/_theme";

const GoogleSearchSuggests = () => {
  const [searchWord, setSearchWord] = useState("");
  const { colorTheme } = useContext(ThemeContext);

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
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color={colorTheme === styles.lightTheme ? "black" : "white"}
        />
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
  ${({ theme }) => theme.commonPadding()};
  ${({ theme }) =>
    theme.borderDetail(
      `1px solid ${theme.PRIMARY_FONT}`,
      `1px solid ${theme.PRIMARY_FONT}`,
      "",
      `1px solid ${theme.PRIMARY_FONT}`,
      "20px",
      "20px"
    )};

  position: absolute;
  display: none;
  flex-direction: column;
  gap: 20px;
  width: calc(100% + 2px);
  left: -1px;
  top: 35px;
  background: ${({ theme }) => theme.BACKGROUND};
  z-index: 1000;
`;

const SearchContainer = styled.div`
  ${({ theme }) => theme.flexBox("column", "", "space-between")}
  ${({ theme }) => theme.commonPadding("10px 20px")};
  ${({ theme }) => theme.border(`1px solid ${theme.PRIMARY_FONT}`)};
  position: relative;
  width: 100%;
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
  color: ${({ theme }) => theme.PRIMARY_FONT};
  width: 100%;
  font-weight: 500;
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
    background: ${({ theme }) => theme.BACKGROUND};
    color: ${({ theme }) => theme.PRIMARY_FONT};
    border: none;
    outline: none;
    transition: 0.5s;
  }
`;
