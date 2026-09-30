import { Clock3, Route, ShieldCheck } from "lucide-react";
import ContactActions from "./ContactActions";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroOverlay" />
      <div className="container heroContent">
        <div>
          <p className="overline">JABALPUR, MADHYA PRADESH</p>
          <h1>
            Jabalpur Car Rental & <em>Taxi Service</em>
          </h1>
          <p className="heroText">
            Car Rental & Taxi Service in Jabalpur, Madhya Pradesh. Reliable
            local, sightseeing, airport, railway station and outstation travel.
          </p>
          <div className="heroButtons">
            <ContactActions />
          </div>
          <div className="trust">
            <span>
              <ShieldCheck /> Local service
            </span>
            <span>
              <Clock3 /> Open 24 hours
            </span>
            <span>
              <Route /> Local & outstation
            </span>
          </div>
        </div>
        <div className="heroVisual">
          <img
            src="/images/branding/jabalpur-car-rental-taxi-brand.jpg"
            alt="Jabalpur taxi beside the Narmada Marble Rocks"
            width="1200"
            height="441"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
