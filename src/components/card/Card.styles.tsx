import styled from "styled-components";

export const Container = styled.section`
  display: flex; 
  flex-flow: column nowrap; 
  gap: 24px;
  justify-content: center;
  background-color: #FFF;
  border-radius: 15px;
  width: 327px; 
  padding: 26px 24px 26px 24px;
  height: fit-content;
  z-index: 1;

  @media screen and (min-width: 1124px) {
    flex-flow: row nowrap;
    padding: 37px 0 37px 0; 
    width: 1110px;
  } 
`; 

export const Section = styled.article`
  display: flex; 
  flex-flow: column nowrap; 
  gap: 7px; 
  padding: 0 32px 0 32px;

  @media screen and (min-width: 1124px) {
    gap: 13px;
    width: 213px;
    align-items: flex-start;

    p { 
      text-align: left;
    }
  } 
`;

export const Line = styled.div`
  height: 75px; 
  width: 1px;

  background: #000000;
  mix-blend-mode: normal;
  opacity: 0.15;
`;