import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaPlus } from 'react-icons/fa'; 
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-400 to-blue-900 p-2 shadow-lg flex justify-between items-center">
    <div className="flex items-center">
      <h1 className="text-white text-2xl font-bold">Online Library</h1>
    </div>
    <ul className="flex justify-center flex-1">
      <li className="mx-4">
        <Link to="/" className="text-white flex items-center hover:text-yellow-300 transition duration-300">
          <FaHome className="mr-2" /> Home
        </Link>
      </li>
      <li className="mx-4">
        <Link to="/books" className="text-white flex items-center hover:text-yellow-300 transition duration-300">
          <FaBook className="mr-2" /> Browse Books
        </Link>
      </li>
      <li className="mx-4">
        <Link to="/add-book" className="text-white flex items-center hover:text-yellow-300 transition duration-300">
          <FaPlus className="mr-2" /> Add Book
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
