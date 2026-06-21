import {
  Award,
  GraduationCap,
  FileCheck,
  Stethoscope,
  PlayCircle,
} from "lucide-react";
import "./Doctor.css";

// Using the same SVGs for social icons to avoid lucide export issues
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Doctor = () => {
  const specializations = [
    "Trauma & Fracture Management",
    "Joint & Bone Care",
    "Hand & Wrist Injuries",
    "Arm, Forearm & Elbow",
    "Leg, Ankle & Foot Injuries",
    "Post-Trauma Care",
    "Pediatric Orthopedics",
  ];

  return (
    <div className="doctor-page">
      {/* Profile Header */}
      <section className="profile-header bg-bone">
        <div className="container grid-2 align-center">
          <div className="doctor-photo-container pulse-glow">
            <div className="doctor-photo-placeholder">
              <img
                src="/dr.akash-01.webp"
                alt="Dr. Aakash Upadhyaya"
                className="doctor-photo"
              />
            </div>
          </div>

          <div className="doctor-credentials">
            <h1>Dr. Aakash Upadhyaya</h1>
            <div className="doctor-titles">
              <h2 className="title-hindi">हड्डी जोड़ एवं नस रोग विशेषज्ञ</h2>
              <span className="title-divider">·</span>
              <h2 className="title-english">Orthopedic Surgeon</h2>
            </div>

            <div className="credentials-list">
              <div className="credential-item">
                <Award className="text-blue" size={20} />
                <strong>Qualifications:</strong> MBBS, D-Ortho, DNB
                (Orthopedics)
              </div>
              <div className="credential-item">
                <Stethoscope className="text-blue" size={20} />
                <strong>Experience:</strong> 11 Years Experience Overall (8
                years as specialist)
              </div>
            </div>

            <div className="doctor-socials">
              <a
                href="https://m.facebook.com/100082978442523"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/dr_aakash_upadhyaya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com/upadhyayaakash1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://youtube.com/@dr.aakashupadhyaya9307"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>

            <div className="mt-4">
              <a href="tel:+918081414456" className="btn btn-primary">
                Book Appointment with Dr. Upadhyaya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center">
            <h2>Areas of Specialization</h2>
            <p>Focused expertise for faster recovery and improved mobility.</p>
          </div>
          <div className="specialization-tags">
            {specializations.map((spec, index) => (
              <span key={index} className="spec-tag">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Reels */}
      <section className="reel-section">
        <div className="container">
          <div className="reel-wrapper">
            <div className="reel-video-card">
              <video
                src="/dr-aakash-reel-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="doctor-reel-video"
              />
            </div>

            <div className="reel-content">
              <h2>Patient Education Through Reels</h2>

              <p>
                Dr. Aakash Upadhyaya regularly shares short educational videos
                covering knee pain, arthritis, fractures, back pain, sports
                injuries, and recovery tips.
              </p>

              <div className="reel-points">
                <div className="reel-point">
                  ✅ Simple explanations in Hindi & English
                </div>

                <div className="reel-point">
                  ✅ Practical recovery & exercise guidance
                </div>

                <div className="reel-point">
                  ✅ Bone & joint health awareness
                </div>

                <div className="reel-point">✅ Expert orthopedic advice</div>
              </div>

              <a
                href="https://instagram.com/dr_aakash_upadhyaya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <PlayCircle size={18} />
                &nbsp; Watch More Reels on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section education-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Education & Registration</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              <div className="timeline-content card">
                <h3>MBBS</h3>
                <p className="missing-text">Vikram University Ujjain in 2012</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              <div className="timeline-content card">
                <h3>D-Ortho</h3>
                <p className="missing-text">
                  Rajiv Gandhi University of Health Sciences in 2017
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap size={24} />
              </div>
              <div className="timeline-content card">
                <h3>DNB (Orthopedics)</h3>
                <p className="missing-text">
                  National Board of Examination, India in 2020
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FileCheck size={24} />
              </div>
              <div className="timeline-content card">
                <h3>Medical Registration Number</h3>
                <p className="missing-text">
                  66947 Uttar Pradesh Medical Council, 2014
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
