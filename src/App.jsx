import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Star,
  MapPin,
  Users,
  Sparkles,
  Calendar,
  CalendarCheck,
  ShieldCheck,
  Wind,
  Maximize2,
  ExternalLink,
  Camera,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Building2,
  Phone,
  Send,
  HeartHandshake,
  Layers,
} from 'lucide-react';
import { CONFIG, getWhatsAppUrl } from './config.js';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [proofModalOpen, setProofModalOpen] = useState(false);
  const [activeProof, setActiveProof] = useState(null);

  // Enquiry Builder State
  const [selectedEvent, setSelectedEvent] = useState('Wedding Ceremony & Reception');
  const [selectedGuests, setSelectedGuests] = useState('300 – 500 Guests');

  const currentYear = new Date().getFullYear();

  // Pre-formatted WhatsApp Message based on customizer
  const dynamicEnquiryMessage = `Hello Excel Events! I came across your website and would love to enquire about your event planning and decoration services for a ${selectedEvent} (${selectedGuests}) in Lagos. Could we discuss availability and next steps? Thank you!`;
  const dynamicWhatsAppUrl = getWhatsAppUrl(dynamicEnquiryMessage);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    function handleKeyDown(e) {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev - 1 + CONFIG.gallery.length) % CONFIG.gallery.length);
        }
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev + 1) % CONFIG.gallery.length);
        }
      }
      if (proofModalOpen && e.key === 'Escape') {
        setProofModalOpen(false);
      }
      if (mobileMenuOpen && e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, proofModalOpen, mobileMenuOpen]);

  // Lock body scroll on modal opens
  useEffect(() => {
    if (lightboxOpen || proofModalOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxOpen, proofModalOpen, mobileMenuOpen]);

  const openGalleryItem = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openProofModal = (review) => {
    setActiveProof(review);
    setProofModalOpen(true);
  };

  return (
    <div className="site-wrapper">
      {/* 1. CONCEPT TOPBAR */}
      <aside className="concept-topbar" aria-label="Website Concept Information">
        <span className="concept-badge">Website Preview</span>
        <span className="inline-flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Personalized website concept created by <strong>{CONFIG.business.conceptCreator}</strong> for{' '}
          <strong>{CONFIG.business.name}</strong> · Oregun, Ikeja, Lagos
        </span>
      </aside>

      {/* 2. HEADER & NAVIGATION */}
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a href="#home" className="brand-logo" aria-label="Excel Events Home">
            <span className="brand-title">EXCEL EVENTS</span>
            <span className="brand-subtitle">{CONFIG.business.descriptor}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#gallery" className="nav-link">Hall &amp; Decor</a>
            <a href="#reviews" className="nav-link">Google Reviews</a>
            <a href="#location" className="nav-link">Location</a>
          </nav>

          <div className="header-cta-group">
            <a
              href={getWhatsAppUrl(CONFIG.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Plan your event on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Plan Your Event</span>
            </a>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="drawer-panel">
          <div className="drawer-header">
            <div className="brand-logo">
              <span className="brand-title">EXCEL EVENTS</span>
              <span className="brand-subtitle">Planning &amp; Decoration</span>
            </div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{ position: 'static', color: 'var(--color-text-primary)', background: 'var(--color-bg-subtle)' }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="drawer-links">
            <a href="#about" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>About Excel Events</a>
            <a href="#services" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Our Services</a>
            <a href="#gallery" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Hall &amp; Decor Gallery</a>
            <a href="#reviews" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Google Reviews (4.4★)</a>
            <a href="#location" className="drawer-link" onClick={() => setMobileMenuOpen(false)}>Location &amp; Access</a>
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
            <div className="flex items-center gap-2 mb-3 text-sm text-stone-600">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>8A Billings Way, Oregun, Ikeja, Lagos</span>
            </div>
            <a
              href={getWhatsAppUrl(CONFIG.whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <main>
        {/* 3. HERO SECTION */}
        <section className="hero-section" id="home">
          <div className="hero-bg-container">
            <img
              src="images/hero-hall.jpg"
              alt="Excel Events grand banquet hall setup with gold centerpieces and draped ceiling"
              className="hero-bg-image"
              fetchpriority="high"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="container hero-content">
            <div className="hero-pill">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Planning &amp; Decoration · Oregun, Ikeja</span>
            </div>

            <h1 className="hero-headline">
              Beautifully Planned.<br />
              <em>Unforgettable by Design.</em>
            </h1>

            <p className="hero-subhead">
              {CONFIG.business.subheadline}
            </p>

            <div className="hero-actions">
              <a
                href={getWhatsAppUrl(CONFIG.whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Plan Your Event</span>
              </a>

              <a href="#gallery" className="btn btn-outline-white">
                <span>Explore Our Gallery</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-value flex items-center gap-1">
                  4.4 <Star className="w-4 h-4 fill-amber-300 text-amber-300 inline" />
                </span>
                <span className="hero-stat-label">Google Rating (315 Reviews)</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">500 – 600</span>
                <span className="hero-stat-label">Hall Guest Capacity</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">Ikeja, Lagos</span>
                <span className="hero-stat-label">8A Billings Way, Oregun</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GOOGLE TRUST & CREDIBILITY BAR */}
        <section className="trust-section" id="rating">
          <div className="container">
            <div className="trust-card">
              <div className="trust-rating-block">
                <div className="rating-badge-large">
                  <span>{CONFIG.business.googleRating}</span>
                  <span className="rating-scale">/5</span>
                </div>
                <div className="rating-details">
                  <div className="stars-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(CONFIG.business.googleRating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-amber-400 opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="rating-meta">Verified Google Business Rating</span>
                  <span className="rating-count">Based on {CONFIG.business.reviewCount} verified reviews on Google Maps</span>
                </div>
              </div>

              <div className="trust-highlights">
                <span className="trust-badge-pill">
                  <Users className="w-4 h-4 text-amber-600 shrink-0" />
                  500–600 Guest Hall Capacity
                </span>
                <span className="trust-badge-pill">
                  <Wind className="w-4 h-4 text-amber-600 shrink-0" />
                  Climate Control &amp; Powerful ACs
                </span>
                <span className="trust-badge-pill">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  Dedicated Parking &amp; Security
                </span>
                <a
                  href={CONFIG.business.mapsListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                >
                  <span>View Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ABOUT SECTION */}
        <section className="about-section" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-visuals">
                <img
                  src="images/marquee-ceiling.jpg"
                  alt="Excel Events grand marquee ceiling with white draped fabric, fairy lights, and chandelier"
                  className="about-img-main"
                  loading="lazy"
                />
                <img
                  src="images/wedding-aisle.jpg"
                  alt="Aisle tunnel archway decorated with white blossoms leading to ceremony stage"
                  className="about-img-overlap"
                  loading="lazy"
                />
              </div>

              <div className="about-content">
                <span className="eyebrow">About Excel Events</span>
                <h2 className="section-title">Thoughtful Planning. Beautiful Presentation.</h2>
                <p className="about-lead">
                  Every memorable event begins with a vision. Excel Events brings thoughtful planning and beautiful presentation together to help turn special occasions into meaningful experiences.
                </p>
                <p className="about-body">
                  Located at 8A Billings Way in Oregun, Ikeja, Excel Events provides a versatile, spacious venue capable of accommodating 500 to 600 guests. From custom ceiling fabric draping and ambient chandeliers to aisle arch installations and floral centerpieces, every celebration is styled with dedicated craftsmanship and attentive execution.
                </p>

                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon-box">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="feature-title">Tailored Event Ambience</h3>
                      <p className="feature-desc">
                        Custom color themes, flowing canopy drapes, and intelligent lighting that create a welcoming, celebratory mood.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon-box">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="feature-title">Seamless Floor Coordination</h3>
                      <p className="feature-desc">
                        Intelligent banquet table spacing, clear stage sightlines, and smooth movement for hosts and guests alike.
                      </p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon-box">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="feature-title">Comfort &amp; Dedicated Security</h3>
                      <p className="feature-desc">
                        Effective air conditioning, clean dedicated facilities, changing rooms, and guarded on-site parking.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={getWhatsAppUrl(CONFIG.whatsapp.defaultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <span>Enquire With Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SERVICES SECTION */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="services-header">
              <span className="eyebrow">Our Core Offerings</span>
              <h2 className="section-title">Planning &amp; Decoration Services</h2>
              <div className="gold-ornament">
                <span></span>
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span></span>
              </div>
              <p className="section-desc">
                Focused expertise grounded in verified capabilities. Every gathering receives personal attention, coordinated styling, and reliable management.
              </p>
            </div>

            <div className="services-grid">
              {/* Service 1: Event Planning */}
              <article className="service-card">
                <div className="service-img-wrapper">
                  <img src="images/hero-hall.jpg" alt="Banquet hall layout prepared for event guests" className="service-img" loading="lazy" />
                  <span className="service-tag">Planning</span>
                </div>
                <div className="service-content">
                  <h3 className="service-heading">Event Planning &amp; Coordination</h3>
                  <p className="service-description">
                    Thoughtful event layout and timeline coordination to ensure your wedding, celebration, conference, or banquet runs smoothly and stress-free from arrival to departure.
                  </p>
                  <a
                    href={getWhatsAppUrl(CONFIG.whatsapp.planningMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-action"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* Service 2: Event Decoration */}
              <article className="service-card">
                <div className="service-img-wrapper">
                  <img src="images/banquet-lighting.jpg" alt="Banquet tablescape with floral arrangements and mood lighting" className="service-img" loading="lazy" />
                  <span className="service-tag">Decoration</span>
                </div>
                <div className="service-content">
                  <h3 className="service-heading">Event Decoration &amp; Styling</h3>
                  <p className="service-description">
                    Bespoke event decor including tailored tablescapes, floral centerpieces, charger plates, color-coordinated linens, and ambient lighting designed to elevate your celebration.
                  </p>
                  <a
                    href={getWhatsAppUrl(CONFIG.whatsapp.decorationMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-action"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* Service 3: Hall Transformation */}
              <article className="service-card">
                <div className="service-img-wrapper">
                  <img src="images/wedding-aisle.jpg" alt="Tunnel arches with floral arrangements leading to ceremonial stage" className="service-img" loading="lazy" />
                  <span className="service-tag">Venue Styling</span>
                </div>
                <div className="service-content">
                  <h3 className="service-heading">Hall Transformation &amp; Stage Design</h3>
                  <p className="service-description">
                    Complete venue dressing featuring lavish overhead canopy draping, fairy lights, custom ceremonial aisle archways, backdrop staging, and intelligent spotlight production.
                  </p>
                  <a
                    href={getWhatsAppUrl(CONFIG.whatsapp.hallStylingMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-action"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 7. PORTFOLIO & GALLERY SECTION */}
        <section className="gallery-section" id="gallery">
          <div className="container">
            <div className="gallery-header">
              <span className="eyebrow">Real Event Photography</span>
              <h2 className="section-title">Moments Worth Remembering</h2>
              <div className="gold-ornament">
                <span></span>
                <Camera className="w-4 h-4 text-amber-600" />
                <span></span>
              </div>
              <p className="section-desc">
                Explore a selection of event details and decorations from Excel Events. Click any photograph to view high-resolution details in the interactive lightbox.
              </p>
            </div>

            <div className="gallery-grid" id="galleryGrid">
              {CONFIG.gallery.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-card ${item.featured ? 'featured-card' : ''}`}
                  onClick={() => openGalleryItem(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title} in full screen`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') openGalleryItem(index);
                  }}
                >
                  <img src={item.image} alt={item.alt} className="gallery-img" loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="gallery-badge">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                  </div>
                  <div className="gallery-zoom-icon">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. VERIFIED GOOGLE REVIEWS SECTION (ALL 6 REVIEWS INTEGRATED) */}
        <section className="reviews-section" id="reviews">
          <div className="container">
            <div className="reviews-header">
              <span className="eyebrow">Client Feedback</span>
              <h2 className="section-title">Verified Google Reviews</h2>
              <div className="gold-ornament">
                <span></span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span></span>
              </div>
              <p className="section-desc">
                Authentic experiences from event planners, wedding attendees, and hosts. Each review includes direct verification on Google Maps along with photographic records of the hall.
              </p>
            </div>

            <div className="reviews-grid" id="reviewsGrid">
              {CONFIG.reviews.map((rev) => (
                <article key={rev.id} className="review-card">
                  <div>
                    <div className="review-top">
                      <div className="reviewer-meta">
                        <div className="reviewer-avatar">{rev.author.charAt(0)}</div>
                        <div className="reviewer-info">
                          <h4 className="reviewer-name">{rev.author}</h4>
                          <div className="reviewer-badge">
                            <span className="text-blue-500 font-bold">G</span>
                            <span>{rev.badge}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="review-stars-row">
                      <div className="stars-row">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="review-date">{rev.date}</span>
                    </div>

                    <p className="review-quote">"{rev.comment}"</p>

                    {rev.highlights && (
                      <div className="review-highlights-chips">
                        {rev.highlights.map((h, i) => (
                          <span key={i} className="review-chip">{h}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="review-card-actions">
                    <a
                      href={rev.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-map-link"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      className="review-proof-btn"
                      onClick={() => openProofModal(rev)}
                      aria-label={`View verified proof screenshot for ${rev.author}`}
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Proof Screenshot</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <a
                href={CONFIG.business.mapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ gap: '0.75rem' }}
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Read All {CONFIG.business.reviewCount} Reviews on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 9. INTERACTIVE WHATSAPP ENQUIRY BUILDER */}
        <section className="enquiry-section" id="enquiry">
          <div className="container">
            <div className="enquiry-card-wrapper">
              <div className="enquiry-grid">
                <div className="enquiry-intro">
                  <span className="eyebrow" style={{ color: '#E2CA9E' }}>Start Your Conversation</span>
                  <h2 className="enquiry-headline">Let's Bring Your Vision to Life.</h2>
                  <p className="enquiry-subtext">
                    Tell us about the event you're planning, and let's start a conversation about your ideas. We will help you select the ideal decoration concept, hall layout, and timing.
                  </p>

                  <div className="enquiry-contact-bullets">
                    <div className="enquiry-bullet">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Direct consultation with Excel Events planners</span>
                    </div>
                    <div className="enquiry-bullet">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Prompt responses directly via WhatsApp</span>
                    </div>
                    <div className="enquiry-bullet">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Venue capacity suitable for up to 500–600 guests</span>
                    </div>
                  </div>
                </div>

                {/* Form Message Generator */}
                <div className="enquiry-form-card">
                  <div>
                    <label className="form-group-title flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      1. Select Your Event Type
                    </label>
                    <div className="pills-container">
                      {[
                        'Wedding Ceremony & Reception',
                        'Milestone Birthday Celebration',
                        'Corporate Conference or Banquet',
                        'Hall Decoration & Styling Only',
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`choice-pill ${selectedEvent === item ? 'active' : ''}`}
                          onClick={() => setSelectedEvent(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-group-title flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      2. Estimated Guest Capacity
                    </label>
                    <div className="pills-container">
                      {[
                        'Under 150 Guests',
                        '150 – 300 Guests',
                        '300 – 500 Guests',
                        '500 – 600 Guests (Full Hall)',
                      ].map((guests) => (
                        <button
                          key={guests}
                          type="button"
                          className={`choice-pill ${selectedGuests === guests ? 'active' : ''}`}
                          onClick={() => setSelectedGuests(guests)}
                        >
                          {guests}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="message-preview-box">
                    <div className="message-preview-label">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-amber-400" />
                        Pre-filled WhatsApp Message
                      </span>
                      <span>Auto-updated</span>
                    </div>
                    <p className="message-preview-text" id="enquiryPreviewText">
                      {dynamicEnquiryMessage}
                    </p>
                  </div>

                  <a
                    href={dynamicWhatsAppUrl}
                    id="enquirySubmitBtn"
                    className="btn btn-whatsapp"
                    style={{ width: '100%', padding: '0.95rem', fontSize: '0.95rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Chat With Us on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. LOCATION & CONTACT SECTION */}
        <section className="location-section" id="location">
          <div className="container">
            <div className="location-grid">
              <div className="location-details">
                <span className="eyebrow">Venue &amp; Location</span>
                <h2 className="section-title">Visit Our Location in Ikeja</h2>
                <div className="gold-ornament" style={{ margin: '0.5rem 0 1.5rem', justifyContent: 'flex-start' }}>
                  <span style={{ margin: 0, width: '3rem' }}></span>
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span style={{ margin: 0, width: '3rem' }}></span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  Conveniently situated in Oregun, Ikeja with easy road connectivity and ample parking space for private vehicles and chartered shuttles.
                </p>

                <div className="info-cards-stack">
                  <div className="info-card">
                    <div className="info-icon-box">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="info-title">Physical Address</h4>
                      <p className="info-value">{CONFIG.business.address}</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon-box">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="info-title">Key Landmark</h4>
                      <p className="info-value">{CONFIG.business.landmark}</p>
                    </div>
                  </div>

                  <div className="info-card">
                    <div className="info-icon-box">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="info-title">Direct Phone &amp; WhatsApp</h4>
                      <p className="info-value">{CONFIG.business.phoneDisplay} / {CONFIG.business.phoneIntl}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={CONFIG.business.mapsListingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stylized Map Frame */}
              <div className="location-map-card">
                <iframe
                  className="location-map-frame"
                  title="Excel Events Location on Google Maps"
                  src="https://maps.google.com/maps?q=8A%20Billings%20Way,%20Oregun,%20Ikeja,%20Lagos,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-brand-title">EXCEL EVENTS</span>
              <span className="footer-brand-subtitle">Planning and Decoration</span>
              <p className="footer-bio">
                Thoughtfully planned events and beautiful decorations, designed to make your special moments feel extraordinary in Ikeja, Lagos.
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Navigation</h4>
              <nav className="footer-nav">
                <a href="#about" className="footer-link">About Excel Events</a>
                <a href="#services" className="footer-link">Planning &amp; Decor</a>
                <a href="#gallery" className="footer-link">Hall Gallery</a>
                <a href="#reviews" className="footer-link">Google Reviews (4.4★)</a>
                <a href="#location" className="footer-link">Location &amp; Access</a>
              </nav>
            </div>

            <div>
              <h4 className="footer-heading">Contact &amp; Enquiry</h4>
              <div className="footer-contact-info">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  {CONFIG.business.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  Direct: {CONFIG.business.phoneDisplay}
                </p>
                <a
                  href={getWhatsAppUrl(CONFIG.whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ marginTop: '0.5rem' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Excel Events (Planning and Decoration). All rights reserved.</p>
            <p>Preview concept crafted with attention to detail by <strong>{CONFIG.business.conceptCreator}</strong>.</p>
          </div>
        </div>
      </footer>

      {/* 12. FLOATING WHATSAPP BUTTON */}
      <div className="floating-whatsapp" aria-label="WhatsApp quick enquiry button">
        <span className="floating-tooltip">Chat with Excel Events</span>
        <a
          href={getWhatsAppUrl(CONFIG.whatsapp.defaultMessage)}
          className="whatsapp-pulse-btn"
          aria-label="Open WhatsApp conversation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whatsapp-pulse-ring"></div>
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>

      {/* 13. GALLERY LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="modal-backdrop open" role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              className="modal-nav-btn modal-prev-btn"
              onClick={() =>
                setLightboxIndex((prev) => (prev - 1 + CONFIG.gallery.length) % CONFIG.gallery.length)
              }
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={CONFIG.gallery[lightboxIndex].image}
              alt={CONFIG.gallery[lightboxIndex].alt}
              className="modal-image"
            />

            <div className="modal-caption">
              <strong>{CONFIG.gallery[lightboxIndex].title}</strong> — {CONFIG.gallery[lightboxIndex].description}
            </div>

            <button
              type="button"
              className="modal-nav-btn modal-next-btn"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % CONFIG.gallery.length)}
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* 14. PROOF SCREENSHOT MODAL */}
      {proofModalOpen && activeProof && (
        <div className="modal-backdrop open" role="dialog" aria-modal="true" onClick={() => setProofModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setProofModalOpen(false)}
              aria-label="Close proof preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeProof.screenshotUrl}
              alt={`Verified Google Review Proof for ${activeProof.author}`}
              className="modal-image"
            />

            <div className="modal-caption">
              <strong>Verified Google Maps Review Proof:</strong> {activeProof.author} ({activeProof.rating}★ · {activeProof.date})
              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={activeProof.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-map-link"
                  style={{ color: '#E2CA9E', textDecoration: 'underline' }}
                >
                  Open live review on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
