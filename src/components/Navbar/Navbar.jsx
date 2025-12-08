import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JavaScript is included
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const isHomePage = location.pathname === '/';
  const textColor = isHomePage ? 'white' : '#003135';

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar fixed-top bg-transparent ${visible ? '' : 'navbar-hidden'}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ textDecoration: 'none', color: textColor }}>
          <img src={Logo} alt="Logo" className="logo me-2" />
          <span className="font-bold">Golden Eventz</span>
        </Link>
        <div className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/our-work" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }}>Our Work</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }}>Services</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }}
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <li><Link to="/price-page" className="dropdown-item" style={{ fontSize: '18px', fontWeight: 'bold', color: '#003135' }}>Price Page</Link></li> */}
                <li><Link to="/blog-page" className="dropdown-item" style={{ fontSize: '18px', fontWeight: 'bold', color: '#003135' }}>Blog Page</Link></li>
                <li><Link to="/faq" className="dropdown-item" style={{ fontSize: '18px', fontWeight: 'bold', color: '#003135' }}>FAQ Page</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="navbar-toggler d-lg-none" type="button" onClick={toggleMobileMenu} style={{ border: 'none', background: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" style={{ color: textColor }}>
            <path fillRule="evenodd" d="M2.5 12.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2.5 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
      <div className={`d-lg-none position-fixed top-0 end-0 vh-100 w-100 ${isMobileMenuOpen ? 'show-menu' : 'hide-menu'}`} style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: 'transform 0.3s ease-out',
          paddingTop: '58px',
          color: textColor
      }}>
        <button onClick={toggleMobileMenu} style={{ position: 'absolute', top: '10px', left: '10px', border: 'none', background: 'none', color: textColor }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 1.646a.5.5 0 0 1 .708 0L8 7.293l5.646-5.647a.5.5 0 0 1 .708.708L8.707 8l5.647 5.646a.5.5 0 0 1-.708.708L8 8.707 2.354 14.354a.5.5 0 0 1-.708-.708L7.293 8 1.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <ul className="navbar-nav flex-column text-right p-3" style={{ position: 'absolute', right: '0', top: '58px', width: '100%' }}>
          <li className="nav-item mb-2">
            <Link to="/about" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/our-work" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/contact" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/services" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          </li>
          {/* <li className="nav-item mb-2">
            <Link to="/price-page" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>Price Page</Link>
          </li> */}
          <li className="nav-item mb-2">
            <Link to="/blog-page" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>Blog Page</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/faq" className="nav-link" style={{ fontSize: '18px', fontWeight: 'bold', color: textColor }} onClick={() => setIsMobileMenuOpen(false)}>FAQ Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;