import { useState } from "react";
import "./AIPlannerModal.css";
import {
  FaRobot,
  FaTimes,
  FaMagic,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaCompass,
  FaCheckCircle,
  FaCopy,
  FaArrowRight,
  FaSuitcase
} from "react-icons/fa";

function AIPlannerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [destination, setDestination] = useState("Kashmir");
  const [duration, setDuration] = useState("5 Days");
  const [budget, setBudget] = useState("Comfort");
  const [style, setStyle] = useState("Cultural & Scenic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [copied, setCopied] = useState(false);

  const sampleItineraries = {
    Kashmir: {
      title: "5-Day Kashmir Valley Paradise Itinerary",
      hotel: "The Khyber Himalayan Resort & Spa, Gulmarg",
      estimatedCost: "₹24,500 per person",
      days: [
        {
          day: "Day 1: Srinagar Arrival & Shikara Experience",
          morning: "Arrival at Srinagar Airport (SXR), private transfer to luxury houseboat on Dal Lake.",
          afternoon: "Explore Mughal Gardens: Nishat Bagh & Shalimar Bagh.",
          evening: "Sunset Shikara ride across Dal Lake & traditional Kashmiri Wazwan dinner."
        },
        {
          day: "Day 2: Gulmarg Meadow of Flowers & Gondola Ride",
          morning: "Scenic drive to Gulmarg. Ride Phase 1 & Phase 2 Cable Car Gondola to Apharwat Peak.",
          afternoon: "Pine forest walk and alpine golf course photography.",
          evening: "Return to Gulmarg hotel for bonfire and local kehwa tea."
        },
        {
          day: "Day 3: Pahalgam Valley of Shepherds",
          morning: "Drive to Pahalgam via Saffron fields of Pampore & Avantipur ruins.",
          afternoon: "Pony ride to Baisaran (Mini Switzerland) & Aru Valley exploration.",
          evening: "Lidder River bank relaxation and cottage dining."
        },
        {
          day: "Day 4: Sonamarg Meadow of Gold Glacier Tour",
          morning: "Excursion to Sonamarg, gateway to Ladakh.",
          afternoon: "Trek or pony ride to Thajiwas Glacier.",
          evening: "Return to Srinagar for handicraft shopping (Pashmina & Carpets)."
        },
        {
          day: "Day 5: Departure with Lifetime Memories",
          morning: "Breakfast at hotel, visit Shankaracharya Temple view point.",
          afternoon: "Transfer to Srinagar airport with souvenir bag."
        }
      ]
    },
    Goa: {
      title: "4-Day Sun, Sand & Heritage Goa Escape",
      hotel: "Taj Exotica Resort & Spa, Benaulim",
      estimatedCost: "₹18,900 per person",
      days: [
        {
          day: "Day 1: Arrival & North Goa Beach Sunset",
          morning: "Land at Goa Dabolim/Mopa Airport, check-in to beach resort.",
          afternoon: "Relax at Calangute & Baga beaches.",
          evening: "Sunset beach shacks experience with live music & seafood."
        },
        {
          day: "Day 2: Latin Quarter & Old Goa Heritage",
          morning: "Visit Basilica of Bom Jesus and Se Cathedral in Old Goa.",
          afternoon: "Heritage walking tour through Fontainhas (Latin Quarter).",
          evening: "Mandovi River sunset cruise with Goan folk dance performance."
        },
        {
          day: "Day 3: Water Sports & South Goa Serenity",
          morning: "Parasailing & Jet Skiing at Anjuna or Palolem beach.",
          afternoon: "Visit Spice Plantation with traditional authentic Goan buffet lunch.",
          evening: "Private dinner on Benaulim beach shore."
        },
        {
          day: "Day 4: Departure",
          morning: "Morning yoga by the ocean, souvenir shopping in Panjim market.",
          afternoon: "Airport transfer."
        }
      ]
    },
    Default: {
      title: "Customized Incredible India AI Itinerary",
      hotel: "Luxury Heritage Palace & Resort",
      estimatedCost: "₹21,000 per person",
      days: [
        {
          day: "Day 1: Destination Arrival & Cultural Welcome",
          morning: "Airport pickup & transfer to luxury stay. Traditional welcome drink.",
          afternoon: "City orientation tour and landmark visit.",
          evening: "Cultural performance & authentic local dinner."
        },
        {
          day: "Day 2: Monument & Heritage Exploration",
          morning: "Guided tour of UNESCO world heritage sites & ancient monuments.",
          afternoon: "Local culinary tour and artisanal bazaar shopping.",
          evening: "Sunset viewpoint visit & relaxation."
        },
        {
          day: "Day 3: Nature & Adventure Experience",
          morning: "Scenic valley excursion, boat cruise or nature trek.",
          afternoon: "Spa treatment or private cooking masterclass.",
          evening: "Gala dinner at rooftop palace venue."
        },
        {
          day: "Day 4: Departure",
          morning: "Leisurely breakfast, checkout and souvenir shopping.",
          afternoon: "Airport drop-off."
        }
      ]
    }
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setItinerary(null);

    setTimeout(() => {
      const matched = sampleItineraries[destination] || sampleItineraries.Default;
      setItinerary(matched);
      setIsGenerating(false);
    }, 1200);
  };

  const handleCopy = () => {
    if (!itinerary) return;
    const text = `${itinerary.title}\nHotel: ${itinerary.hotel}\nEstimated: ${itinerary.estimatedCost}\n\n` +
      itinerary.days.map(d => `${d.day}\n- Morning: ${d.morning}\n- Afternoon: ${d.afternoon}\n- Evening: ${d.evening}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Action Button on Bottom-Right of All Landing Pages */}
      <button className="floating-ai-planner-btn" onClick={() => setIsOpen(true)}>
        <div className="btn-ai-glow"></div>
        <FaRobot className="robot-floating-icon" />
        <span className="btn-text">AI Trip Planner</span>
        <span className="ai-sparkle-tag">NEW</span>
      </button>

      {/* Modal Popup Drawer Overlay */}
      {isOpen && (
        <div className="ai-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="ai-modal-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="ai-modal-header">
              <div className="header-title-block">
                <div className="modal-icon-badge">
                  <FaMagic className="magic-icon" />
                </div>
                <div>
                  <h2>BharatYatra <span className="neon-text">AI Planner</span></h2>
                  <p>Smart AI-generated custom itineraries across India</p>
                </div>
              </div>
              <button className="close-modal-btn" onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="ai-modal-body">
              {!itinerary ? (
                <form onSubmit={handleGenerate} className="ai-planner-form">
                  <div className="form-grid">
                    
                    <div className="input-group">
                      <label><FaMapMarkerAlt className="input-icon" /> Destination</label>
                      <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                        <option value="Kashmir">Kashmir Paradise</option>
                        <option value="Goa">Goa Beaches & Heritage</option>
                        <option value="Jaipur">Jaipur Royal Palaces</option>
                        <option value="Kerala">Kerala Backwaters</option>
                        <option value="Ladakh">Ladakh Mountain Pass</option>
                        <option value="Varanasi">Varanasi Ghats</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label><FaCalendarAlt className="input-icon" /> Trip Duration</label>
                      <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                        <option value="3 Days">3 Days / 2 Nights</option>
                        <option value="5 Days">5 Days / 4 Nights</option>
                        <option value="7 Days">7 Days / 6 Nights</option>
                        <option value="10 Days">10 Days / 9 Nights</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label><FaRupeeSign className="input-icon" /> Budget Level</label>
                      <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                        <option value="Budget Saver">Budget Saver (₹10,000 - ₹15,000)</option>
                        <option value="Comfort">Comfort Luxury (₹15,000 - ₹30,000)</option>
                        <option value="Ultra Premium">Ultra Royal (₹30,000+)</option>
                      </select>
                    </div>

                    <div className="input-group">
                      <label><FaCompass className="input-icon" /> Travel Vibe</label>
                      <select value={style} onChange={(e) => setStyle(e.target.value)}>
                        <option value="Cultural & Scenic">Cultural & Heritage</option>
                        <option value="Adventure">Adventure & Trekking</option>
                        <option value="Relaxation">Beach & Relaxation</option>
                        <option value="Honeymoon">Honeymoon & Romantic</option>
                      </select>
                    </div>

                  </div>

                  <button type="submit" className="generate-ai-btn" disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <div className="spinner"></div>
                        <span>Crafting AI Itinerary...</span>
                      </>
                    ) : (
                      <>
                        <FaMagic />
                        <span>Generate Custom AI Itinerary</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Generated Itinerary Output Display */
                <div className="itinerary-result-display">
                  
                  <div className="result-banner">
                    <div>
                      <h3>{itinerary.title}</h3>
                      <p className="resort-sub"><FaSuitcase /> Recommended Stay: <strong>{itinerary.hotel}</strong></p>
                    </div>
                    <div className="cost-tag">
                      <span>Est. Cost</span>
                      <strong>{itinerary.estimatedCost}</strong>
                    </div>
                  </div>

                  <div className="days-timeline">
                    {itinerary.days.map((dayItem, idx) => (
                      <div className="day-card" key={idx}>
                        <h4>{dayItem.day}</h4>
                        <ul>
                          <li><strong>Morning:</strong> {dayItem.morning}</li>
                          <li><strong>Afternoon:</strong> {dayItem.afternoon}</li>
                          <li><strong>Evening:</strong> {dayItem.evening}</li>
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="itinerary-actions">
                    <button className="copy-btn" onClick={handleCopy}>
                      {copied ? <><FaCheckCircle /> Copied!</> : <><FaCopy /> Copy Plan</>}
                    </button>
                    <button className="replan-btn" onClick={() => setItinerary(null)}>
                      Plan Another Destination →
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default AIPlannerModal;
