import { NavLink } from "react-router-dom";
import clsx from "clsx"
import s from "./Navigation.module.css"

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div>

      <header>
        <h2>will be title</h2>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/"> Home</NavLink>
          <NavLink className={buildLinkClass} to="/movies">Movies Pages</NavLink>
        </nav>
      </header>

    </div>
  )
}

export default Navigation;