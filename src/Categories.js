import React from "react";
import items from "./data";
import { useEffect, useState } from "react";

const Categories = ({ filterItems, menuItems, categories }) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((item, index) => (
          <button onClick={() => filterItems(item)} key={index} type="button">
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
