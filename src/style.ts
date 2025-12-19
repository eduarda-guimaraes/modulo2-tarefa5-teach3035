import styled from "styled-components";

export const Container = styled.div<{ themeContext: string }>`
  min-height: 100vh; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.themeContext === "light" ? "#fff" : "#333"};
  color: ${(props) => (props.themeContext === "light" ? "#000" : "#fff")};
  transition: all 0.3s ease;
`;