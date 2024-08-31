import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPost = (postID) => {
  // console.log("query Data:", queryData);
  // const id = queryData.queryKey[1];
  console.log(postID);
  return axios.get(`http://localhost:3004/posts/${postID}`);
};

export const usePostQuery = (postID) => {
  return useQuery({
    queryKey: ["posts", postID],
    // queryFn: () => {
    //   return axios.get("http://localhost:3004/posts");
    // },
    queryFn: () => fetchPost(postID),
    retry: 2,
    select: (data) => {
      return data.data;
    },
    // staleTime: 60000, // default 0
    // gcTime: 600000, // default 300000 // staleTime < gcTime
    // refetchInterval: 3000, // default: false
    // refetchOnMount: false, // default: true: refetch on mount if the data is stale
    refetchOnWindowFocus: "always", // default: true
    // enabled: false, // 기본 fetch
  });
};
