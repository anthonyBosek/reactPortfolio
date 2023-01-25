import FlexBetween from "./FlexBetween";

const LogoCard = ({ src, alt }) => (
  <FlexBetween width="6vw" p="0.5rem">
    <img src={src} alt={alt} width="100%" />
  </FlexBetween>
);

export default LogoCard;
