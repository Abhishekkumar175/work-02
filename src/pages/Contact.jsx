import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    condition: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '918081414456';

    const message = `
🩺 New Appointment Request

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Preferred Date: ${formData.date || 'Not Provided'}
🏥 Condition: ${formData.condition || 'Not Provided'}

💬 Additional Message:
${formData.message || 'No additional message'}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    alert('Redirecting to WhatsApp...');

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      phone: '',
      date: '',
      condition: '',
      message: '',
    });
  };

  return (
    <div className="contact-form-wrapper">
      <div className="card form-card">
        <h2>Request an Appointment</h2>

        <p className="form-disclaimer">
          Submit your details below and our clinic will call or WhatsApp you
          shortly to confirm your appointment.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              placeholder="Enter your 10-digit mobile number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  date: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="condition">
              Condition / Reason for Visit
            </label>
            <input
              type="text"
              id="condition"
              value={formData.condition}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  condition: e.target.value,
                })
              }
              placeholder="e.g., Knee Pain, Fracture, Consultation"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Additional Message (Optional)
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              placeholder="Any other details we should know?"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            <Send size={18} style={{ marginRight: '8px' }} />
            Request Callback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;