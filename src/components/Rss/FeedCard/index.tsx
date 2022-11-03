import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "@styles/components/_feedCardStyles";
import { Item } from "types/rss/rssTypes";

const FeedCard = ({ feedData }: { feedData: Item }) => {
  return (
    <a href={feedData.link} target="_blank" rel="noreferrer">
      <S.CardWrapper>
        <S.Container>
          <S.FeedHeader>
            <S.Title>{feedData.title}</S.Title>
            <S.CardContent>
              {feedData.content?.replace(/&nbsp;/gi, "") === "…"
                ? feedData["content:encoded"]
                : feedData.content?.replace(/&nbsp;/gi, "")}
            </S.CardContent>

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
          </S.FeedHeader>

          {(feedData.thumbnailImage && (
            <Image
              src={feedData.thumbnailImage}
              alt="feedImage"
              width={200}
              height={100}
              objectFit="cover"
              layout="fixed"
            />
          )) ??
            (feedData.enclosure && (
              <Image
                src={feedData.enclosure?.url}
                alt="feedImage"
                width={100}
                height={100}
                objectFit="cover"
                layout="fixed"
              />
            )) ??
            ""}
        </S.Container>
      </S.CardWrapper>
    </a>
  );
};

export default FeedCard;
