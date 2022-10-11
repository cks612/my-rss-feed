import { request } from "../utils/axios-utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// 예시 쿼리 방법
// const fetchSaleVehicleData = () => {
//   return request({ url: "/carClasses" });
// };

// export const useGetSaleData = (onSuccess: any, onError: any) => {
//   return useQuery(["saleVehicles"], fetchSaleVehicleData, {
//     onSuccess,
//     onError,
//   });
// };

// const fetchAllVehicles = ({ pageParam = 1 }) => {
//   return request({ url: `/carClasses?_limit=5&_page=${pageParam}` });
// };

// export const useGetAllData = () => {
//   return useInfiniteQuery(["allVehicles"], fetchAllVehicles, {
//     getNextPageParam: (_lastPage, pages) => {
//       if (pages.length < 4) {
//         return pages.length + 1;
//       } else {
//         return undefined;
//       }
//     },
//     enabled: false,
//   });
// };
