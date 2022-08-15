import styled from "styled-components"; 

interface Props {
  image: string; 
}

export const Header = styled.section<Props>`
  display: flex; 
  flex-flow: column nowrap;
  gap: 30px;
  padding-top: 30px;
  align-items: center;

  background-color: lightblue;
  background-image: url(${props => props.image});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  height: 280px; 
`; 

export const MapContainer = styled.section`
  height: 530px; 
`; 

export const Container = styled.section``; 