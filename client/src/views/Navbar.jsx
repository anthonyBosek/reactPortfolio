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
        <div className="title">Anthony Bosek</div>
      </FlexBetween>

      <FlexBetween gap="2.25rem">
        <RegularTxt sx={{ borderBottom: "1px solid whitesmoke" }}>
          Home
        </RegularTxt>
        <RegularTxt>About</RegularTxt>
        <RegularTxt>Skills</RegularTxt>
        <RegularTxt>Projects</RegularTxt>
        <RegularTxt>Contact</RegularTxt>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
