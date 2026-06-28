import { Redirect, Route, Switch } from "wouter";
import { Build } from "../../pages/Build/Build";
import { Search } from "../../pages/Search/Search";
import { Header } from "../Header/Header";
import { LayoutContainerStyle } from "./Layout.css";

export function Layout() {
  return (
    <div className={LayoutContainerStyle}>
      <Header />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/build" component={Build} />
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </div>
  );
}
