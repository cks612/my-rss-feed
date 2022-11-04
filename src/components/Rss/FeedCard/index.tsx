import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "@styles/components/_feedCardStyles";
import { Item } from "types/rss/rssTypes";
import formatDate from "hooks/utils/formatDate";

const FeedCard = ({ feedData }: { feedData: Item }) => {
  const pubDate = formatDate(feedData.pubDate!);

  return (
    <a href={feedData.link} target="_blank" rel="noreferrer">
      <S.CardWrapper>
        <S.CardHeader>
          <S.Title>{feedData.title}</S.Title>
          <S.PubDate>{pubDate}</S.PubDate>
        </S.CardHeader>

        <S.ContentContainer>
          <S.Content>
            {feedData.content?.replace(/&nbsp;/gi, "") === "…"
              ? feedData["content:encoded"]
              : feedData.content?.replace(/&nbsp;/gi, "")}
          </S.Content>
        </S.ContentContainer>
        {(feedData.thumbnailImage && (
          <S.ImgContent>
            <Image
              src={feedData.thumbnailImage}
              alt="feedImage"
              width={100}
              height={100}
              layout="fixed"
              objectFit="contain"
            />
          </S.ImgContent>
        )) ??
          (feedData.enclosure && (
            <Image
              src={feedData.enclosure?.url}
              alt="feedImage"
              width={500}
              height={500}
              objectFit="contain"
            />
          )) ??
          ""}
        <S.Author>
          {feedData.image.url ? (
            <Image
              src={feedData.image.url}
              alt="feedImage"
              width={20}
              height={20}
              objectFit="cover"
              layout="fixed"
            />
          ) : (
            <FontAwesomeIcon icon={faUser} width={16} />
          )}

          {feedData.title}
          {(feedData.author && ` , ${feedData.author}`) ??
            (feedData.creator && ` , ${feedData.creator}`) ??
            ""}
        </S.Author>
      </S.CardWrapper>
    </a>
  );
};

export default FeedCard;
