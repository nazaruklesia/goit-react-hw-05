import clsx from "clsx"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"


const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
    return <header>
        <h2>will be title</h2>
        <nav className={s.nav}>
            <NavLink className={buildLinkClass} to="/"> Home</NavLink>
            <NavLink className={buildLinkClass} to="/movies">Movies Pages</NavLink>
        </nav>
    </header>
}
export default Header