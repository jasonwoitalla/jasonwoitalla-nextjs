import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  tagLine: string;
  image: React.ReactNode;
  url: string;
  columnSpan: number;
};

const StyledContainer = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  height: 15em;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const StyledImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    transition: transform 0.5s ease;
  }
`;

const StyledDataContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #8d8741;
  background-color: rgba(255, 255, 255, 0.75);
`;

const StyledTitle = styled.div`
  font-weight: bold;
  text-shadow: 1px 1px 2px #272612e5;
`;

const StyledTagLine = styled.div``;

const ProjectGridItem = ({
  title,
  tagLine,
  image,
  url,
  columnSpan = 1,
}: Props) => {
  return (
    <StyledContainer className={`cell is-col-span-${columnSpan}`}>
      <Link href={url}>
        <StyledImageContainer>{image}</StyledImageContainer>
        <StyledDataContainer>
          <StyledTitle className="is-size-3">{title}</StyledTitle>
          <StyledTagLine>{tagLine}</StyledTagLine>
        </StyledDataContainer>
      </Link>
    </StyledContainer>
  );
};

export default ProjectGridItem;
