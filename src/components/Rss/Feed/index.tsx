import React, { useContext } from "react";
import { ThemeContext } from "pages/_app";
import { RSS_BLOG_LIST } from "constants/blog/BlogList";
import { styles } from "@styles/_theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import * as S from "@styles/components/_feedStyles";
import uuid from "react-uuid";
import FeedCard from "../FeedCard";
import { FeedDataType } from "types/rss/rssTypes";

const Feed = ({ feeds }: { feeds: FeedDataType[] }) => {
  const { colorTheme } = useContext(ThemeContext);

  return (
    <>
      <S.BlogTitle>
        My Subscribe Blogs{" "}
        <FontAwesomeIcon
          icon={faSquareRss}
          width={20}
          color={colorTheme === styles.lightTheme ? "black" : "white"}
        />
        <S.BlogList>
          <ul>
            {RSS_BLOG_LIST.map(data => (
              <li key={uuid()}>
                {data.label} - {data.url}
              </li>
            ))}
          </ul>
        </S.BlogList>
      </S.BlogTitle>

      {feeds.map(feed => (
        <FeedCard key={uuid()} feedData={feed} />
      ))}
    </>
  );
};

export default Feed;
