import React, { Children } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";

interface ContentLayoutProps {}

const Test: React.FC = () => {
  return <div>Hello there</div>;
};

const LayoutContent: React.FC<ContentLayoutProps> = () => {
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

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              {[...new Array(32)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>Right</Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default LayoutContent;
