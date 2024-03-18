import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/prueba">Prueba</Link>
      <Link to="/">Explore</Link>
    </nav>
  );
};

export default Navbar;
