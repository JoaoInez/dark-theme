const theme = {
  blue: "#011627",
  green: "#2EC4B6",
  red: "#E71D36",
  orange: "#FF9F1C",
  black: "#363537",
  white: "#FDFFFC",
  gray: "#8D99AE"
};

const lightTheme = {
  ...theme,
  background: theme.white,
  foreground: theme.black
};

const darkTheme = {
  ...theme,
  background: theme.black,
  foreground: theme.white
};

export { lightTheme, darkTheme };
