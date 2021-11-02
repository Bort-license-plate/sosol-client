import React from "react";
import { AccountsProvider } from "./contexts/accounts";
import { AppHeader } from "./components/AppHeader";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { EditProfile } from "./components/Profile/EditProfile";
import { Home, Suggestion, Nav, Connect, Notifications } from "./views";
import { MarketProvider } from "./contexts/market";
import { MasterTweet } from "./components/Tweet/MasterTweet";
import { Profile } from "./components/Profile/Profile";
import { Wallet } from "./contexts/wallet";
import { Container, Grid } from "@mui/material";

export function Routes() {

  return (
    <>
      <BrowserRouter basename={"/"}>
        <Wallet>
          <AccountsProvider>
            <MarketProvider>
              <AppHeader />
              <Container maxWidth="lg">
                <Grid container>
                  <Grid item xs={1} sm={1} md={2}>
                    <Nav />
                  </Grid>
                  <Grid item xs={7}>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/connect" component={Connect} />
                      <Route
                        exact
                        path="/notifications"
                        component={Notifications}
                      />
                      <Route
                        exact
                        path={`/:handle/status/:tweetId`}
                        component={MasterTweet}
                      />
                      <Route
                        exact
                        path={`/settings/profile`}
                        component={EditProfile}
                      />
                      <Route exact path={`/:handle`} component={Profile} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </Grid>
                  <Grid item xs={3}>
                    <Suggestion />
                  </Grid>
                </Grid>
              </Container>
            </MarketProvider>
          </AccountsProvider>
        </Wallet>
      </BrowserRouter>
    </>
  );
}
