import { Link } from "react-router";

export default function NavBar() {

    
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>

              <Link className="nav-link" to={"/products"}>
                Products
              </Link>
              <Link className="nav-link" to={"/dashboard"}>
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}