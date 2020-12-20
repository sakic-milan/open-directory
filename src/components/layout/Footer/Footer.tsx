import React, { Children } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import styles from "./styles.module.scss";

import Grid from "@material-ui/core/Grid";

interface FooterProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles();

  return (
    <footer className={styles.appFooter}>
      <div className={styles.footerWrapper}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.bottomBarFooter}>
        <Container>
          <div className={styles.bottomBarContainer}>
            <div>Copyrights OpenDirectory 2020</div>
            <div>Made with 💗 in Serbia</div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
