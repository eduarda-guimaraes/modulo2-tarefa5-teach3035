import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme/ThemeContext";
import { Container, Paragraph, StyledButton } from "./style";

export const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme.key === "light") {
      setTheme({ key: "dark", name: "Modo Escuro" });
    } else {
      setTheme({ key: "light", name: "Modo Claro" });
    }
  };

  return (
    <Container themeContext={theme.key}>
      <Paragraph themeContext={theme.key}>
        Tema atual: {theme.name}
      </Paragraph>
      <StyledButton themeContext={theme.key} onClick={toggleTheme}>
        Trocar tema
      </StyledButton>
    </Container>
  );
};