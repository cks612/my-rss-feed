import React, { ChangeEvent, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "pages/_app";
import { CompleteSuggestion } from "types/rss/searchTypes";
import { useGetSuggests } from "hooks/search/useGetSuggests";
import { styles } from "@styles/_theme";
import uuid from "react-uuid";
import useDebounce from "hooks/utils/useDebounce";
import * as S from "@styles/components/_googleStyles";

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
    <>
      <S.GoogleTitle>구글 검색</S.GoogleTitle>

      <S.SearchContainer>
        <S.SearchBar>
          <FontAwesomeIcon
            icon={faSearch}
            width={20}
            size="lg"
            color={colorTheme === styles.lightTheme ? "black" : "white"}
          />
          <S.InputBar placeholder="Google Search" onChange={handleInputValue} />
        </S.SearchBar>
        <S.SuggestsWrapper>
          {suggestionWords && suggestionWords.length > 0 ? (
            suggestionWords.map((res: CompleteSuggestion) => {
              const { data } = res.suggestion._attributes;
              return (
                <S.SuggestsContainer key={uuid()}>
                  <a
                    href={`https://www.google.com/search?q=${data}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data}
                  </a>
                </S.SuggestsContainer>
              );
            })
          ) : (
            <S.SuggestsContainer>검색어가 없습니다</S.SuggestsContainer>
          )}
        </S.SuggestsWrapper>
      </S.SearchContainer>
    </>
  );
};

export default GoogleSearchSuggests;
