import React from "react";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  let params = useParams();
  let { id, name } = useParams();

  console.log(params);
  return (
    <div>
      ProductDetail - {name} - id:{id}
    </div>
  );
}
