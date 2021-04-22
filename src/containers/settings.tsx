import * as React from "react";
import { Store } from "../stores/index";
import {
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Paper,
  Typography
} from "@material-ui/core";
import { observer, inject } from "mobx-react";

@inject("userStore")
@observer
export default class Settings extends React.Component<Store> {
  handleChange = e => {
    this.props.userStore.setNationality(String(e.target.value));
    this.props.userStore.resetUsers();
  };

  render() {
    return (
      <Container>
        <Paper>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item md={11}>
              <Typography align="center" variant="h5" component="h2">
                Settings
              </Typography>
              <form noValidate autoComplete="off">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Nationality:</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender2"
                    value={this.props.userStore.nationality}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="None"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="ch"
                      control={<Radio color="primary" />}
                      label="CH"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="es"
                      control={<Radio color="primary" />}
                      label="ES"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="fr"
                      control={<Radio color="primary" />}
                      label="FR"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="gb"
                      control={<Radio />}
                      label="GB"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}
