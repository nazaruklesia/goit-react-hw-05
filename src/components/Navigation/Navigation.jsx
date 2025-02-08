import { NavLink } from "react-router-dom";
import clsx from "clsx"
import s from "./Navigation.module.css"

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div >

      <header className={s.header} >
        <h2 className={s.title} >Movie Tracker </h2>

        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/"> Home</NavLink>
          <NavLink className={buildLinkClass} to="/movies">All Movies</NavLink>
        </nav>
      </header>

    </div>
  )
}

export default Navigation;