import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

// Reusing SVGs to avoid missing export issues in older lucide versions
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is just a UI stub for the blueprint
    alert("This form is currently a UI template. In a real environment, this would trigger an email or CRM entry for the clinic to call you back.");
  };

  return (
    <div className="contact-page">
      {/* Page Intro */}
      <section className="section bg-bone text-center page-intro pb-0">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="intro-subline">Get in touch to book your appointment or ask a question about our treatments.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container contact-container grid-2">
          
          {/* Contact Information Card */}
          <div className="contact-info-wrapper">
            <div className="card contact-info-card">
              <h2>Clinic Information</h2>
              
              <ul className="contact-list">
                <li>
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div className="contact-text">
                    <strong>Address</strong>
                    <p>Dr. Upadhyaya Lane, Birdopur, Mahmoorganj, Varanasi, Uttar Pradesh – 221010</p>
                  </div>
                </li>
                
                <li>
                  <div className="icon-box"><Phone size={24} /></div>
                  <div className="contact-text">
                    <strong>Phone & WhatsApp</strong>
                    <p>
                      <a href="tel:+918081414456">080814 14456</a>
                    </p>
                    <p>
                      <a href="https://wa.me/+918081414456" target="_blank" rel="noopener noreferrer" className="text-blue">
                        Chat on WhatsApp
                      </a>
                    </p>
                  </div>
                </li>
                
                <li>
                  <div className="icon-box"><Clock size={24} /></div>
                  <div className="contact-text">
                    <strong>Hours</strong>
                    <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                    <p className="text-amber">Sunday: 9:00 AM – 4:00 PM</p>
                  </div>
                </li>
                

              </ul>

              <div className="contact-socials">
                <strong>Follow Us</strong>
                <div className="social-icon-row">
                  <a href="https://m.facebook.com/100082978442523" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
                  <a href="https://instagram.com/dr_aakash_upadhyaya" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                  <a href="https://twitter.com/upadhyayaakash1" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
                  <a href="https://youtube.com/@dr.aakashupadhyaya9307" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact / Callback Form */}
          <div className="contact-form-wrapper">
            <div className="card form-card">
              <h2>Request an Appointment</h2>
              <p className="form-disclaimer">Submit your details below and our clinic will call or WhatsApp you shortly to confirm your exact appointment time.</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" required placeholder="Enter your full name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" required placeholder="Enter your 10-digit mobile number" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="condition">Condition / Reason for Visit</label>
                  <input type="text" id="condition" placeholder="e.g., Knee Pain, Fracture, Consultation" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Additional Message (Optional)</label>
                  <textarea id="message" rows="3" placeholder="Any other details we should know?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  <Send size={18} style={{marginRight: '8px'}} /> Request Callback
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="map-section" style={{lineHeight: 0}}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8778644555816!2d82.9859265!3d25.3083163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dfc6014ba31%3A0xc4ab5c814ab17cc!2sDr.%20Upadhyaya%20Fracture%20and%20Maternity%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="500" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Map location of Dr. Aakash Upadhyaya Clinic"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
