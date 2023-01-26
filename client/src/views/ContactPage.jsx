import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import RegularTxt from "../components/RegularTxt";

const ContactPage = () => {
  return (
    <FlexBetween>
      {/* CONTAINER */}
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...reach out
          </RegularTxt>
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default ContactPage;
