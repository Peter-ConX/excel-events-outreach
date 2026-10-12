/**
 * Excel Events — Centralized Configuration
 * Verified business information, contact details, review links, and photography data.
 */

export const CONFIG = {
  // Business Information
  business: {
    name: "Excel Events",
    descriptor: "Planning and Decoration",
    tagline: "Beautifully Planned. Unforgettable by Design.",
    subheadline: "Thoughtfully planned events and beautiful decorations, designed to make your special moments feel extraordinary.",
    address: "8A Billings Way, Oregun, Ikeja, Lagos, Nigeria",
    landmark: "Beside Christ Embassy Church, Oregun, Ikeja",
    phoneDisplay: "0803 723 1491",
    phoneIntl: "+234 803 723 1491",
    whatsappNumber: "2348037231491", // Formatted without '+' or spaces for wa.me
    googleRating: 4.4,
    reviewCount: 315,
    hallCapacity: "500 – 600 Guests",
    mapsListingUrl: "https://maps.app.goo.gl/GmnUAxc2iLeCuwrK9",
    conceptCreator: "Asqek",
  },

  // WhatsApp Message Defaults
  whatsapp: {
    defaultMessage:
      "Hello Excel Events! I came across your website and would love to enquire about your event planning and decoration services. I'd like to share my ideas and learn more about how you can help. Please let me know how we can proceed. Thank you.",
    planningMessage:
      "Hello Excel Events! I would like to enquire about your Event Planning services for an upcoming event in Lagos. Could we discuss availability and planning details?",
    decorationMessage:
      "Hello Excel Events! I would like to enquire about your Event Decoration & Styling services. I love your hall setups and would like to consult on decor for my event.",
    hallStylingMessage:
      "Hello Excel Events! I'm interested in having my event decorated and hosted at your venue space at 8A Billings Way, Oregun. Please share more details on booking and decor setup.",
  },

  // Verified Google Reviews
  reviews: [
    {
      id: "deev-impressions",
      author: "Deev Impressions Events Services",
      badge: "Local Guide · 96 reviews",
      rating: 5,
      date: "1 year ago",
      comment:
        "Excel Event Centre is based beside Chris Embassy Church. Deev Impressions Events Services decorated the hall around January 25th, 2025. The venue has a capacity of 500/600, the personnels are friendly. Enough parking space. A room served as the changing room, cleans toilets and perfect security scrutiny at the entrance.",
      highlights: ["Hall Capacity: 500/600", "Friendly Personnel", "Spacious Parking", "Changing Room & Clean Facilities"],
      mapsUrl: "https://maps.app.goo.gl/GmnUAxc2iLeCuwrK9",
      screenshotUrl: "images/review-deev-impressions.jpg",
      originalFilename: "review2.jpg",
    },
    {
      id: "jhide-richardson",
      author: "Jhide Richardson",
      badge: "Local Guide · 96 reviews",
      rating: 5,
      date: "1 year ago",
      comment:
        "Excel Event Center is a perfect place to host your wedding ceremony, conference or birthday party if you are not a person of crowd. The place is concise, on point and affordable too.",
      highlights: ["Perfect for Weddings", "Conferences & Birthdays", "Concise & On Point", "Affordable Venue"],
      mapsUrl: "https://maps.app.goo.gl/ygpbt3qiC4trmbGbA",
      screenshotUrl: "images/review-jhide-adebola.jpg",
      originalFilename: "review5.jpg",
    },
    {
      id: "ifeoma-adeyinka",
      author: "Ifeoma Adeyinka (IfyCynthetic)",
      badge: "Local Guide · 296 reviews",
      rating: 5,
      date: "5 years ago",
      comment:
        "This is nice place to have any event. I've attended a few here myself. The ACs were on point and the venue was clean. I like that the security team were very helpful with parking and did not leave people to park at will. I enjoy myself here whenever I visit.",
      highlights: ["Effective Air Conditioning", "Clean Venue", "Dedicated Parking Security", "Pleasant Experience"],
      mapsUrl: "https://maps.app.goo.gl/wRqBMYBAkPGhyUeaA",
      screenshotUrl: "images/review-ifeoma.jpg",
      originalFilename: "review4.jpg",
    },
    {
      id: "adebola-adejugba",
      author: "Adebola Adejugba",
      badge: "Local Guide · 37 reviews",
      rating: 5,
      date: "6 years ago",
      comment:
        "Loved the location of the Hall. There was no traffic at that area at all. The hall was lovely and well decorated. Went for a friend's wedding.",
      highlights: ["Great Central Location", "Easy Traffic Access", "Lovely & Well Decorated", "Wedding Atmosphere"],
      mapsUrl: "https://maps.app.goo.gl/sSdaZZSiYyPSGhSL6",
      screenshotUrl: "images/review-jhide-adebola.jpg",
      originalFilename: "review5.jpg",
    },
    {
      id: "angela",
      author: "Angela",
      badge: "Local Guide · 135 reviews",
      rating: 4,
      date: "4 years ago",
      comment:
        "This place is a beautiful place to hold an event. There is parking space and the hall is cool. It's spacious so, it can fit for different kind of event you might be holding. It's a very beautiful place and different beautiful background are available for great pictures. Have fun! 🥰🥰",
      highlights: ["Spacious Hall", "Cool Climate Control", "Great Photo Backgrounds", "Versatile Event Setup"],
      mapsUrl: "https://maps.app.goo.gl/k7sYCVBZTCpbj9J39",
      screenshotUrl: "images/review-angela.jpg",
      originalFilename: "review1.jpg",
    },
    {
      id: "favour-ini",
      author: "Favour Ini",
      badge: "5 reviews · 3 photos",
      rating: 4,
      date: "8 years ago",
      comment:
        "Very gorgeous place. Can be dressed up amazing for events. An opportunity for people to dress to the nines and enjoy the celebration.",
      highlights: ["Gorgeous Atmosphere", "Dresses Up Amazingly for Events", "Celebration Destination"],
      mapsUrl: "https://maps.app.goo.gl/JKa68xue5zjgaAp17",
      screenshotUrl: "images/review-favour-ini.jpg",
      originalFilename: "review3.jpg",
    },
  ],

  // Real Venue & Event Portfolio Photographs
  gallery: [
    {
      id: "banquet-reception",
      title: "Grand Banquet Dining & Tablescape Styling",
      category: "Decoration",
      description:
        "Luxurious banquet tables dressed in floor-length satin cloths with champagne draped ceiling, gold beaded charger plates, deep navy napkins, and elevated floral centerpieces.",
      image: "images/hero-hall.jpg",
      alt: "Round banquet tables with gold centerpieces and draped ceiling at Excel Events hall",
      featured: true,
    },
    {
      id: "ceremonial-archway",
      title: "Wedding Aisle & Custom Geometric Arch Tunnel",
      category: "Hall Transformation",
      description:
        "Architectural tunnel of metallic gold arches adorned with cascading white floral blossoms leading into the elevated ceremonial stage.",
      image: "images/wedding-aisle.jpg",
      alt: "Curved gold tunnel arches with white floral arrangements on wedding aisle leading to stage",
      featured: true,
    },
    {
      id: "canopy-lighting",
      title: "Draped Marquee Ceiling & Crystal Chandelier Ambiance",
      category: "Decoration",
      description:
        "Opulent white fabric ceiling draping illuminated by fairy-string lights and a central gold-lit crystal chandelier casting warm ambient illumination.",
      image: "images/marquee-ceiling.jpg",
      alt: "Elaborate white draped ceiling with fairy lights and warm chandelier at Excel Events",
      featured: true,
    },
    {
      id: "stage-ambiance",
      title: "Illuminated Stage Production & Dance Floor Runway",
      category: "Planning & Production",
      description:
        "Professional intelligent beam lighting, overhead suspended orange fabric draping, elevated main stage, and spotlighted custom dance floor.",
      image: "images/stage-ambiance.jpg",
      alt: "Atmospheric stage lighting beams and runway dancefloor setup for banquet event",
      featured: true,
    },
    {
      id: "head-table-styling",
      title: "Intimate Banquet Table Arrangement & Floral Centerpieces",
      category: "Decoration",
      description:
        "Refined long banquet table styling featuring vibrant pink and blush floral arrangements, glass stemware, and tapered candlelight against the illuminated stage backdrop.",
      image: "images/banquet-lighting.jpg",
      alt: "Long glass banquet table with floral centerpieces, candles, and stage spotlights",
      featured: false,
    },
    {
      id: "outdoor-fountain-terrace",
      title: "Courtyard Water Feature & Arrival Terrace",
      category: "Venue Feature",
      description:
        "Paved exterior arrival courtyard featuring architectural step terraces, stone water fountain jet features, and lush tree canopy.",
      image: "images/review-ifeoma.jpg",
      alt: "Exterior courtyard with water fountain and guests at Excel Events facility",
      featured: false,
    },
  ],
};

export function getWhatsAppUrl(customMessage) {
  const message = customMessage || CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${CONFIG.business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
