import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: end;
  align-items: center;
`;

const SocialLinks = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <StyledContainer>
      <div>Social Links</div>
      <span className="icon is-large">{githubIcon}</span>
      <span className="icon is-large">{linkedinIcon}</span>
    </StyledContainer>
  );
};

export default SocialLinks;
