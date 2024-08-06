import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

type ReactQueryProps = {};

const fetchData = () => {
  return axios.get("https://www.course-api.com/react-store-products");
};
const ReactQuery: React.FC<ReactQueryProps> = () => {
  const { isLoading, data, isError, error } = useQuery("products", fetchData);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="query_div">
      <h1>Products fetched using React Query</h1>
      {data?.data.map((dt: any, i: any) => {
        return (
          <div key={i} className="data">
            <h2>
              {i + 1}. {dt.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default ReactQuery;
