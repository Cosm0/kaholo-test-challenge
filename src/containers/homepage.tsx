import * as React from "react";
import { observer, inject } from "mobx-react";
import { Store } from "../stores/index";
import Grid from "@material-ui/core/Grid";
import UserCard from "../components/userCard";
import CatalogMessageBox from "../components/catalogMessageBox";
import { Waypoint } from "react-waypoint";
import { Container, Typography } from "@material-ui/core";

@inject("userStore")
@observer
export default class Homepage extends React.Component<Store> {
  async componentDidMount() {
    if (!this.props.userStore.isDataLoaded) {
      await this.props.userStore.getUsers();
      this.props.userStore.updateUserList();
    }
  }

  async preload() {
    this.props.userStore.nextPage();
    await this.props.userStore.getUsers();
  }

  async showUsers() {
    this.props.userStore.updateUserList();
  }

  render() {
    return (
      <Container>
        <Grid container spacing={3}>
          {this.props.userStore.users.map((item, index) => (
            <Grid item md={4} key={index}>
              <UserCard item={item} />
              {this.props.userStore.isNotSearchMode &&
                index === this.props.userStore.users.length - 41 && (
                  <Waypoint
                    scrollableAncestor={window}
                    onEnter={() => this.preload()}
                  />
                )}
              {this.props.userStore.isNotSearchMode &&
                index === this.props.userStore.users.length - 1 && (
                  <Waypoint
                    scrollableAncestor={window}
                    onEnter={() => this.showUsers()}
                  />
                )}
            </Grid>
          ))}
        </Grid>
        {(!this.props.userStore.catalogLimitReached ||
          this.props.userStore.isLoading) && (
          <CatalogMessageBox
            message={
              this.props.userStore.isLoading
                ? "Loading..."
                : "End of users catalog"
            }
          />
        )}
      </Container>
    );
  }
}
