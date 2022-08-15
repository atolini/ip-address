import styled from "styled-components";

export const Loading = styled.section`
  width: inherit; 
  height: inherit;
  background: rgba(0,0,0,0.5); 
  

  display: flex; 
  justify-content: center;
  align-items: center;
`; 

export const ErrorContainer = styled.section`
  background: #FFF;
  border-radius: 15px;
  padding: 26px 24px 26px 24px;
  z-index: 1;
  
  display: flex; 
  justify-content: center;
  flex-flow: column nowrap;
  gap: 8px; 
`; 