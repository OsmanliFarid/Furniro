"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Products = () => {
  const { id } = useParams();
  const [Data, SetData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3030/products/" + id).then(({ data }) => {
      SetData(data);
    });
  }, []);

  return (
    <>
      <img src={Data.image} alt="" className="w-[481px] h-[500]" />
    </>
  );
};

export default Products;
