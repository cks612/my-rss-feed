import React, { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { LIMIT_PAGE_NUMBER } from "../../hooks/pagination/usePagination";
import uuid from "react-uuid";

interface paginateProps {
  totalLength: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ totalLength, page, setPage }: paginateProps) => {
  const numberOfPagesFromData = Math.ceil(totalLength / LIMIT_PAGE_NUMBER);

  return (
    <PaginateWrapper>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numberOfPagesFromData)
        .fill(0)
        .map((_, i) => (
          <Button
            key={uuid()}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === numberOfPagesFromData}
      >
        &gt;
      </Button>
    </PaginateWrapper>
  );
};

export default Pagination;

const PaginateWrapper = styled.div`
  ${({ theme }) => theme.flexBox()};
  gap: 20px;
`;

const Button: any = styled.button`
  padding: 8px;
  margin: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.PAGINATE_NUM_TEXT};
  font-size: 1rem;
  transition: 0.5s;

  &:hover {
    color: #52a8ec;
    cursor: pointer;
    transform: translateY(-3px);
    text-decoration: underline;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &[aria-current] {
    color: #52a8ec;
    text-decoration: underline;
    font-weight: bold;
  }
`;
