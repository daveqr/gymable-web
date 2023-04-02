import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/elements">Elements</Link>
          </li>   
          <li>
            <Link to="/generic">Generic</Link>
          </li>                          
          <li>
            <Link to={{ pathname: '/contact', search: `?message=Hello, world!` }}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
