import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; // Add this import
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import { CartWidget } from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <img className='imgLogo' src={Logo} alt="Logo" />
        <h5>Elegance</h5>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100rem' }} navbarScroll>
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </Nav>
          <Link to='/cart'>
            <CartWidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
