import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { businessConfig as business } from "../config/business";
import { whatsappUrl } from "../utils/whatsapp";

export default function SiteFooter() {
  return (
    <>
      <footer>
        <section
          className="footerContactBand"
          aria-label="Business contact details"
        >
          <div className="container footerContactLayout">
            <div className="footerContactHeading">
              <p className="overline">GET IN TOUCH</p>
              <h2>{business.name}</h2>
              <p>
                {business.address.street}, {business.address.locality},{" "}
                {business.address.state} {business.address.postalCode}
              </p>
            </div>
            <div className="footerContactDetails">
              <a href={`tel:${business.phone}`}>
                <Phone />
                <span>
                  <small>Call us</small>
                  {business.phone}
                </span>
              </a>
              <a href={`mailto:${business.email}`}>
                <Mail />
                <span>
                  <small>Email</small>
                  {business.email}
                </span>
              </a>
              <div>
                <Clock3 />
                <span>
                  <small>Hours</small>
                  Open 24 hours, every day
                </span>
              </div>
              <a href={business.googleMapsUrl} target="_blank" rel="noreferrer">
                <MapPin />
                <span>
                  <small>Location</small>
                  View on Google Maps
                </span>
              </a>
            </div>
          </div>
        </section>
        <div className="container footerGrid">
          <div>
            <Link
              className="logo"
              to="/"
              aria-label="Jabalpur Car Rental Taxi Service"
            >
              <img
                src="/images/branding/jabalpur-car-rental-taxi-logo.svg"
                alt=""
                width="2067"
                height="761"
              />
            </Link>
            <p>
              Reliable local, sightseeing, airport, railway station and
              outstation taxi services from Jabalpur.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/taxi-service-jabalpur">Taxi Services</Link>
            <Link to="/car-rental-jabalpur">Car Rental</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/tour-packages">Tour Packages</Link>
            <Link to="/cities">Popular Cities</Link>
            <Link to="/#routes">Popular Routes</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`tel:${business.phone}`}>Call {business.phone}</a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={business.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="container footerBottom">
          <span>
            © {new Date().getFullYear()} {business.name}
          </span>
          <span>Privacy Policy · Terms & Conditions · Sitemap</span>
        </div>
      </footer>
      <div className="mobileBar">
        <a href={`tel:${business.phone}`}>
          <Phone />
          Call
        </a>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">
          <MessageCircle />
          WhatsApp
        </a>
      </div>
    </>
  );
}
