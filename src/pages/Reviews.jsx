import { Star, ExternalLink, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Saurabh Patel",
      time: "2 months ago",
      text: "Dr. Aakash Upadhyaya is an excellent doctor. I had severe back pain, and his diagnosis and treatment plan gave me relief from the very first visit. Highly recommended.",
      rating: 5
    },
    {
      id: 2,
      author: "Harsh Srivastava",
      time: "4 months ago",
      text: "He treated my hip pain with a very clear explanation of the issue. His structured plan of rest, medicine, and phased exercises resulted in a full recovery without unnecessary tests.",
      rating: 5
    },
    {
      id: 3,
      author: "Ritesh Surya",
      time: "6 months ago",
      text: "Suffered from tennis elbow for a long time. Dr. Upadhyaya provided an accurate diagnosis and didn't push for unnecessary tests. I experienced quick relief. Great experience.",
      rating: 5
    },
    {
      id: 4,
      author: "Prabhat Pal",
      time: "8 months ago",
      text: "Took my mother for severe knee pain. The doctor's diagnosis was spot on and the treatment results were excellent. She is walking much better now.",
      rating: 5
    },
    {
      id: 5,
      author: "SK Pandey",
      time: "1 year ago",
      text: "Best doctor for knee pain in Varanasi. Provided excellent treatment and guidance throughout the recovery process.",
      rating: 5
    },
    {
      id: 6,
      author: "Upasna Soni",
      time: "1 year ago",
      text: "Very satisfied with the services. I consider it a regular treatment center for my family. The clinic is very clean and getting an appointment is easy.",
      rating: 5
    }
  ];

  return (
    <div className="reviews-page">
      {/* Summary Header */}
      <section className="section bg-bone text-center page-intro pb-0">
        <div className="container">
          <h1>Patient Reviews</h1>
          <div className="review-summary-card">
            <div className="big-stat">
              <span className="rating-number">4.8</span>
              <div className="star-row">
                <Star size={28} fill="#E8862E" color="#E8862E" />
                <Star size={28} fill="#E8862E" color="#E8862E" />
                <Star size={28} fill="#E8862E" color="#E8862E" />
                <Star size={28} fill="#E8862E" color="#E8862E" />
                <Star size={28} fill="#E8862E" color="#E8862E" />
              </div>
            </div>
            <p className="stat-text">Based on <strong>527 Google Reviews</strong></p>
            <a href="https://www.google.com/search?q=Dr.+Upadhyaya+Fracture+and+Maternity+Clinic+Varanasi" target="_blank" rel="noopener noreferrer" className="google-link">
              See all reviews on Google <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Review Cards Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="review-grid">
            {reviews.map((review) => (
              <div key={review.id} className="card review-card">
                <Quote className="quote-icon" size={32} />
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">{review.author.charAt(0)}</div>
                    <div>
                      <h3 className="reviewer-name">{review.author}</h3>
                      <div className="review-meta">
                        <span className="review-time">{review.time}</span>
                        <span className="review-source">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                          Google Review
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#E8862E" color="#E8862E" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band bg-blue-100 section text-center">
        <div className="container">
          <h2>Had a great experience?</h2>
          <p>Your feedback helps us improve and helps others find the right care.</p>
          <div className="cta-actions" style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
            <a href="https://www.google.com/search?q=Dr.+Upadhyaya+Fracture+and+Maternity+Clinic+Varanasi" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Star size={18} fill="white" style={{marginRight: '8px'}} /> Leave us a review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
