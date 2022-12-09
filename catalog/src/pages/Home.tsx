import React from "react";
import { useLocation } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import Product from "./Product";
import { getCatalogData } from "../statics/apiData";

export type TCatalog = {
  id: number;
  productName: string;
  image: string;
  cost: string;
};

const generateClassName = createGenerateClassName({
  seed: "catalogue",
});

const Home = () => {
  let location = useLocation();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <div>
        {getCatalogData().catalog.map((item: TCatalog) => (
          <Product
            key={item.id}
            data={item}
            url={`${location.pathname}/product/${item.id}`}
          />
        ))}
      </div>
    </StylesProvider>
  );
};

export default Home;
