import styled from "styled-components";

export const RssWrapper = styled.div`
  ${({ theme }) => theme.flexBox("column", "", "")};
  ${({ theme }) => theme.commonPadding("100px 10px")};
  gap: 30px;

  a {
    all: unset;
  }
`;
