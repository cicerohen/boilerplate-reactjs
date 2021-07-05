import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import { RCProps } from "../../utils/types";
import Context from "./ThemeContext";

type Props = RCProps;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});

const ThemeProvider = ({ children }: Props) => {
  return (
    <Context.Provider value={{}}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </Context.Provider>
  );
};

export default ThemeProvider;
