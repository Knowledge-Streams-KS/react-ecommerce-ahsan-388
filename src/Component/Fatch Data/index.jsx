import axios from "axios";
import { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>FakeStore Products</h1>
      <div>
        {/* {data} */}
        {data.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default DataFetch;
