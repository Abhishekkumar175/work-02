import { useState, useEffect } from 'react';
import { X, ZoomIn, PlayCircle } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Placeholder images with categories
  const galleryImages = [
    { id: 1, category: 'interior', alt: 'Orthopedic clinic reception area in Mahmoorganj Varanasi', caption: 'Clinic Reception & Waiting Area' },
    { id: 2, category: 'doctor', alt: 'Dr. Aakash Upadhyaya consulting a patient', caption: 'Patient Consultation' },
    { id: 3, category: 'education', alt: 'Infographic: Knee arthritis things to avoid', caption: 'Knee Arthritis: Things to Avoid' },
    { id: 4, category: 'equipment', alt: 'Casting and plastering room setup', caption: 'Casting Room Facilities' },
    { id: 5, category: 'interior', alt: 'Consultation room at Dr. Upadhyaya Orthopedic Clinic', caption: 'Consultation Room' },
    { id: 6, category: 'education', alt: 'Infographic: Bone healing process', caption: 'The Bone Healing Process' },
    { id: 7, category: 'doctor', alt: 'Dr. Aakash Upadhyaya examining a knee joint', caption: 'Joint Examination' },
    { id: 8, category: 'education', alt: 'Infographic: Fracture and injury awareness', caption: 'Fracture Awareness & First Steps' },
    { id: 9, category: 'interior', alt: 'Clinic exterior on Dr. Upadhyaya Lane', caption: 'Clinic Exterior' }
  ];

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Clinic Interior' },
    { id: 'doctor', label: 'Doctor at Work' },
    { id: 'education', label: 'Patient Education' },
    { id: 'equipment', label: 'Equipment & Facilities' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Handle Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="gallery-page">
      <section className="section bg-bone text-center page-intro">
        <div className="container">
          <h1>Clinic Gallery</h1>
          <p className="intro-subline">Take a look inside our practice, our facilities, and helpful patient education materials.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Missing Info Alert */}
          <div className="missing-info-alert text-center" style={{marginBottom: '2rem'}}>
            <strong>[MISSING INFORMATION REQUIRED]</strong> — Final selected image files must be supplied by the clinic. Placeholder grey boxes are currently used.
          </div>

          {/* Filters */}
          <div className="gallery-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setLightboxIndex(null); // Close lightbox on filter change
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Video Teaser (Optional Enhancement) */}
          <div className="video-teaser-card card">
            <div className="video-info">
              <h3>Educational Reels</h3>
              <p>Watch short, informative videos directly on Dr. Upadhyaya's Instagram.</p>
            </div>
            <a href="https://instagram.com/dr_aakash_upadhyaya" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <PlayCircle size={18} style={{marginRight: '8px'}} /> Watch on Instagram
            </a>
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div 
                key={img.id} 
                className="gallery-item"
                onClick={() => setLightboxIndex(index)}
                tabIndex="0"
                aria-label={`View full image: ${img.caption}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setLightboxIndex(index);
                }}
              >
                <div className="gallery-placeholder">
                  <ZoomIn className="zoom-icon" size={32} />
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" aria-label="Close lightbox">
            <X size={32} />
          </button>
          
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <div className="lightbox-image-placeholder">
              <span>{filteredImages[lightboxIndex].caption}</span>
              <p className="lightbox-alt-text">Alt: "{filteredImages[lightboxIndex].alt}"</p>
            </div>
            <div className="lightbox-caption">
              {filteredImages[lightboxIndex].caption}
              <span className="lightbox-counter">{lightboxIndex + 1} / {filteredImages.length}</span>
            </div>
            <button 
              className="lightbox-nav prev" 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
            <button 
              className="lightbox-nav next" 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
