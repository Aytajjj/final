import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvaider = (props) => {
  const [market, setMarket] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5500/src/data/Api.json")
      .then((res) => setMarket(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[market, setMarket]}>
      {props.children}
    </ProductContext.Provider>
  );
};
