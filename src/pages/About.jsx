import { MapPin, Clock, ShieldCheck, Stethoscope, Heart, Activity } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero bg-blue-900 text-center">
        <div className="container">
          <h1>About Dr. Aakash Upadhyaya's Orthopedic Clinic</h1>
          <p className="about-subline">Bone, joint, nerve, and trauma care located in Birdopur, Varanasi.</p>
        </div>
      </section>


      {/* What Makes Us Different */}
      <section className="section usps-expanded bg-bone">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Makes This Clinic Different</h2>
            <p>Our approach is centered completely around patient well-being and clear communication.</p>
          </div>
          <div className="grid-2 usp-expanded-grid">
            <div className="card usp-card">
              <div className="usp-icon"><Stethoscope size={24} /></div>
              <h3>Patient-First Consultations</h3>
              <p>Dr. Upadhyaya is known for listening patiently and explaining every condition clearly before suggesting any treatment. We ensure you understand your diagnosis thoroughly so you can make informed decisions about your health.</p>
            </div>
            <div className="card usp-card">
              <div className="usp-icon"><ShieldCheck size={24} /></div>
              <h3>No Unnecessary Tests</h3>
              <p>We believe in ethical, evidence-based medical practice. Our treatment plans avoid over-testing, meaning we only prescribe diagnostics that are absolutely critical for mapping out your path to recovery.</p>
            </div>
            <div className="card usp-card">
              <div className="usp-icon"><Activity size={24} /></div>
              <h3>Structured Recovery Plans</h3>
              <p>Healing a bone or joint takes more than just a prescription. We provide phased treatment plans that combine rest, appropriate medicine, and guided exercises to restore your mobility safely and completely.</p>
            </div>
            <div className="card usp-card">
              <div className="usp-icon"><Heart size={24} /></div>
              <h3>Clean, Organized Clinic</h3>
              <p>We maintain a calm, exceptionally clean, and well-organized clinic environment. Our highly cooperative staff ensures that your visits are seamless, prioritizing your comfort when you are in pain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Timings */}
      <section className="section facilities-section">
        <div className="container grid-2">
          <div className="facilities-block">
            <h2>Facilities & Equipment</h2>
            <ul className="facilities-list">
              <li><ShieldCheck className="text-blue" size={20} /> On-site Plastering & Casting</li>
              <li><ShieldCheck className="text-blue" size={20} /> Close Reduction facilities</li>
              <li><ShieldCheck className="text-blue" size={20} /> Pediatric Orthopedic care setup</li>
            </ul>
            {/* <div className="missing-info-alert mt-4">
              <strong>[MISSING INFORMATION REQUIRED]</strong> — X-ray/diagnostic equipment on-site? Operation theatre on-site or referral-based? Number of beds, if any?
            </div> */}
          </div>
          
          <div className="timings-block card">
            <div className="timings-header">
              <Clock size={24} className="text-blue" />
              <h2>Clinic Timings</h2>
            </div>
            <table className="timings-table">
              <tbody>
                <tr>
                  <td><strong>Monday – Saturday</strong></td>
                  <td>Opens 9:00 AM – <em>8:00 PM</em></td>
                </tr>
                <tr>
                  <td><strong>Sunday</strong></td>
                  <td>Opens<span className="text-amber font-semibold"> 9:00 AM – <em>4:00 PM</em></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="map-section">
        <div className="container text-center section-header">
          <h2>Visit Us</h2>
          <p className="flex-center justify-center gap-2"><MapPin size={18} className="text-blue" /> Dr. Upadhyaya Lane, Birdopur, Mahmoorganj, Varanasi – 221010</p>
        </div>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8778644555816!2d82.9859265!3d25.3083163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dfc6014ba31%3A0xc4ab5c814ab17cc!2sDr.%20Upadhyaya%20Fracture%20and%20Maternity%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Aakash Upadhyaya Orthopedic Clinic Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
