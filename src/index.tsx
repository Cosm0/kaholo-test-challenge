import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router, Switch, Route } from "react-router";
import AppStore, { Store } from "./stores/index";
import Homepage from "./containers/homepage";
import Settings from "./containers/settings";
import routes from "./routes";
import Layout from "./layout/layout";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends React.Component {
  private store: Store = AppStore;

  render() {
    return (
      <Provider {...this.store}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route exact path={routes.homepage} component={Homepage} />
              <Route path={routes.settings} component={Settings} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
