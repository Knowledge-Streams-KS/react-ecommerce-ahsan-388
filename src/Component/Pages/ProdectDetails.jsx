import { useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

const Details = () => {
  const { Params } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {});
  return (
    <>
      <h1>Prodect Details</h1>
      {Params ? <>pr</> : <></>}{" "}
    </>
  );
};
export default Details;
