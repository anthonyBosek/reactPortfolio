import { Box } from "@mui/material";
import RegularTxt from "../components/RegularTxt";
import FlexBetween from "../components/FlexBetween";
import LogoCard from "../components/LogoCard";
import { languageArray, softSkillsArray } from "../assets/data/language";

const SkillsPage = () => {
  return (
    <FlexBetween>
      {/* CONTAINER */}
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...skills
          </RegularTxt>
        </Box>

        {/* PAGE CONTENT */}
        <Box
          display="grid"
          height="80%"
          width="80%"
          m="0 auto"
          gridTemplateColumns="64% 34%"
          gap="2%"
        >
          <Box
            display="grid"
            height="90%"
            width="100%"
            m="1.5rem auto 0 auto"
            gridTemplateColumns="repeat(2, 1fr)"
            gridTemplateRows="repeat(4, 1fr)"
          >
            {languageArray.map(({ header, span, languages }) => (
              <Box key={header} gridColumn={span}>
                <RegularTxt
                  borderBottom="1px solid dodgerblue"
                  pb="2px"
                  width="fit-content"
                >
                  {header}
                </RegularTxt>
                <Box display="flex" justifyContent="flex-start">
                  {languages.map(({ src, alt }) => (
                    <LogoCard key={alt} src={src} alt={alt} />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box mt="1.5rem" borderLeft="1px solid #333" pl="2rem">
            <RegularTxt
              borderBottom="1px solid dodgerblue"
              pb="2px"
              width="fit-content"
              mb="2rem"
            >
              soft skills
            </RegularTxt>
            <ul>
              {softSkillsArray.map((skill, i) => (
                <li key={i}>
                  <span className="arrow">▶</span>
                  {skill}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default SkillsPage;
