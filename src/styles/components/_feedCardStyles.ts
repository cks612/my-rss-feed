import styled from "styled-components";

export const CardWrapper = styled.div`
  ${({ theme }) => theme.flexBox("column", "", undefined)};
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.FEED_TITLE};
  font-weight: 900;
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const CardContent = styled.div`
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

export const FeedHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const Author = styled.div`
  ${({ theme }) => theme.flexBox(undefined, undefined, "")};
  ${({ theme }) => theme.commonFont("0.75em", "900")};
  color: ${({ theme }) => theme.FEED_FOOTER};
  gap: 10px;
`;

export const ImgContent = styled.div`
  border-radius: 50px;
  overflow: hidden;
`;
