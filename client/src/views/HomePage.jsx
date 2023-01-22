import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";

const HomePage = () => {
  return (
    <Box className="home-page">
      <FlexBetween
        height="54vh"
        width="54vw"
        flexDirection="column"
        justifyContent="center"
        // backgroundColor="rgba(254,254,254,0.4)"
        sx={{
          position: "absolute",
          right: "4vw",
          top: "15vh",
          border: "2px solid red",
          color: "whitesmoke",
        }}
      >
        <Box fontSize="52px" fontWeight="600">
          Anthony Bosek
        </Box>
        <Box fontSize="32px" fontWeight="500">
          Software Developer
        </Box>
        <Box>
          Hey, I’m Anthony Bosek. I’m a software developer remotely based in
          Phoenix, AZ. I love to problem solve, write code, & get involved in
          the recovery community.
        </Box>
        <Box>
          Check out some of my projects, read a little about me, & reach out if
          you want to know more.
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default HomePage;
