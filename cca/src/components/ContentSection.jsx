import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: #535bf2;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

const ContentText = styled.div`
  flex: 1;
  padding: 20px;
  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const ContentImage = styled.div`
  flex: 1;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ContentSection = ({ title, text, image, reverse }) => {
  return (
    <ContentContainer reverse={reverse}>
      <ContentText>
        <h2>{title}</h2>
        <p>{text}</p>
      </ContentText>
      <ContentImage>
        <img src={image} alt={title} />
      </ContentImage>
    </ContentContainer>
  );
};

export default ContentSection;