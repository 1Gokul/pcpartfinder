import { Redirect, Route, Switch } from "wouter";
import { Build } from "../../pages/Build/Build";
import { BuildView } from "../../pages/Build/BuildView";
import { Browse } from "../../pages/Browse/Browse";
import { Search } from "../../pages/Search/Search";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { layoutBodyStyle, layoutContainerStyle } from "./Layout.css";

export function Layout() {
  return (
    <div className={layoutContainerStyle}>
      <Header />
      <main className={layoutBodyStyle}>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/browse" component={Browse} />
          <Route path="/build" component={Build} />
          <Route path="/build/:id" component={BuildView} />
          <Route path="/">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
