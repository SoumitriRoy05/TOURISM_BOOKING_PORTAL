import "./PlannerForm.css";
import { FaMagic } from "react-icons/fa";

function PlannerForm() {
  return (
    <section className="planner-form">

      <div className="planner-card">

        <input placeholder="📍 Destination" />

        <input type="number" placeholder="💰 Budget" />

        <input type="number" placeholder="📅 Days" />

        <select>

          <option>👨‍👩‍👧 Travellers</option>

          <option>Solo</option>

          <option>Couple</option>

          <option>Family</option>

          <option>Friends</option>

        </select>

        <select>

          <option>🎯 Travel Style</option>

          <option>Adventure</option>

          <option>Luxury</option>

          <option>Nature</option>

          <option>Honeymoon</option>

        </select>

        <button>

          <FaMagic />

          Generate AI Trip

        </button>

      </div>

    </section>
  );
}

export default PlannerForm;