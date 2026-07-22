import "./HotelHero.css";
import { useState, useEffect } from "react";
import { FaHotel, FaMapMarkerAlt, FaStar, FaCrown } from "react-icons/fa";

// Luxury Hotels of India images
import tajLakePalace from "../../assets/hotels/taj-lake-palace.jpg";
import oberoiAmarvilas from "../../assets/hotels/oberoi-amarvilas.jpg";
import rambaghPalace from "../../assets/hotels/rambagh-palace.jpg";
import leelaPalace from "../../assets/hotels/leela-palace.jpg";
import kumarakomResort from "../../assets/hotels/kumarakom-lake-resort.jpg";
import oberoiUdaivilas from "../../assets/hotels/oberoi-udaivilas.jpg";

function HotelHero() {
  const hotelSlides = [
    {
      id: 1,
      name: "Taj Lake Palace",
      location: "Lake Pichola, Udaipur, Rajasthan",
      image: tajLakePalace,
      rating: "4.9 ★",
      badge: "Iconic Floating Heritage Palace"
    },
    {
      id: 2,
      name: "The Oberoi Amarvilas",
      location: "Taj Mahal View, Agra, Uttar Pradesh",
      image: oberoiAmarvilas,
      rating: "5.0 ★",
      badge: "Direct Taj Mahal Views"
    },
    {
      id: 3,
      name: "Rambagh Palace",
      location: "Pink City, Jaipur, Rajasthan",
      image: rambaghPalace,
      rating: "4.9 ★",
      badge: "Jewel of Jaipur Royal Maharaja"
    },
    {
      id: 4,
      name: "The Leela Palace",
      location: "Udaipur, Rajasthan",
      image: leelaPalace,
      rating: "4.8 ★",
      badge: "Royal Palace Luxury Resort"
    },
    {
      id: 5,
      name: "Kumarakom Lake Resort",
      location: "Vembanad Lake, Kerala",
      image: kumarakomResort,
      rating: "4.8 ★",
      badge: "Vedic Heritage Backwater Villas"
    },
    {
      id: 6,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      image: oberoiUdaivilas,
      rating: "5.0 ★",
      badge: "Voted World's #1 Hotel Resort"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % hotelSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [hotelSlides.length]);

  return (
    <section className="hotel-hero-aurora">
      {/* Background Slideshow of Indian Luxury Hotels */}
      <div className="hotel-slideshow-container">
        {hotelSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hotel-slide ${idx === activeSlide ? "slide-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Dark Mesh Overlay & Aurora Glow */}
      <div className="hotel-hero-glow"></div>
      <div className="hotel-mesh-overlay"></div>

      <div className="hotel-hero-content">
        
        <div className="hero-badge">
          <FaCrown className="crown-icon" />
          <span>LUXURY HOTELS & HERITAGE PALACES OF INDIA</span>
        </div>

        <h1 className="hotel-hero-title">
          FIND YOUR PERFECT
          <br />
          <span className="stroke-title">LUXURY STAY</span>
        </h1>

        <p className="hotel-hero-desc">
          Experience royal hospitality in India's most prestigious heritage palaces, 5-star beachfront resorts, and tranquil mountain retreats.
        </p>

        {/* Featured Hotel Location Caption Badge */}
        <div className="featured-hotel-caption">
          <div className="caption-info">
            <FaMapMarkerAlt className="pin-icon" />
            <div>
              <div className="hotel-title-row">
                <span className="hotel-name-text">{hotelSlides[activeSlide].name}</span>
                <span className="hotel-rating-badge">{hotelSlides[activeSlide].rating}</span>
              </div>
              <span className="hotel-loc-sub">{hotelSlides[activeSlide].location}</span>
            </div>
          </div>

          <div className="slide-dots">
            {hotelSlides.map((_, idx) => (
              <button
                key={idx}
                className={`hotel-dot ${idx === activeSlide ? "dot-active" : ""}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Hotel slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HotelHero;