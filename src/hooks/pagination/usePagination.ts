import { useEffect, useMemo, useState } from "react";
import { FeedDataType } from "types/rss/rssTypes";

export const LIMIT_PAGE_NUMBER = 10;

const usePagination = ({ data }: { data: FeedDataType[] }) => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT_PAGE_NUMBER;
  // const { query } = useRouter();

  const paginatedData = useMemo(
    () => data.slice(offset, offset + LIMIT_PAGE_NUMBER),
    [data, offset]
  );

  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);

  // useEffect(() => {
  //   setPage(Number(query.feedPage));
  // }, [query.feedPage]);

  return { feeds: paginatedData, page, setPage };
};

export default usePagination;
