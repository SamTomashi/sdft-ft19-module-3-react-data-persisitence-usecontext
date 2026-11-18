import { NavLink, Outlet } from "react-router";
import "../../App.css";

export default function Dashboard() {
  const Links = ["Profile", "Security"];

  return (
    <>
      <div className="content">
        <div className="sideBar p-2">
          <ul className="nav nav-pills nav-fill flex-column p-3">
            {Links.map((link) => (
              <li className="nav-item">
                <NavLink
                  to={link}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "nav-link active"
                      : isPending
                        ? "nav-link"
                        : "nav-link"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="container ">
          <h3>Dashboard</h3>
          <div className="border border-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

/***
 * useState
 * useContext
 * useMemo
 * useId
 * useEffect
 *
 */
