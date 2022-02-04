import styled from "styled-components";

export const LandingContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center; // centers perpendicular to the flex direction
  height: 100vh; // 100% view height
  width: 100vw; // 100% view width
  position: relative;
  text-align: center;
`;
