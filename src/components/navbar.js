import { Link } from "react-router-dom";
const Navbar = ({ cart }) => {
  return (
    <div>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
