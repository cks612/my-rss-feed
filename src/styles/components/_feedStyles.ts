import styled from "styled-components";
import { GoogleTitle } from "./_googleStyles";

export const BlogList = styled.div`
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

export const BlogTitle = styled(GoogleTitle)`
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
