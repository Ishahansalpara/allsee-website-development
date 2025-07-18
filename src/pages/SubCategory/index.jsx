import React from "react";
import { useParams } from "react-router";

const SubCategory = () => {
  const { mainCategory, subCategory } = useParams();

  return (
    <p>
      {mainCategory}/{subCategory}
    </p>
  );
};

export default SubCategory;