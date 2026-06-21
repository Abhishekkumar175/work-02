import {
  ArrowRight,
  Star,
  Activity,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-bone">
        <div className="container hero-container grid-2">
          <div className="hero-content">
            <div className="hero-tag">Orthopedic Surgeon · Varanasi</div>
            <h1>Expert Bone, Joint & Nerve Care — Close to Home in Varanasi</h1>
            <p className="hero-subline">
              MBBS, D-Ortho, DNB (Orthopedics) — Dr. Aakash Upadhyaya provides
              accurate diagnosis, compassionate treatment, and faster recovery
              for fractures, joint pain, and sports injuries.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book Appointment
              </a>
              <a href="tel:+918081414456" className="btn btn-outline">
                Call Now: 080814 14456
              </a>
              <a
                href="https://wa.me/+918081414456"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="doctor-image-frame pulse-glow overflow-hidden">
              <img
                src="/dr.akash.png"
                alt="Dr. Aakash Upadhyaya"
                className="doctor-image"
              />
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="trust-strip">
          <div className="container trust-strip-inner">
            <div className="trust-item">
              <Star className="text-amber" size={20} fill="#E8862E" />
              <span>4.8 / 5 Google Rating (527 Reviews)</span>
            </div>
            <div className="trust-item">
              <Activity className="text-blue" size={20} />
              <span>MBBS · D-Ortho · DNB (Orthopedics)</span>
            </div>
            <div className="trust-item">
              <MapPin className="text-blue" size={20} />
              <span>Birdopur, Mahmoorganj, Varanasi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Choose Us */}
      <section className="section usps-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Patients Choose Us</h2>
            <p>Built on trust, accurate diagnosis, and compassionate care.</p>
          </div>
          <div className="grid-4 usp-grid">
            <div className="card usp-card">
              <h3>Patient-First Consultations</h3>
              <p>
                "Listens patiently and explains every condition clearly before
                suggesting treatment."
              </p>
            </div>
            <div className="card usp-card">
              <h3>No Unnecessary Tests</h3>
              <p>
                "Treatment plans are evidence-based and avoid over-testing."
              </p>
            </div>
            <div className="card usp-card">
              <h3>Structured Recovery</h3>
              <p>
                "Phased treatment combining rest, medicine, and guided
                exercises."
              </p>
            </div>
            <div className="card usp-card">
              <h3>Clean, Organized Clinic</h3>
              <p>
                "A calm, well-maintained clinic environment with cooperative
                staff."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Strip */}
      <section className="conditions-strip bg-blue-100 py-4">
        <div className="container conditions-container">
          <div className="conditions-scroll">
            <span className="condition-pill">Knee Pain</span>
            <span className="condition-pill">Back Pain</span>
            <span className="condition-pill">Frozen Shoulder</span>
            <span className="condition-pill">Sciatica</span>
            <span className="condition-pill">Fracture & Dislocation</span>
            <span className="condition-pill">Tennis Elbow</span>
            <span className="condition-pill">Arthritis</span>
            <span className="condition-pill">Sports Injury</span>
          </div>
          <a href="#services" className="view-all-link">
            View All Conditions <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band bg-blue-900 section text-center" id="book">
        <div className="container">
          <h2>Don't Let Pain Hold You Back</h2>
          <p>Book Your Consultation Today</p>
          <div
            className="cta-actions"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <a
              href="tel:+918081414456"
              className="btn btn-primary"
              style={{
                backgroundColor: "var(--white)",
                color: "var(--ortho-blue-900)",
              }}
            >
              📞 Call: 080814 14456
            </a>
            <a
              href="https://wa.me/+918081414456"
              className="btn"
              style={{ backgroundColor: "#25D366", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Book via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
