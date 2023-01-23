import { Box, IconButton } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const HomePage = () => {
  return (
    <Box className="home-page">
      {/* WELCOME BANNER */}
      <FlexBetween
        maxWidth="50vw"
        flexDirection="column"
        sx={{
          position: "absolute",
          right: "6vw",
          top: "20vh",
          color: "whitesmoke",
        }}
      >
        <Box fontSize="54px" fontWeight="600">
          Anthony Bosek
        </Box>
        <Box fontSize="26px" fontWeight="500" m="2vh 0">
          Software Developer
        </Box>
        <Box width="15%" borderBottom="1px solid #555" />
        <Box maxWidth="60%" textAlign="center" m="2vh 0">
          Hey, I’m Anthony Bosek. I’m a software developer remotely based in
          Phoenix, AZ. I love to problem solve, write code, & get involved in
          the recovery community.
        </Box>
        <Box maxWidth="48%" textAlign="center">
          Check out some of my projects, read a little about me, & reach out if
          you want to know more.
        </Box>
        {/* SOCIAL LINKS */}
        <FlexBetween mt="2vh">
          <IconButton>
            <LinkedInIcon sx={{ fontSize: "30px", color: "#555" }} />
          </IconButton>
          <IconButton>
            <GitHubIcon sx={{ fontSize: "30px", color: "#555" }} />
          </IconButton>
          <IconButton>
            <MailOutlineIcon sx={{ fontSize: "30px", color: "#555" }} />
          </IconButton>
        </FlexBetween>
      </FlexBetween>
    </Box>
  );
};

export default HomePage;
