import { Dispatch, SetStateAction, createContext } from "react";

export type ThemeKey = "light" | "dark";

export type ThemeType = {
  key: ThemeKey;
  name: string;
};

type Context = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};

const ThemeContext = createContext<Context>({} as Context);

export default ThemeContext;