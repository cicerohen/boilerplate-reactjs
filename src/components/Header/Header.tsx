import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import { Menu as MenuIcon, Home as HomeIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import { routes } from "../../router.settings";

const Header = () => {
  const styles = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={styles.leftArea}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Marvel API</Typography>
          <IconButton component={Link} to={routes.HOME.path} color="inherit">
            <HomeIcon />
          </IconButton>
        </div>
        <div className={styles.rightArea}>
          <Button component={Link} to={routes.CHARACTERS.path} color="inherit">
            {routes.CHARACTERS.name}
          </Button>
          <Button component={Link} to={routes.COMICS.path} color="inherit">
            {routes.COMICS.name}
          </Button>
          <Button component={Link} to={routes.CREATORS.path} color="inherit">
            {routes.CREATORS.name}
          </Button>
          <Button component={Link} to={routes.EVENTS.path} color="inherit">
            {routes.EVENTS.name}
          </Button>
          <Button component={Link} to={routes.SERIES.path} color="inherit">
            {routes.SERIES.name}
          </Button>
          <Button component={Link} to={routes.STORIES.path} color="inherit">
            {routes.STORIES.name}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(
  () => ({
    leftArea: {
      display: "flex",
      alignItems: "center",
    },
    rightArea: {
      display: "flex",
      marginLeft: "auto",
    },
  }),
  { name: Header.name }
);

export default Header;
