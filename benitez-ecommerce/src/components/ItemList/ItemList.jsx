import React from "react";
import { Item } from "../Item/Item";

import "./ItemList.css";

const productFiltered = ({ products }) => (
  <>
    {products.map((product) => (
      <Item key={product.id} product={product} />
    ))}
  </>
);

export const ItemList = ({ products }) => {
  return <>{productFiltered({ products })}</>;
};
