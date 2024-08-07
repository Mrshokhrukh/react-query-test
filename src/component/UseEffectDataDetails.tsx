import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type UseEffectDataDetailsProps = {};

const UseEffectDataDetails: React.FC<UseEffectDataDetailsProps> = () => {
  let { id } = useParams();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>{id}</h1>
      <h1>{data.title}</h1>
      <h1>{data.price}</h1>
      <img src={data.image} alt="" width={250}/>
    </div>
  );
};
export default UseEffectDataDetails;
