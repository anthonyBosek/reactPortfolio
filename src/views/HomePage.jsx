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
          Software Engineer
        </Box>
        <Box width="15%" borderBottom="1px solid dodgerblue" />
        <Box maxWidth="65%" textAlign="center" m="2vh 0">
          Hey, I’m Anthony. I’m a Software Engineer remotely based in
          <br />
          Phoenix, AZ. I love to solve complex problems, write clean code, & get
          involved in the dev community.
        </Box>
        <Box maxWidth="48%" textAlign="center">
          Check out some of my projects, read a little about me, & reach out if
          you want to know more.
        </Box>
        {/* SOCIAL LINKS */}
        <FlexBetween mt="2vh">
          <a href="https://www.linkedin.com/in/anthonyBosek/">
            <IconButton>
              <LinkedInIcon
                sx={{
                  fontSize: "30px",
                  color: "#555",
                  "&:hover": { color: "dodgerblue" },
                }}
              />
            </IconButton>
          </a>
          <a href="https://github.com/anthonyBosek">
            <IconButton>
              <GitHubIcon
                sx={{
                  fontSize: "30px",
                  color: "#555",
                  "&:hover": { color: "dodgerblue" },
                }}
              />
            </IconButton>
          </a>
          <a href="https://mail.google.com">
            <IconButton>
              <MailOutlineIcon
                sx={{
                  fontSize: "30px",
                  color: "#555",
                  "&:hover": { color: "dodgerblue" },
                }}
              />
            </IconButton>
          </a>
        </FlexBetween>
      </FlexBetween>
    </Box>
  );
};

export default HomePage;
