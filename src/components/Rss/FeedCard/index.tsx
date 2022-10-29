import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Item } from "../../../hooks/rss/useGetFeeds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const FeedCard = ({ feedData }: { feedData: Item }) => {
  return (
    <a href={feedData.link} target="_blank" rel="noreferrer">
      <CardWrapper>
        <Title>{feedData.title}</Title>
        <Container>
          <CardContent>
            {feedData.content?.replace(/&nbsp;/gi, "") === "…"
              ? feedData["content:encoded"]
              : feedData.content?.replace(/&nbsp;/gi, "")}
          </CardContent>
          {feedData.thumbnailImage ? (
            <Image
              src={feedData.thumbnailImage}
              alt="feedImage"
              width={300}
              height={200}
            />
          ) : feedData.enclosure ? (
            <Image
              src={feedData.enclosure?.url}
              alt="feedImage"
              width={200}
              height={100}
            />
          ) : (
            ""
          )}
        </Container>
        <Author>
          {feedData.image.url ? (
            <Image
              src={feedData.image.url}
              alt="feedImage"
              width={20}
              height={20}
            />
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}

          {feedData.title}
          {(feedData.author && ` , ${feedData.author}`) ??
            (feedData.creator && ` , ${feedData.creator}`) ??
            ""}
        </Author>
      </CardWrapper>
    </a>
  );
};

export default FeedCard;

const CardWrapper = styled.div`
  ${({ theme }) => theme.flexBox("column", "", "space-between")};
  ${({ theme }) => theme.widthHeightSize("100%", "10em")};
  ${({ theme }) => theme.commonPadding()};
  background: ${({ theme }) => theme.FEED_BACKGROUND};
  border-radius: 15px;
  box-shadow: 5px 5px 10px #7d7d7d;
  transition: 0.5s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateX(-15px);
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.FEED_TITLE};
  font-weight: 900;
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const CardContent = styled.div`
  display: -webkit-box;
  line-height: 22px;
  color: ${({ theme }) => theme.FEED_CONTENT};
  font-size: 14px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Author = styled.div`
  ${({ theme }) => theme.flexBox(undefined, undefined, "")};
  ${({ theme }) => theme.commonFont("0.75em", "900", undefined)};
  color: ${({ theme }) => theme.FEED_FOOTER};
  gap: 10px;
`;
