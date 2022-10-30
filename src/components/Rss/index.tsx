import React, { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { FeedDataType } from "../../hooks/rss/useGetFeeds";
import FeedCard from "./FeedCard";
// import GoogleSearchSuggests from "../";
import { RSS_BLOG_LIST } from "../../constants/blog/BlogList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import usePagination from "../../hooks/pagination/usePagination";
import Pagination from "../Pagination";
import uuid from "react-uuid";
import { ThemeContext } from "../../pages/_app";
import { styles } from "../../styles/_theme";
import GoogleSearchSuggests from "../Google";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = cache.getQueryData(["feeds"]) as FeedDataType[];
  const { colorTheme } = useContext(ThemeContext);
  const { feeds, page, setPage } = usePagination({
    data: feedData,
  });
  return (
    <RssWrapper>
      <GoogleTitle>구글 검색</GoogleTitle>
      <GoogleSearchSuggests />
      <BlogTitle>
        My Subscribe Blogs{" "}
        <FontAwesomeIcon
          icon={faSquareRss}
          color={colorTheme === styles.lightTheme ? "black" : "white"}
        />
        <BlogList>
          <ul>
            {RSS_BLOG_LIST.map(data => (
              <li key={uuid()}>
                {data.label} - {data.url}
              </li>
            ))}
          </ul>
        </BlogList>
      </BlogTitle>

      {feeds.map(feed => (
        <FeedCard key={uuid()} feedData={feed} />
      ))}

      <Pagination totalLength={feedData.length} page={page} setPage={setPage} />
    </RssWrapper>
  );
};

export default RssPage;

const RssWrapper = styled.div`
  ${({ theme }) => theme.flexBox("column", "", "")};
  ${({ theme }) => theme.commonPadding("100px 10px")};
  gap: 30px;

  a {
    all: unset;
  }
`;

const GoogleTitle = styled.span`
  ${({ theme }) => theme.commonFont(undefined, "900", undefined)};
  color: ${({ theme }) => theme.PRIMARY_FONT};
`;

const BlogList = styled.div`
  ${({ theme }) => theme.commonPadding()};
  ${({ theme }) => theme.visibleAttrs()};
  position: absolute;
  left: 0;
  top: 2rem;
  width: 25em;
  border-radius: 20px;
  background: ${({ theme }) => theme.BLOG_LIST};

  &::after {
    ${({ theme }) =>
      theme.borderDetail(
        "10px solid transparent",
        "10px solid transparent",
        "0px solid transparent",
        `10px solid ${theme.BLOG_LIST}`
      )}
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 20%;
  }

  ul {
    ${({ theme }) => theme.flexBox("column", "", "")};
    ${({ theme }) => theme.commonFont("0.75em")};
    gap: 10px;

    li {
      width: 100%;
      color: ${({ theme }) => theme.BLOG_LIST_FONT};
      list-style: inside;
    }
  }
`;

const BlogTitle = styled(GoogleTitle)`
  position: relative;
  width: 36%;
  left: 5px;
  font-weight: 500;

  :hover {
    ${BlogList} {
      ${({ theme }) => theme.visibleAttrs("", "1", "visible", "")};
    }
  }
`;
