import { Link, Outlet } from 'react-router-dom';
import './BaseLayout.css'

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light navbar">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
          <ul className="nav">
            <li className="nav-item ">
            <Link className="nav-link" to="/AboutUs">
               About Us
              </Link>
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
              <Link className="nav-link" to="/donate-cats">
               Donation
              </Link>
              <Link className="nav-link" to="/Contact-us">
               Contact Us
              </Link>
              
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;