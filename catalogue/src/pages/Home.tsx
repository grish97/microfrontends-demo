import React from "react";
import { useLocation } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import Product from "./Product";
import { getCatalogueData } from "../statics/apiData";

export type TCatalogue = {
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
        {getCatalogueData().catalogue.map((item: TCatalogue) => (
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
