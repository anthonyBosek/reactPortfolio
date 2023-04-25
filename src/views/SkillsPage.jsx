import { Box } from "@mui/material";
import RegularTxt from "../components/RegularTxt";
import FlexBetween from "../components/FlexBetween";
import LogoCard from "../components/LogoCard";
import Arrow from "../components/Arrow";
import { languageArray, softSkillsArray } from "../assets/data/language";

const SkillsPage = () => {
  return (
    <FlexBetween>
      {/* CONTAINER */}
      <Box className="container">
        <Box className="header">
          <RegularTxt sx={{ fontSize: "2rem", marginRight: "2rem" }}>
            ...what i offer
          </RegularTxt>
        </Box>

        {/* PAGE CONTENT */}
        <Box
          m="0 auto"
          gap="2%"
          width="80%"
          height="80%"
          display="grid"
          gridTemplateColumns="64% 34%"
        >
          <Box
            height="90%"
            width="100%"
            display="grid"
            m="1.5rem auto 0 auto"
            pl="2rem"
            gridTemplateRows="repeat(4, 1fr)"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            {languageArray.map(({ header, span, languages }) => (
              <Box key={header} gridColumn={span}>
                <RegularTxt
                  pb="2px"
                  width="fit-content"
                  borderBottom="1px solid dodgerblue"
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
          <Box
            pl="2rem"
            mt="1.5rem"
            height="fit-content"
            borderLeft="1px solid #333"
          >
            <RegularTxt
              pb="2px"
              mb="2rem"
              width="fit-content"
              borderBottom="1px solid dodgerblue"
            >
              soft skills
            </RegularTxt>
            <ul>
              {softSkillsArray.map((skill, i) => (
                <li key={i}>
                  <Arrow />
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
