import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [openCategory, setOpenCategory] = useState('trauma');

  const categories = [
    {
      id: 'trauma',
      title: 'A. Trauma & Emergency',
      items: ['Fracture', 'Dislocation', 'Plaster/Casting', 'Close Reduction & Casting', 'Emergency Care', 'Sport Injury']
    },
    {
      id: 'joint',
      title: 'B. Joint & Bone Conditions',
      items: ['Osteoarthritis', 'Rheumatoid Arthritis', 'Osteoporosis', 'Bone TB', 'Gout', 'Scoliosis', 'Ankylosing Spondylitis', 'Joint Replacement (incl. Unilateral Knee Replacement)']
    },
    {
      id: 'spine',
      title: 'C. Spine & Nerve',
      items: ['Cervical Spondylitis', 'Slip Disc', 'Sciatica', 'Back Pain', 'Neck Pain', 'Whiplash Injuries']
    },
    {
      id: 'soft-tissue',
      title: 'D. Soft Tissue & Sports Injuries',
      items: ['Frozen Shoulder', 'Tennis Elbow', 'Wrist Pain', 'De Quervain\'s Tenosynovitis', 'Plantar Fasciitis', 'Tendonitis', 'PRP Injections', 'Stem Cell Injections']
    },
    {
      id: 'specific-pain',
      title: 'E. Joint-Specific Pain',
      items: ['Knee Pain', 'Hip Pain', 'Shoulder Pain', 'Ankle Pain', 'Elbow Pain']
    },
    {
      id: 'pediatric',
      title: 'F. Pediatric & Deficiency Care',
      items: ['Pediatric Orthopedics', 'Vitamin D Deficiency', 'Vitamin B12 Deficiency']
    },
    {
      id: 'rehab',
      title: 'G. Rehabilitation & Ongoing Care',
      items: ['Rehabilitation', 'Post-Surgical Pain Management', 'Chronic Pain Management', 'Fibromyalgia', 'Counselling Service', 'Online Pain Management Booking']
    }
  ];

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="services-page">
      {/* Page Intro */}
      <section className="section bg-bone text-center page-intro">
        <div className="container">
          <h1>Orthopedic Services & Treatments</h1>
          <p className="intro-subline">Comprehensive care for trauma, joint, and nerve conditions tailored to your recovery.</p>
        </div>
      </section>

      {/* Categorized Service Grid */}
      <section className="section">
        <div className="container">
          <div className="services-accordion-container">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className={`accordion-item ${openCategory === category.id ? 'open' : ''}`}
              >
                <button 
                  className="accordion-header" 
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={openCategory === category.id}
                >
                  <h2>{category.title}</h2>
                  {openCategory === category.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                
                <div className="accordion-content">
                  <div className="service-tags-grid">
                    {category.items.map((item, index) => (
                      <span key={index} className="service-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Treatment Works */}
      <section className="section treatment-process bg-blue-100">
        <div className="container">
          <div className="section-header text-center">
            <h2>How Treatment Works</h2>
            <p>Our proven, structured approach to restoring your mobility.</p>
          </div>
          
          <div className="process-grid">
            <div className="process-step card">
              <div className="step-number">1</div>
              <h3>Consultation & Diagnosis</h3>
              <p>We listen to your concerns, examine the issue, and provide an accurate diagnosis without unnecessary testing.</p>
            </div>
            <div className="process-step card">
              <div className="step-number">2</div>
              <h3>Personalized Treatment Plan</h3>
              <p>Depending on your condition, we structure a specific plan involving rest, medicine, exercises, or advanced procedures.</p>
            </div>
            <div className="process-step card">
              <div className="step-number">3</div>
              <h3>Recovery & Follow-up</h3>
              <p>We monitor your progress closely through follow-ups and guided rehabilitation until full mobility is restored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band bg-blue-900 section text-center">
        <div className="container">
          <h2>Have a Specific Condition?</h2>
          <p>Talk to Dr. Upadhyaya Directly and start your recovery journey today.</p>
          <div className="cta-actions" style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem'}}>
            <a href="tel:+918081414456" className="btn btn-primary" style={{backgroundColor: 'var(--white)', color: 'var(--ortho-blue-900)'}}>
              <Phone size={18} style={{marginRight: '8px'}} /> Call Now
            </a>
            <a href="https://wa.me/+918081414456" className="btn" style={{backgroundColor: '#25D366', color: 'white'}} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} style={{marginRight: '8px'}} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
