import styled from "styled-components";

export const Input = styled.input`
  background-color: #FFF;
  border: none;
  outline-style: none;
  width: 269px;
  height: inherit; 
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-left: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #2C2C2C;

  @media screen and (min-width: 1024px) {
    width: 497px;
  } 
`; 

export const Button = styled.button`
  background-color: #000;
  height: inherit; 
  width: 58px; 
  border-radius: inherit;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  display: flex; 
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #585555;
  }
`;

export const Container = styled.span`
  display: flex; 
  flex-flow: row nowrap; 
  width: fit-content; 
  height: 58px; 

  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.1);
`; 

