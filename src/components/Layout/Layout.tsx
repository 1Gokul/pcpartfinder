import { Search } from "../../pages/Search/Search";
import { Header } from "../Header/Header";
import { LayoutContainerStyle } from "./Layout.css";

export function Layout() {
  return (
    <div className={LayoutContainerStyle}>
      <Header />
      <Search />
    </div>
  );
}
