import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-white">
      <ul className="flex justify-evenly">
        <li>
          <Link className="font-bold text-lg" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="font-bold text-lg" to="/create">
            Create Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};
