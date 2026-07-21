// import "./AIChat.css";
//
// import { FaRobot } from "react-icons/fa";
// import { IoSend } from "react-icons/io5";
//
// function AIChat() {
//
//   return (
//
//     <section className="chat-section">
//
//       <div className="chat-window">
//
//         <div className="chat-header">
//
//           <FaRobot className="robot-icon"/>
//
//           <div>
//
//             <h2>BharatYatra AI</h2>
//
//             <span>Online • Ready to Plan</span>
//
//           </div>
//
//         </div>
//
//         <div className="messages">
//
//           <div className="ai-message">
//
//             👋 Hello!
//
//             <br/><br/>
//
//             I'm BharatYatra AI.
//
//             <br/><br/>
//
//             Tell me where you'd like to travel and I'll create
//             the perfect itinerary for you.
//
//             <br/><br/>
//
//             Example:
//
//             <br/>
//
//             "Plan a 5-day Meghalaya trip under ₹25,000."
//
//           </div>
//
//         </div>
//
//         <div className="chat-input">
//
//           <input
//
//             type="text"
//
//             placeholder="Ask BharatYatra AI anything..."
//
//           />
//
//           <button>
//
//             <IoSend/>
//
//           </button>
//
//         </div>
//
//       </div>
//
//     </section>
//
//   );
//
// }
//
// export default AIChat;

import "./AIChat.css";
import { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
// import { useState, useRef, useEffect } from "react";
function AIChat() {
const [input, setInput] = useState("");

const [typing, setTyping] = useState(false);

const [messages, setMessages] = useState([
  {
    sender: "ai",
    text:
      "👋 Hello! I'm BharatYatra AI.\n\nTell me where you'd like to travel."
  }
]);

const bottomRef = useRef(null);

useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, typing]);

const sendMessage = () => {

  if (!input.trim()) return;

  const userText = input;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userText,
    },
  ]);

  setInput("");

  setTyping(true);

  setTimeout(() => {

    setTyping(false);

    let destination = "Meghalaya";
    let days = "5 Days";
    let budget = "₹25,000";

    const text = userText.toLowerCase();

    if(text.includes("kashmir")){
      destination="Kashmir";
      days="7 Days";
      budget="₹35,000";
    }

    else if(text.includes("goa")){
      destination="Goa";
      days="4 Days";
      budget="₹18,000";
    }

    else if(text.includes("kerala")){
      destination="Kerala";
      days="6 Days";
      budget="₹32,000";
    }

    else if(text.includes("ladakh")){
      destination="Ladakh";
      days="8 Days";
      budget="₹45,000";
    }

    else if(text.includes("andaman")){
      destination="Andaman";
      days="7 Days";
      budget="₹48,000";
    }

    else if(text.includes("jaipur")){
      destination="Jaipur";
      days="4 Days";
      budget="₹17,000";
    }

    else if(text.includes("varanasi")){
      destination="Varanasi";
      days="3 Days";
      budget="₹12,000";
    }

    setMessages((prev)=>[
      ...prev,

      {
        sender:"ai",
        text:`✨ Here is your ${destination} travel plan.`
      },

      {
        sender:"itinerary",
        destination,
        days,
        budget
      }

    ]);

  },2000);

};

  return (
    <section className="chat-section">

      <div className="chat-window">

        <div className="chat-header">

          <FaRobot className="robot-icon" />

          <div>

            <h2>BharatYatra AI</h2>

            <span>Online • Ready to Plan</span>

          </div>

        </div>

        <div className="messages">

          {messages.map((msg, index) => (

            <div key={index}>

              {msg.sender === "ai" && (

                <div className="ai-message">
                  {msg.text}
                </div>

              )}

              {msg.sender === "user" && (

                <div className="user-message">
                  {msg.text}
                </div>

              )}

              {msg.sender === "itinerary" && (

              <div className="trip-card">

              <h2>
              📍 {msg.destination}
              </h2>

              <p>

              <strong>Duration :</strong>

              {msg.days}

              </p>

              <p>

              <strong>Budget :</strong>

              {msg.budget}

              </p>

              <hr/>

              <h4>Day 1</h4>

              <p>Arrival & Hotel Check-in</p>

              <h4>Day 2</h4>

              <p>Local Sightseeing</p>

              <h4>Day 3</h4>

              <p>Adventure Activities</p>

              <h4>Day 4</h4>

              <p>Shopping & Food Tour</p>

              <h4>Day 5</h4>

              <p>Departure</p>

              <div className="trip-buttons">

              <button>

              Download PDF

              </button>

              <button>

              Save Trip

              </button>

              </div>

              </div>

              )}



            </div>

          ))}

          <div ref={bottomRef}></div>

        </div>

        <div className="chat-input">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask BharatYatra AI..."
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage}>
            <IoSend />
          </button>

        </div>

      </div>

    </section>
  );
}

export default AIChat;