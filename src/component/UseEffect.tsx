import axios from "axios";
import React, { useEffect, useState } from "react";

type UseEffectProps = {};

//

const UseEffect: React.FC<UseEffectProps> = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://www.course-api.com/react-store-products")
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
    <div className="effect_div">
      <h1>Products fetched using useEffect</h1>
      {data.map((dt: any, i: any) => {
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
export default UseEffect;
