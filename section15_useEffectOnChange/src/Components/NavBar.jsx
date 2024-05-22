import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="mt-10 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/user">User</Link>
      </nav>
    </div>
  );
}

export default NavBar;
