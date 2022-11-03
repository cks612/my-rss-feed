import styled from "styled-components";

export const GoogleTitle = styled.span`
  ${({ theme }) => theme.commonFont(undefined, "900")};
  color: ${({ theme }) => theme.PRIMARY_FONT};
`;

export const SuggestsWrapper = styled.div`
  ${({ theme }) => theme.commonPadding()};
  ${({ theme }) =>
    theme.borderDetail(
      `1px solid ${theme.PRIMARY_FONT}`,
      `1px solid ${theme.PRIMARY_FONT}`,
      "",
      `1px solid ${theme.PRIMARY_FONT}`,
      "20px",
      "20px"
    )};
  display: none;
  position: absolute;
  flex-direction: column;
  gap: 20px;
  width: calc(100% + 2px);
  left: -1px;
  top: 35px;
  background: ${({ theme }) => theme.BACKGROUND};
  z-index: 1000;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => theme.flexBox("column", "", "space-between")}
  ${({ theme }) => theme.commonPadding("10px 20px")};
  ${({ theme }) => theme.border(`1px solid ${theme.PRIMARY_FONT}`)};
  position: relative;
  width: 100%;
  border-radius: 20px;

  :focus-within {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    ${SuggestsWrapper} {
      display: flex;
    }
  }
`;

export const SuggestsContainer = styled.div`
  color: ${({ theme }) => theme.PRIMARY_FONT};
  width: 100%;
  font-weight: 500;
  cursor: pointer;

  :hover {
    color: #52a8ec;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputBar = styled.input`
  all: unset;
  width: 100%;
  color: ${({ theme }) => theme.PRIMARY_FONT};
  transition: 0.5s;
`;
