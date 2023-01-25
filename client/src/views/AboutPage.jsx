import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import RegularTxt from "../components/RegularTxt";
import avatar from "../assets/images/avatar.jpg";

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
          gridTemplateColumns="30% 70%"
        >
          <Box m="1rem 1rem 0 0">
            <img src={avatar} alt="avatar" width="100%" />
          </Box>

          <Box p="1rem" borderLeft="1px solid #333">
            <RegularTxt sx={{ textAlign: "center", fontSize: "1.2rem" }}>
              I’m Anthony. I’m a web developer and software engineer. I
              specialize in the <b>MERN</b> stack with an emphasis on logic and
              functionality. I have a working knowledge of{" "}
              <b>
                Redux/ToolKit, Graphql, D3, Nivo, Material-UI, Tailwind,
                AntDesign,
              </b>{" "}
              & more.
              <Box
                sx={{
                  maxWidth: "8vw",
                  borderBottom: "1px solid dodgerblue",
                  margin: "1rem auto 2rem auto",
                }}
              />
            </RegularTxt>

            <ul>
              <li>
                <span className="arrow">▶</span>
                <b>birthday:</b> April 10, 1981
              </li>
              <li>
                <span className="arrow">▶</span>
                <b>location:</b> Phoenix, AZ
              </li>
              <li>
                <span className="arrow">▶</span>
                <b>experience:</b> 2+ years
              </li>
              <li>
                <span className="arrow">▶</span>
                <b>email:</b> anthony.bosek@gmail.com
              </li>
              <li>
                <span className="arrow">▶</span>
                <b>cell:</b> 480) 236 - 9069
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default AboutPage;
