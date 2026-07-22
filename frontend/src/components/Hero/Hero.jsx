import "./Hero.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPlay,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCompass,
  FaInfoCircle
} from "react-icons/fa";

// Monument & Destination background images of India
import tajMahalImg from "../../assets/hotels/oberoi-amarvilas.jpg";
import jaipurImg from "../../assets/destinations/jaipur.jpg";
import varanasiImg from "../../assets/destinations/varanasi.jpg";
import udaipurImg from "../../assets/hotels/taj-lake-palace.jpg";
import ladakhImg from "../../assets/destinations/ladakh.jpg";
import rambaghImg from "../../assets/hotels/rambagh-palace.jpg";

// Card images
import kashmirCard from "../../assets/destinations/kashmir.jpg";
import keralaCard from "../../assets/destinations/kerala.jpg";
import meghalayaCard from "../../assets/destinations/meghalaya.jpg";

function Hero() {
  const monumentSlides = [
    {
      id: 1,
      name: "Taj Mahal, Agra",
      image: tajMahalImg,
      subtitle: "Wonder of the World & Icon of Love"
    },
    {
      id: 2,
      name: "Hawa Mahal, Jaipur",
      image: jaipurImg,
      subtitle: "Palace of Winds & Royal Heritage"
    },
    {
      id: 3,
      name: "Holy Ghats, Varanasi",
      image: varanasiImg,
      subtitle: "Spiritual Heart of Ancient India"
    },
    {
      id: 4,
      name: "Taj Lake Palace, Udaipur",
      image: udaipurImg,
      subtitle: "Floating Heritage Palace on Lake Pichola"
    },
    {
      id: 5,
      name: "Hemis Monastery, Ladakh",
      image: ladakhImg,
      subtitle: "Ancient Himalayan Buddhist Sanctuary"
    },
    {
      id: 6,
      name: "Rambagh Palace, Jaipur",
      image: rambaghImg,
      subtitle: "Jewel of Rajasthan Royal History"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prevIndex) => (prevIndex + 1) % monumentSlides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [monumentSlides.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? monumentSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % monumentSlides.length);
  };

  const cardsData = [
    {
      id: 1,
      title: "Kashmir Paradise",
      desc: "Snow peaks, Dal Lake houseboats & breathtaking valleys of paradise.",
      image: kashmirCard,
      price: "₹14,999",
      rating: "4.9 ★",
      badge: "🔥 Top Rated",
      link: "/packages/1"
    },
    {
      id: 2,
      title: "Kerala Backwaters",
      desc: "Tranquil lagoons, tropical greenery & luxury houseboat cruises.",
      image: keralaCard,
      price: "₹18,500",
      rating: "4.8 ★",
      badge: "🌿 Nature Escape",
      link: "/packages/4"
    },
    {
      id: 3,
      title: "Meghalaya Wonders",
      desc: "Living root bridges, crystal clear rivers & misty hills.",
      image: meghalayaCard,
      price: "₹16,200",
      rating: "4.9 ★",
      badge: "🌊 Best Seller",
      link: "/packages/2"
    }
  ];

  return (
    <section className="hero-aurora-section">
      {/* Ambient Glowing Particle Orbs */}
      <div className="glowing-orb-particle orb-left"></div>
      <div className="glowing-orb-particle orb-right"></div>

      {/* Background Monument Slideshow Layers */}
      <div className="monument-slideshow-container">
        {monumentSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`monument-slide ${idx === activeSlide ? "slide-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Brush Stroke Mask Texture from Image 1 */}
      <div className="brush-stroke-overlay"></div>

      {/* Dark Gradient Mask Overlay & Aurora Mesh (Image 2 Color Palette) */}
      <div className="aurora-bg"></div>
      <div className="hero-mesh-overlay"></div>

      {/* Circular Carousel Slider Navigation Buttons (Image 1 Feature) */}
      <button className="carousel-nav-btn prev-btn" onClick={handlePrevSlide} aria-label="Previous Slide">
        <FaChevronLeft />
      </button>
      <button className="carousel-nav-btn next-btn" onClick={handleNextSlide} aria-label="Next Slide">
        <FaChevronRight />
      </button>

      {/* Main Container */}
      <div className="hero-container">
        
        {/* Left Side: Social Media Icons Stacked Vertically */}
        <div className="social-sidebar">
          <div className="social-line"></div>
          <a href="#twitter" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
          <a href="#facebook" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
          <a href="#instagram" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
          <a href="#youtube" aria-label="YouTube" className="social-icon"><FaYoutube /></a>
          <div className="social-line"></div>
        </div>

        {/* Hero Left Content Area */}
        <div className="hero-main-content">
          
          {/* Sub-tag Badge from Image 1: BEST TRAVEL AGENCY */}
          <div className="agency-subtag-badge">
            <FaCompass className="tag-compass-icon" />
            <span>INDIA'S #1 TRAVEL AGENCY</span>
          </div>

          <div className="hero-typography-block">
            {/* Vertical Accent Line */}
            <div className="vertical-accent-line"></div>
            
            <div className="title-stack">
              <h1 className="title-solid">EXPLORE</h1>
              <h1 className="title-solid">DREAM</h1>
              <h1 className="title-outlined">DESTINATION</h1>
            </div>
          </div>

          <p className="hero-description">
            Discover handpicked dream destinations, luxury stays, and unforgettable cultural adventures across India. Experience the journey of a lifetime with our AI-powered travel portal.
          </p>

          {/* Dual Action Buttons from Image 1: Discover + Know More */}
          <div className="hero-action-row">
            <Link to="/packages" className="book-now-btn">
              <span>DISCOVER</span>
              <span className="play-icon-circle">
                <FaPlay className="play-icon" />
              </span>
            </Link>

            <Link to="/hotels" className="know-more-btn">
              <FaInfoCircle className="btn-info-icon" />
              <span>Know More</span>
            </Link>

            {/* Geometric Arrow Pattern Accents (< < < < <) */}
            <div className="arrow-accents left-arrows">
              <span>◄</span>
              <span>◄</span>
              <span>◄</span>
              <span>◄</span>
              <span>◄</span>
            </div>
          </div>

          {/* Monument Slideshow Badge & Dots */}
          <div className="monument-caption-badge">
            <div className="monument-badge-content">
              <FaMapMarkerAlt className="badge-pin-icon" />
              <div>
                <span className="badge-location-name">{monumentSlides[activeSlide].name}</span>
                <span className="badge-subtitle">{monumentSlides[activeSlide].subtitle}</span>
              </div>
            </div>
            
            <div className="slideshow-indicators">
              {monumentSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-indicator ${idx === activeSlide ? "dot-active" : ""}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Right Content Area: Floating Cards Grid */}
        <div className="hero-cards-section">
          {/* Decorative Arrow Pattern Accents Top Right */}
          <div className="arrow-accents right-top-arrows">
            <span>◄</span>
            <span>◄</span>
            <span>◄</span>
            <span>◄</span>
            <span>◄</span>
          </div>

          <div className="hero-cards-grid">
            {cardsData.map((card) => (
              <div className="floating-dest-card shimmer-card" key={card.id}>
                <div className="card-image-wrap">
                  <img src={card.image} alt={card.title} />
                  <span className="card-pill-tag">{card.badge}</span>
                  <span className="card-price-overlay">{card.price}</span>
                </div>
                <div className="card-body">
                  <div className="card-header-row">
                    <h3>{card.title}</h3>
                    <span className="rating-tag">{card.rating}</span>
                  </div>
                  <p>{card.desc}</p>
                  <Link to={card.link} className="read-more-btn">
                    <span>READ MORE</span>
                    <span className="btn-arrow">►</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Ambient Dots Accent from Image 1 */}
      <div className="dot-grid-accent"></div>
    </section>
  );
}

export default Hero;


