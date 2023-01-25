import { Box } from "@mui/material";
import RegularTxt from "../components/RegularTxt";
import FlexBetween from "../components/FlexBetween";
import antDesign from "../assets/images/antDesign.png";
import d3 from "../assets/images/d3.png";
import express from "../assets/images/express.png";
// import graphQL from "../assets/images/graphQL.png";
import js from "../assets/images/js.png";
import jquery from "../assets/images/jquery.png";
import mongo from "../assets/images/mongo.png";
import mui from "../assets/images/mui.png";
import nivo from "../assets/images/nivo.png";
import node from "../assets/images/node.png";
// import npm from "../assets/images/npm.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import sass from "../assets/images/sass.png";
import tailwind from "../assets/images/tailwind.png";
import LogoCard from "../components/LogoCard";

const SkillsPage = () => {
  return (
    <FlexBetween>
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...skills
          </RegularTxt>
        </Box>

        <Box
          display="grid"
          height="80%"
          width="80%"
          m="0 auto"
          gridTemplateColumns="69% 29%"
          // gridTemplateRows="repeat(3, 1fr)"
          gap="2%"
        >
          <Box>
            <RegularTxt>front-end</RegularTxt>
            <Box display="flex" justifyContent="flex-start">
              <LogoCard src={react} alt="react" />
              <LogoCard src={express} alt="express" />
              <LogoCard src={mongo} alt="mongo" />
              <LogoCard src={node} alt="node" />
            </Box>
          </Box>
          {/* <Box>
            <RegularTxt>mern stack</RegularTxt>
            <Box display="flex" justifyContent="flex-start">
              <LogoCard src={react} alt="react" />
              <LogoCard src={express} alt="express" />
              <LogoCard src={mongo} alt="mongo" />
              <LogoCard src={node} alt="node" />
            </Box>
          </Box>
          <Box>
            <RegularTxt>state mgmt</RegularTxt>
            <Box display="flex" justifyContent="flex-start">
              <LogoCard src={redux} alt="redux" />
            </Box>
          </Box>
          <Box>
            <RegularTxt>javaScript</RegularTxt>
            <Box display="flex" justifyContent="flex-start">
              <LogoCard src={js} alt="js" />
              <LogoCard src={jquery} alt="jquery" />
            </Box>
          </Box>
          <Box gridColumn="span 2">
            <RegularTxt>ui/css</RegularTxt>
            <Box
              display="flex"
              justifyContent="flex-start"
              // backgroundColor="rgba(0, 0, 0, 0.5)"
              // border="1px solid rgba(255, 255, 255, 0.5)"
            >
              <LogoCard src={sass} alt="sass" />
              <LogoCard src={mui} alt="mui" />
              <LogoCard src={tailwind} alt="tailwind" />
              <LogoCard src={antDesign} alt="antDesign" />
            </Box>
          </Box>
          <Box>
            <RegularTxt>data visualization</RegularTxt>
            <Box display="flex" justifyContent="flex-start">
              <LogoCard src={d3} alt="d3" />
              <LogoCard src={nivo} alt="nivo" />
            </Box>
          </Box> */}
        </Box>

        {/* <RegularTxt>Mern Stack</RegularTxt>
        <img src={mongo} alt="test" width="100px" />
        <img src={express} alt="test" width="100px" />
        <Box width="4vw">
          <img src={react} alt="test" width="100%" />
        </Box>

        <img src={redux} alt="test" width="100px" />
        <img src={node} alt="test" width="100px" />
        <img src={npm} alt="test" width="100px" />
        <RegularTxt>Styling</RegularTxt>
        <img src={sass} alt="test" width="100px" />
        <img src={mui} alt="test" width="100px" />
        <img src={tailwind} alt="test" width="100px" />
        <img src={antDesign} alt="test" width="100px" />
        <RegularTxt>Data Visualization</RegularTxt>
        <img src={d3} alt="test" width="100px" />
        <img src={nivo} alt="test" width="100px" />
        <RegularTxt>API</RegularTxt>
        <img src={graphQL} alt="test" width="100px" />
        <img src={js} alt="test" width="100px" /> */}
      </Box>
    </FlexBetween>
  );
};

export default SkillsPage;
