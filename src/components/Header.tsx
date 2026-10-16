import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CarFront, Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/config/business";
import { Button } from "./Button";
import { BookingDialog } from "./BookingDialog";
import { ContactAction } from "./ContactAction";
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Jabalpur Car Rental Taxi Service home">
      <span className="brand-icon">
        <img
          src="/images/branding/jabalpur-car-rental-taxi-logo.svg"
          alt="Jabalpur Car Rental Taxi Service"
          width="2067"
          height="761"
        />
      </span>
      {/* <span>
        <span className="brand-name">Jabalpur Car Rental</span>
        <span className="brand-sub block">Taxi Service · Madhya Pradesh</span>
      </span> */}
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([name, path]) => (
              <Link
                key={path}
                to={path}
                activeOptions={{ exact: true }}
                activeProps={{ className: "active" }}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
      
            <Button variant="darkOutline" >
              <ContactAction none  />
            </Button>
            <Button variant="gold" >
              <ContactAction kind="whatsapp" none  />
            </Button>
          </div>
          <Button
            variant="darkOutline"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([name, path]) => (
              <Link key={path} to={path} onClick={() => setOpen(false)}>
                {name}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
