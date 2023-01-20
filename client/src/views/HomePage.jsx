import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";

const HomePage = () => {
  return (
    <Box className="home-page">
      <FlexBetween
        height="54vh"
        width="54vw"
        backgroundColor="rgba(254,254,254,0.4)"
        sx={{
          position: "absolute",
          right: "4vw",
          top: "15vh",
          border: "2px solid red",
        }}
      ></FlexBetween>
    </Box>
  );
};

export default HomePage;
