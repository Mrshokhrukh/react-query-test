import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

type ReactQueryProps = {};

const fetchData = () => {
  return axios.get("https://fakestoreapi.com/products/");
};
const ReactQuery: React.FC<ReactQueryProps> = () => {
  let navigate = useNavigate();
  const { isLoading, data, isError, error } = useQuery("products", fetchData);

  const checkData = (id: any) => {
    navigate(`/react-query-data-details/${id}`);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="query_div">
      <h1>Products fetched using React Query</h1>
      {data && (
        <>
          {data.data.map((dt: any, i: any) => {
            return (
              <div key={i} className="data" onClick={() => checkData(dt.id)}>
                <h2>
                  {i + 1}. {dt.title}
                </h2>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default ReactQuery;
