import React, { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { API } from "../config/api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const loadData = async () => {
    const res = await API.get("/products");
    setProducts(res.data.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <div className="cards">
        <div className="row">
          {products?.map((product, index) => (
            <div className="col" style={{ padding: 10 }}>
              {/* <CardMain data={poke} type={"og"} /> */}
              <CardProduct data={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
