import { MapPin, Phone } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container grid-4">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <h3>Dr. Aakash Upadhyaya</h3>
            <p className="hindi-tagline">हड्डी जोड़ एवं नस रोग विशेषज्ञ</p>
            <p className="english-tagline">Orthopedic Surgeon</p>
          </div>
          <div className="social-links">
            <a href="https://m.facebook.com/100082978442523" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com/dr_aakash_upadhyaya" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/upadhyayaakash1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://youtube.com/@dr.aakashupadhyaya9307" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Clinic</a></li>
            <li><a href="#doctor">Doctor Profile</a></li>
            <li><a href="#services">Treatments & Services</a></li>
            <li><a href="#gallery">Clinic Gallery</a></li>
            <li><a href="#reviews">Patient Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact Information</h4>
          <ul className="contact-details">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Dr. Upadhyaya Lane, Birdopur, Mahmoorganj, Varanasi, Uttar Pradesh – 221010</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+918081414456">080814 14456</a>
            </li>
            <li>
              <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path></svg>" alt="WhatsApp" className="contact-icon" style={{width: '18px'}} />
              <a href="https://wa.me/+918081414456" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-col hours-col">
          <h4>Clinic Hours</h4>
          <ul className="hours-list">
            <li><span>Monday - Saturday:</span> <span>9:00 AM - 8:00 PM</span></li>
            <li><span>Sunday:</span> <span>9:00 AM - 4:00 PM</span></li>
          </ul>
          <div className="footer-map-action">
            <a href="https://maps.google.com/?q=Dr.+Upadhyaya+Fracture+and+Maternity+Clinic+Varanasi" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Get Directions
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {currentYear} Dr. Aakash Upadhyaya Orthopedic Clinic. All rights reserved.</p>
          <p className="disclaimer">Information on this website is for general awareness and does not replace in-person medical consultation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
