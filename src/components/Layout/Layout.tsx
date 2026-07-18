import { Redirect, Route, Switch } from "wouter";
import { Build } from "../../pages/Build/Build";
import { Browse } from "../../pages/Browse/Browse";
import { Search } from "../../pages/Search/Search";
import { Header } from "../Header/Header";
import { LayoutContainerStyle } from "./Layout.css";

export function Layout() {
  return (
    <div className={LayoutContainerStyle}>
      <Header />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/browse" component={Browse} />
        <Route path="/build" component={Build} />
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </div>
  );
}
