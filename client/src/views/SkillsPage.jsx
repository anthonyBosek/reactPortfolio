import { Box } from "@mui/material";
import RegularTxt from "../components/RegularTxt";
import FlexBetween from "../components/FlexBetween";
import antDesign from "../assets/images/antDesign.png";
import d3 from "../assets/images/d3.png";
import express from "../assets/images/express.png";
import graphQL from "../assets/images/graphQL.png";
import js from "../assets/images/js.png";
import mongo from "../assets/images/mongo.png";
import mui from "../assets/images/mui.png";
import nivo from "../assets/images/nivo.png";
import node from "../assets/images/node.png";
import npm from "../assets/images/npm.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import sass from "../assets/images/sass.png";
import tailwind from "../assets/images/tailwind.png";

const SkillsPage = () => {
  return (
    <FlexBetween>
      <Box className="container">
        <RegularTxt>Mern Stack</RegularTxt>
        <img src={mongo} alt="test" width="100px" />
        <img src={express} alt="test" width="100px" />
        <img src={react} alt="test" width="100px" />
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
        <img src={js} alt="test" width="100px" />
      </Box>
    </FlexBetween>
  );
};

export default SkillsPage;
