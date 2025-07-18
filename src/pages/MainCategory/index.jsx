import React from "react";
import { useParams } from "react-router";

const MainCategory = () => {
  const { mainCategory } = useParams();

  return <p>{mainCategory}</p>;
};

export default MainCategory;