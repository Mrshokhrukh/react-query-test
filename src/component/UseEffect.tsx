import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UseEffectProps = {};

//

const UseEffect: React.FC<UseEffectProps> = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const checkData = (id: any) => {
    navigate(`/useEffect-data-details/${id}`);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="effect_div">
      <h1>Products fetched using useEffect</h1>
      {data.map((dt: any, i: any) => {
        return (
          <div key={i} className="data" onClick={() => checkData(dt.id)}>
            <h2>
              {i + 1}. {dt.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default UseEffect;
