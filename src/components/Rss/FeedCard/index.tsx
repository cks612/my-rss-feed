import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Item } from "../../../hooks/rss/useGetFeeds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FeedCard = ({ feedData }: { feedData: Item }) => {
  console.log(feedData);
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
          {feedData.thumbnailImage && (
            <Image
              src={feedData.thumbnailImage}
              alt="feedImage"
              width={300}
              height={200}
            />
          )}
        </Container>
        <Author>
          <FontAwesomeIcon icon={faUser} />
          {feedData.title}
          {feedData.author && ` , ${feedData.author}`}
        </Author>
      </CardWrapper>
    </a>
  );
};

export default FeedCard;

const LinkToBlog = styled.a`
  text-decoration: none;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 10em;
  padding: 20px 20px;
  border-radius: 15px;
  background: #fffcf1;
  box-shadow: 5px 5px 10px #7d7d7d;
  transition: 0.5s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateX(-15px);
  }
`;

const Title = styled.h1`
  font-weight: 900;
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const CardContent = styled.div`
  font-size: 1em;
  font-size: 14px;
  line-height: 22px;
  color: #2b2d36;
  display: -webkit-box;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Author = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.75em;
  font-weight: 900;
  color: #595f67;
`;
