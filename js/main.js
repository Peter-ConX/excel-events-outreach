/**
 * Excel Events — Interactive Frontend Logic
 * Handles lightbox, mobile menu, dynamic WhatsApp generator, and verified review inspection.
 */

import { CONFIG, getWhatsAppUrl } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppLinks();
  initMobileNavigation();
  initReviewsSection();
  initGalleryLightbox();
  initEnquiryBuilder();
  initDynamicYear();
});

/**
 * Populates all WhatsApp CTA buttons across the page with pre-encoded WhatsApp URLs
 */
function initWhatsAppLinks() {
  const defaultUrl = getWhatsAppUrl(CONFIG.whatsapp.defaultMessage);

  // Update all elements with data-whatsapp-cta
  document.querySelectorAll('[data-whatsapp-cta]').forEach((el) => {
    const ctaType = el.getAttribute('data-whatsapp-cta');
    let message = CONFIG.whatsapp.defaultMessage;

    if (ctaType === 'planning') {
      message = CONFIG.whatsapp.planningMessage;
    } else if (ctaType === 'decoration') {
      message = CONFIG.whatsapp.decorationMessage;
    } else if (ctaType === 'hall') {
      message = CONFIG.whatsapp.hallStylingMessage;
    }

    el.setAttribute('href', getWhatsAppUrl(message));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Floating WhatsApp button
  const floatingBtn = document.getElementById('floatingWhatsappBtn');
  if (floatingBtn) {
    floatingBtn.setAttribute('href', defaultUrl);
  }
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = drawer ? drawer.querySelector('.drawer-backdrop') : null;
  const drawerLinks = drawer ? drawer.querySelectorAll('.drawer-link') : [];

  function openMenu() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Render Verified Google Reviews and handle Proof inspection modal
 */
function initReviewsSection() {
  const reviewsContainer = document.getElementById('reviewsGrid');
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = '';

  CONFIG.reviews.forEach((review) => {
    const card = document.createElement('article');
    card.className = 'review-card';

    // Stars HTML
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
        starsHtml += `<svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
      } else {
        starsHtml += `<svg width="15" height="15" fill="#D3CBC0" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
      }
    }

    // Highlights chips
    const chipsHtml = review.highlights
      ? review.highlights.map((h) => `<span class="review-chip">${h}</span>`).join('')
      : '';

    const firstLetter = review.author.charAt(0);

    card.innerHTML = `
      <div class="review-top">
        <div class="reviewer-meta">
          <div class="reviewer-avatar">${firstLetter}</div>
          <div class="reviewer-info">
            <h4 class="reviewer-name">${review.author}</h4>
            <div class="reviewer-badge">
              <svg class="google-logo-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>${review.badge}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="review-stars-row">
        <div class="stars-row">${starsHtml}</div>
        <span class="review-date">${review.date}</span>
      </div>
      <p class="review-quote">"${review.comment}"</p>
      ${chipsHtml ? `<div class="review-highlights-chips">${chipsHtml}</div>` : ''}
      <div class="review-card-actions">
        <a href="${review.mapsUrl}" target="_blank" rel="noopener noreferrer" class="review-map-link">
          <span>View on Google Maps</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
        </a>
        <button type="button" class="review-proof-btn" data-screenshot="${review.screenshotUrl}" data-author="${review.author}">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          <span>Proof Screenshot</span>
        </button>
      </div>
    `;

    reviewsContainer.appendChild(card);
  });

  // Attach Proof Modal click handlers
  document.querySelectorAll('.review-proof-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const screenshot = btn.getAttribute('data-screenshot');
      const author = btn.getAttribute('data-author');
      openModal(screenshot, `Verified Google Maps Review & Venue Photos — ${author}`);
    });
  });
}

/**
 * Gallery Lightbox and Keyboard Navigation
 */
let currentGalleryIndex = 0;

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-card');

  galleryItems.forEach((card, index) => {
    card.addEventListener('click', () => {
      currentGalleryIndex = index;
      const img = card.querySelector('img');
      const title = card.querySelector('.gallery-title')?.textContent || '';
      openGalleryModal(index);
    });
  });

  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const prevBtn = modal.querySelector('.modal-prev-btn');
  const nextBtn = modal.querySelector('.modal-next-btn');
  const backdrop = modal.querySelector('.modal-backdrop');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateGallery(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateGallery(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateGallery(-1);
    if (e.key === 'ArrowRight') navigateGallery(1);
  });
}

function openGalleryModal(index) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const item = CONFIG.gallery[index];
  if (!item) return;

  const modalImg = modal.querySelector('.modal-image');
  const modalCaption = modal.querySelector('.modal-caption');

  if (modalImg) {
    modalImg.src = item.image;
    modalImg.alt = item.alt;
  }

  if (modalCaption) {
    modalCaption.innerHTML = `<strong>${item.title}</strong> — ${item.description}`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function navigateGallery(direction) {
  currentGalleryIndex = (currentGalleryIndex + direction + CONFIG.gallery.length) % CONFIG.gallery.length;
  openGalleryModal(currentGalleryIndex);
}

function openModal(imageSrc, captionText) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-image');
  const modalCaption = modal.querySelector('.modal-caption');

  if (modalImg) {
    modalImg.src = imageSrc;
    modalImg.alt = captionText;
  }

  if (modalCaption) {
    modalCaption.textContent = captionText;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Interactive WhatsApp Message Builder
 * Allows prospective clients to customize event type, guest count, and instantly chat
 */
function initEnquiryBuilder() {
  let selectedEvent = "Wedding Ceremony & Reception";
  let selectedGuests = "300 – 500 Guests";

  const eventPills = document.querySelectorAll('[data-event-choice]');
  const guestPills = document.querySelectorAll('[data-guest-choice]');
  const previewText = document.getElementById('enquiryPreviewText');
  const submitBtn = document.getElementById('enquirySubmitBtn');

  function updatePreview() {
    const formatted = `Hello Excel Events! I came across your website and would love to enquire about your event planning and decoration services for a ${selectedEvent} (${selectedGuests}) in Lagos. Could we discuss availability and next steps? Thank you!`;
    if (previewText) {
      previewText.textContent = formatted;
    }
    if (submitBtn) {
      submitBtn.setAttribute('href', getWhatsAppUrl(formatted));
    }
  }

  eventPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      eventPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedEvent = pill.getAttribute('data-event-choice');
      updatePreview();
    });
  });

  guestPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      guestPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedGuests = pill.getAttribute('data-guest-choice');
      updatePreview();
    });
  });

  updatePreview();
}

/**
 * Dynamic Current Year in Footer
 */
function initDynamicYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
