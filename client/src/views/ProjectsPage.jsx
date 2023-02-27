import { Box } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import RegularTxt from "../components/RegularTxt";
import projectA from "../assets/images/project-A.png";
import projectB from "../assets/images/project-B.png";
import projectC from "../assets/images/project-C.png";
import projectD from "../assets/images/project-D.png";

const ProjectsPage = () => {
  return (
    <FlexBetween>
      {/* CONTAINER */}
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...a few examples
          </RegularTxt>
        </Box>
        <FlexBetween flexDirection="column">
          <FlexBetween>
            <Box
              height="28vh"
              width="28vw"
              m="1rem"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img src={projectA} alt="project-A" width="100%" />
            </Box>
            <Box
              height="28vh"
              width="28vw"
              m="1rem"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img src={projectB} alt="projectB" width="100%" />
            </Box>
          </FlexBetween>
          <FlexBetween>
            <Box
              height="28vh"
              width="28vw"
              m="1rem"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img src={projectC} alt="projectC" width="100%" />
            </Box>
            <Box
              height="28vh"
              width="28vw"
              m="1rem"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img src={projectD} alt="projectD" width="100%" />
            </Box>
          </FlexBetween>
        </FlexBetween>
      </Box>
    </FlexBetween>
  );
};

export default ProjectsPage;
