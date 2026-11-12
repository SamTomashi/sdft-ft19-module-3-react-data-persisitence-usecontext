import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function NavBar() {

    const user = useContext(UserContext)
    
    return (
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img
              src="./assets/hero.png"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            {user.username}
          </a>
        </div>
        
      </nav>
    );
}