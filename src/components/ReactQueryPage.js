import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:3004/posts");
    },
    retry: 2,
    select: (data) => {
      return data.data;
    },
  });
  console.table("Data:", data, "Loading?", isLoading);
  console.log("Error:", isError, error);

  if (isLoading) {
    return <div className="text-center text-3xl text-red-400">Loading...</div>;
  }
  if (isError) {
    return <div className="p-8 text-center text-3xl">{error?.message}</div>;
  }
  return (
    <div className="space-y-4">
      <div className="p-8 text-center text-3xl">ReactQueryPage</div>
      <ul className="grid grid-cols-3 items-center gap-3">
        {data.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border bg-yellow-200 p-4 text-xl"
          >
            {item.id} {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryPage;
