import React, { useState } from "react";
import CardProduct from "../components/CardProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className="container">
      <div className="cards">
        <div className="row">
          {products?.map((product, index) => (
            <div className="col" style={{ padding: 10 }}>
              {/* <CardMain data={poke} type={"og"} /> */}
              <CardProduct />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
