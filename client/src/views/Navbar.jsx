import { Typography } from "@mui/material";
import FlexBetween from "../components/FlexBetween";

const Navbar = () => {
  return (
    <FlexBetween padding="1rem 6%" backgroundColor={"#333"}>
      <FlexBetween gap="1.75rem">
        <Typography fontWeight="bold" variant="h4" color="whitesmoke">
          Anthony Bosek
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2.25rem">
        <Typography
          fontWeight="regular"
          variant="h6"
          color="whitesmoke"
          sx={{ borderBottom: "1px solid whitesmoke" }}
        >
          Home
        </Typography>
        <Typography fontWeight="regular" variant="h6" color="whitesmoke">
          About
        </Typography>
        <Typography fontWeight="regular" variant="h6" color="whitesmoke">
          Skills
        </Typography>
        <Typography fontWeight="regular" variant="h6" color="whitesmoke">
          Projects
        </Typography>
        <Typography fontWeight="regular" variant="h6" color="whitesmoke">
          Contact
        </Typography>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
