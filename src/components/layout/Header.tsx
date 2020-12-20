import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  //window?: () => Window;
  //children: React.ReactElement;
}

export default function Header(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6">Scroll to Elevate App Bar</Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      {/* <Box my={2}>TEST</Box> */}
    </React.Fragment>
  );
}
