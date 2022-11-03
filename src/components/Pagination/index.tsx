import React from "react";
import uuid from "react-uuid";
import { LIMIT_PAGE_NUMBER } from "hooks/pagination/usePagination";
import * as S from "@styles/components/_paginationStyles";
import { paginateProps } from "types/rss/rssTypes";

const Pagination = ({ totalLength, page, setPage }: paginateProps) => {
  const numberOfPagesFromData = Math.ceil(totalLength / LIMIT_PAGE_NUMBER);
  // const { query, pathname } = useRouter();

  return (
    <S.PaginateWrapper>
      <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </S.Button>
      {Array(numberOfPagesFromData)
        .fill(0)
        .map((_, i) => {
          return (
            // <Link key={i} href={`/rss?feedPage=${i + 1}`}>
            <S.Button
              key={uuid()}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </S.Button>
            // </Link>
          );
        })}

      <S.Button
        onClick={() => setPage(page + 1)}
        disabled={page === numberOfPagesFromData}
      >
        &gt;
      </S.Button>
    </S.PaginateWrapper>
  );
};

export default Pagination;

// {Array(numberOfPagesFromData)
//   .fill(0)
//   .map((_, i) => {
//     const page = i + 1;
//     return (
//       <S.Button
//         key={uuid()}
//         onClick={() => setPage(i + 1)}
//         aria-current={page === i + 1 ? "page" : null}
//       >
//         {i + 1}
//       </S.Button>
//     );
//   })}
