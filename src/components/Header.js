import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AliMoradpour
        </Link>
          <ul className="navbar-nav me-auto my-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
                to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
                to="/todos">
                Todos
              </NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};
export default Header;
