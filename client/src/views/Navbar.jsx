import { NavLink, Link } from "react-router-dom";
import FlexBetween from "../components/FlexBetween";
import RegularTxt from "../components/RegularTxt";

const Navbar = () => {
  return (
    <FlexBetween
      padding="1rem 6%"
      backgroundColor={"#333"}
      sx={{ height: "4vh" }}
    >
      <FlexBetween gap="1.75rem">
        <Link to="/" className="link">
          <div className="title">Anthony Bosek</div>
        </Link>
      </FlexBetween>

      <FlexBetween gap="2.25rem">
        <NavLink to="/" exact className="link">
          <RegularTxt>Home</RegularTxt>
        </NavLink>
        <NavLink to="/about" className="link">
          <RegularTxt>About</RegularTxt>
        </NavLink>
        <NavLink to="/skills" className="link">
          <RegularTxt>Skills</RegularTxt>
        </NavLink>
        <NavLink to="/projects" className="link">
          <RegularTxt>Projects</RegularTxt>
        </NavLink>
        <NavLink to="/contact" className="link">
          <RegularTxt>Contact</RegularTxt>
        </NavLink>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
