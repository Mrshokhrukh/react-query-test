import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

type ReactQueryDataDetailsProps = {};

const fetchData = (id: any) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};

const ReactQueryDataDetails: React.FC<ReactQueryDataDetailsProps> = () => {
  let { id } = useParams();

  const { isLoading, data, isError, error } = useQuery("products", () => fetchData(id));

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>{id}</h1>
      <h1>{data?.data.title}</h1>
      <h1>{data?.data.price}</h1>
      <img src={data?.data.image} alt="" width={250} />
    </div>
  );
};
export default ReactQueryDataDetails;
