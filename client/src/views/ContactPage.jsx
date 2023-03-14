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
        <Box>
          <RegularTxt
            pb="2px"
            width="fit-content"
            borderBottom="1px solid dodgerblue"
          >
            Email
          </RegularTxt>
          <RegularTxt
            pb="2px"
            width="fit-content"
            borderBottom="1px solid dodgerblue"
          >
            Socials
          </RegularTxt>
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default ContactPage;
