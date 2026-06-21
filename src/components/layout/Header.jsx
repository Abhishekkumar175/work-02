import { Phone, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo-container">
          <a href="#home" className="brand-link">
            <span className="brand-name">Dr. Aakash Upadhyaya</span>
            <span className="brand-tagline">Orthopedic Clinic</span>
          </a>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#doctor" onClick={() => setIsMenuOpen(false)}>Doctor</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
            <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+918081414456" className="phone-link">
            <Phone size={18} />
            <span>080814 14456</span>
          </a>
          <a href="#contact" className="btn btn-primary btn-sm book-btn">
            <Calendar size={18} />
            <span>Book Appointment</span>
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
