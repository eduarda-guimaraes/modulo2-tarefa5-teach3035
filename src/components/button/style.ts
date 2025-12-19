import styled from "styled-components";

export const Container = styled.div<{ themeContext: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  background-color: ${(props) =>
    props.themeContext === "light" ? "#fff" : "#333"};
  color: ${(props) => (props.themeContext === "light" ? "#000" : "#fff")};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.themeContext === "light"
      ? "0 2px 6px rgba(0,0,0,0.1)"
      : "0 2px 6px rgba(255,255,255,0.1)"};
  transition: all 0.3s ease;
`;

export const Paragraph = styled.p<{ themeContext: string }>`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => (props.themeContext === "light" ? "#333" : "#f1f1f1")};
`;

export const StyledButton = styled.button<{ themeContext: string }>`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  background-color: ${(props) =>
    props.themeContext === "light" ? "#007bff" : "#555"};
  color: #fff;

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.themeContext === "light" ? "#0056b3" : "#777"};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;