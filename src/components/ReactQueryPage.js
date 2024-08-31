import React from "react";
import { usePostQuery } from "../hooks/usePosts";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const ReactQueryPage = () => {
  // const { data, isLoading, isError, error, refetch } = usePostQuery(3);
  const ids = [1, 2, 3, 4];
  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`);
  };
  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });
  console.log("results:", results);

  // console.table("Data:", data, "Loading?", isLoading);
  // console.log("Error:", isError, error);

  // if (isLoading) {
  //   return <div className="text-center text-3xl text-red-400">Loading...</div>;
  // }
  // if (isError) {
  //   return <div className="p-8 text-center text-3xl">{error?.message}</div>;
  // }
  return (
    <div className="space-y-4">
      <div className="p-4 text-center text-3xl">ReactQueryPage</div>
    </div>
  );
};

export default ReactQueryPage;
