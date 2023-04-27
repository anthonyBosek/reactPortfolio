import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import Arrow from "../components/Arrow";
import RegularTxt from "../components/RegularTxt";
import avatar from "../assets/images/avatar2.jpg";
import { specsArray, vitalsArray } from "../assets/data/language";

const AboutPage = () => {
  return (
    <FlexBetween>
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...a look in
          </RegularTxt>
        </Box>

        <Box
          display="grid"
          height="70%"
          width="80%"
          m="2rem auto"
          gridTemplateColumns="25% 75%"
        >
          <Box m="1rem 1rem 0 0">
            <img src={avatar} alt="avatar" width="100%" />
          </Box>

          <Box p="1rem" borderLeft="1px solid #333">
            <RegularTxt sx={{ textAlign: "center", fontSize: "1.2rem" }}>
              I’m Anthony Bosek. I’m a certified software developer & engineer.
              I specialize in the <b>MERN</b> stack with an emphasis on logic
              and functionality. I have a working knowledge of{" "}
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

            <FlexBetween>
              <Box>
                <ul>
                  {specsArray.map((spec, i) => (
                    <li key={i}>
                      <Arrow />
                      <b>{spec}</b>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box>
                {/* <RegularTxt ml="2rem">specs:</RegularTxt> */}
                <ul>
                  {vitalsArray.map(({ label, value }, i) => (
                    <li key={i}>
                      <Arrow />
                      <b>{`${label}:`}</b> {value}
                    </li>
                  ))}
                </ul>
              </Box>
            </FlexBetween>
          </Box>
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default AboutPage;
