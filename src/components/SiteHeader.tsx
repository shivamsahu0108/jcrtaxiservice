import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { businessConfig as business } from "../config/business";
import { whatsappUrl } from "../utils/whatsapp";

const links = [
  ["Home", "/"],
  ["Taxi Services", "/taxi-service-jabalpur"],
  ["Car Rental", "/car-rental-jabalpur"],
  ["Fleet", "/fleet"],
  ["Routes", "/#routes"],
  ["Tour Packages", "/tour-packages"],
  ["Cities", "/cities"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav container">
        <Link
          className="logo"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Jabalpur Car Rental Taxi Service"
        >
          <img
            src="/images/branding/jabalpur-car-rental-taxi-logo.svg"
            alt=""
            width="2067"
            height="761"
          />
        </Link>
        <nav className={open ? "open" : ""} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} to={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="navActions">
          <a
            href={`tel:${business.phone}`}
            aria-label="Call Jabalpur Car Rental Taxi Service"
          >
            <Phone />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle />
          </a>
        </div>
        <button
          className="menuButton"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
