import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navlink to="/home">Home</Navlink>
      <Navlink to="/categorie">categorie</Navlink>
      <Navlink to="/details">Details</Navlink>
    </>
  );
};

export default Header;
