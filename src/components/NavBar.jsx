import { NavLink } from "react-router";

export default function NavBar() {

  const links = ["Home", "Products", "Dashboard"]
  
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-underline">
              {links.map((link) => (
                <NavLink key={link} className={({isActive})=> isActive? "nav-link active":"nav-link"}
                  aria-current="page"
                  to={link === 'Home'? '/': link}>
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
}