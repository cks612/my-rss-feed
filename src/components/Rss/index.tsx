import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { FeedDataType } from "../../hooks/rss/useGetFeeds";
import FeedCard from "./FeedCard";
import GoogleSearchSuggests from "../Google";
import { RSS_BLOG_LIST } from "../../constants/blog/BlogList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";

const RssPage = () => {
  const cache = useQueryClient();
  const feedData = cache.getQueryData(["feeds"]) as FeedDataType[];

  return (
    <RssWrapper>
      <GoogleTitle>구글 검색</GoogleTitle>
      <GoogleSearchSuggests />
      <BlogTitle>
        My Subscribe Blogs <FontAwesomeIcon icon={faSquareRss} color="blue" />
        <BlogList>
          <ul>
            {RSS_BLOG_LIST.map(data => (
              <li>
                {data.label} - {data.url}
              </li>
            ))}
          </ul>
        </BlogList>
      </BlogTitle>

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
  padding: 100px 10px;

  a {
    all: unset;
  }
`;

const GoogleTitle = styled.span`
  font-size: 1.2em;
  font-weight: 900;
`;

const BlogList = styled.div`
  position: absolute;
  left: 0;
  top: 2rem;
  width: 20em;
  padding: 20px 20px;
  border-radius: 20px;
  background: #000;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;

  &::after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #000;
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 20%;
    /* transform: rotate(); */
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    font-size: 0.75em;

    li {
      width: 100%;
      color: #fff;
      list-style: inside;
    }
  }
`;

const BlogTitle = styled(GoogleTitle)`
  position: relative;
  width: 36%;

  :hover {
    ${BlogList} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
