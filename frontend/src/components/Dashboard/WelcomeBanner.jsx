import "./WelcomeBanner.css";

function WelcomeBanner() {

  return (

    <section className="welcome">

      <div>

        <p className="greeting">

          👋 Good Evening

        </p>

        <h1>

          Welcome Back,
          <br />
          Soumitri Roy

        </h1>

        <p className="subtitle">

          Ready to explore Incredible India today?

        </p>

      </div>

      <img
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900"
        alt=""
      />

    </section>

  );

}

export default WelcomeBanner;