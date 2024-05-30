import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

export const Sidebar = () => {
  return (
    <aside
      className="sidebar-left border-right shadow"
      id="leftSidebar"
      data-simplebar
    >
      <a
        href="#"
        className="btn collapseSidebar toggle-btn d-lg-none  ml-2 mt-3"
        data-toggle="toggle"
      >
        <i className="fe fe-x">
          <span className="sr-only"></span>
        </i>
      </a>
      <nav className="vertnav navbar navbar-light">
        <div className="w-100 mb-4 d-flex sidebar-logo">
          <a
            className="navbar-brand mx-auto mt-2 flex-fill text-center"
            href="index.html"
          >
            <img src={Logo} />
          </a>
        </div>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-home fe-16"></i>
              <span className="ml-1 item-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/priests"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-users fe-16"></i>
              <span className="ml-1 item-text">Priest</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/temples"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-type fe-16"></i>
              <span className="ml-1 item-text">Temples</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-user fe-16"></i>
              <span className="ml-1 item-text">Users</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/comments"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-message-circle fe-16"></i>
              <span className="ml-1 item-text">Comments</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/qualifications"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-book-open fe-16"></i>
              <span className="ml-1 item-text">Educational Qualifications</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-edit-3 fe-16"></i>
              <span className="ml-1 item-text">Certification</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pooja-grocery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-shopping-cart fe-16"></i>
              <span className="ml-1 item-text">Pooja Grocery</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/notification-templates"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-bell fe-16"></i>
              <span className="ml-1 item-text">Notification Templates</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-package fe-16"></i>
              <span className="ml-1 item-text">Services</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-shopping-bag fe-16"></i>
              <span className="ml-1 item-text">Orders</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
