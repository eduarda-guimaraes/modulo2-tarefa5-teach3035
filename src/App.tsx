import { useState } from "react";
import ThemeContext, { ThemeType } from "./contexts/theme/ThemeContext";
import { Button } from "./components/button/Button";
import { Container } from "./style";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<ThemeType>({
    key: "light",
    name: "Modo Claro",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Container themeContext={theme.key}>
        <Button />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;