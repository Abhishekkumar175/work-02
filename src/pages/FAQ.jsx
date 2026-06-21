import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What conditions does Dr. Aakash Upadhyaya treat?",
      answer: "Dr. Upadhyaya treats a wide range of orthopedic issues including Trauma & Emergency (Fracture, Dislocation), Joint & Bone Conditions (Osteoarthritis, Rheumatoid Arthritis, Joint Replacement), Spine & Nerve issues (Sciatica, Slip Disc), Soft Tissue & Sports Injuries (Frozen Shoulder, Tennis Elbow), and Pediatric Orthopedics."
    },
    {
      question: "Where is the clinic located?",
      answer: "The clinic is located at Dr. Upadhyaya Lane, Birdopur, Mahmoorganj, Varanasi, Uttar Pradesh – 221010."
    },
    {
      question: "What are the clinic's working hours?",
      answer: "The clinic opens at 9:00 AM, Monday through Saturday, and is closed on Sundays. [MISSING INFORMATION REQUIRED — exact closing time]"
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling 080814 14456 or messaging us via WhatsApp at the same number. You can also request a callback using the form on our Contact page."
    },
    {
      question: "Does the clinic treat children (pediatric orthopedic issues)?",
      answer: "Yes, Pediatric Orthopedics is one of the specialized services offered by Dr. Upadhyaya."
    },
    {
      question: "Does the clinic offer PRP or Stem Cell therapy?",
      answer: "Yes, both PRP (Platelet-Rich Plasma) and Stem Cell injections are listed services. These are advanced regenerative options that you can discuss with Dr. Upadhyaya during your consultation."
    },
    {
      question: "What is the consultation fee?",
      answer: "[MISSING INFORMATION REQUIRED — fee not provided in research data]"
    },
    {
      question: "Is parking available at the clinic?",
      answer: "[MISSING INFORMATION REQUIRED — parking availability not specified]"
    },
    {
      question: "Does Dr. Upadhyaya perform joint replacement surgery himself, and where?",
      answer: "[MISSING INFORMATION REQUIRED — confirm surgical facility/hospital affiliation, since clinic address may be OPD/consultation only]"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="section bg-bone text-center page-intro pb-0">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="intro-subline">Find quick answers to common questions about our clinic, services, and policies.</p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-container">
          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item card ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <h3>{faq.question}</h3>
                    {isOpen ? (
                      <ChevronUp className="faq-icon text-blue" size={24} />
                    ) : (
                      <ChevronDown className="faq-icon text-slate" size={24} />
                    )}
                  </button>
                  <div className="faq-answer">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\[MISSING INFORMATION REQUIRED[^\]]*\]/g, '<span class="missing-text-inline">$&</span>') }}></p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="faq-contact-card text-center mt-5 card bg-blue-100">
            <h3>Still have questions?</h3>
            <p>We're here to help. Reach out to us directly.</p>
            <a href="tel:+918081414456" className="btn btn-primary mt-2">Call the Clinic</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
