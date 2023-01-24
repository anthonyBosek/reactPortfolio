import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import RegularTxt from "../components/RegularTxt";

const AboutPage = () => {
  return (
    <FlexBetween>
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...about
          </RegularTxt>
        </Box>
        <Box
          display="grid"
          height="70%"
          width="80%"
          m="2rem auto"
          gridTemplateColumns="30% 60%"
        >
          <Box borderRight="1px solid whitesmoke" paddingTop="1rem"></Box>
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default AboutPage;
