import { Link, Outlet } from "react-router";
import "../../App.css"

export default function Dashboard() {
    
    return (
      <>
        <div className="content">
          <div className="sideBar">
            <ul>
              <li>
                <Link to="profile">Profile</Link>
              </li>
              <li>
                <Link to="security">Security</Link>
              </li>
            </ul>
          </div>

          <div className="container border border-1">
            <h3>Dashboard</h3>
            <Outlet />
          </div>
        </div>
      </>
    );
}