import * as React from "react";
import { Grid, Typography } from "@material-ui/core";

export default props => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item md={8}>
        <Typography align="center" variant="h5" component="h2">
          {props.message}
        </Typography>
      </Grid>
    </Grid>
  );
};
