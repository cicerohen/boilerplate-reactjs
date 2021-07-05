import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header";
import { RCProps } from "../../utils/types";

type Optional<T = {}> = T &
  RCProps & {
    title?: React.ReactNode;
  };

type Props = Optional;

const Screen = ({ title, children }: Props) => {
  const styles = useStyles();
  return (
    <div>
      <Header />
      {children && (
        <Container component="main" className={styles.body}>
          <Typography component="h2" variant="h3" className={styles.title}>
            {title}
          </Typography>
          {children}
        </Container>
      )}
      <footer>footer</footer>
    </div>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    body: {
      minHeight: "800px",
    },
    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
  { name: Screen.name }
);

export default Screen;
