import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            Navigation
            


   <nav className='nav'>
        <NavLink to='cast'>Cast</NavLink>
        <NavLink to='reviews'>Reviews</NavLink>
      </nav>
      <section className='outlet'>
        <Outlet />
      </section>
        </div>
    )
}

export default Navigation;