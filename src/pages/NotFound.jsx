import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="p-4 text-center">
    <h1 className="text-3xl">404 - Page Not Found</h1>
    <Link to="/" className="text-blue-500">Go back to Home</Link>
  </div>
);

export default NotFound;
