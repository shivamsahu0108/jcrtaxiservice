import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, MapPin, MessageCircle } from "lucide-react";
import hero from "@/assets/chauffeur-hero.jpg";
import { Button } from "@/components/Button";
import { BookingDialog } from "@/components/BookingDialog";
import { BookingForm } from "@/components/BookingForm";
import { optimizedImage, responsiveImageSet } from "@/config/metadata";

import ContactActions from "@/components/ContactActions";
import { ContactAction } from "@/components/ContactAction";
export function Hero() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src={optimizedImage(hero, 1280, 75)}
          srcSet={responsiveImageSet(hero, [768, 1280, 1600], 75)}
          sizes="100vw"
          alt="Black chauffeur-style sedan on a scenic countryside road"
          width={1920}
          height={1024}
          fetchPriority="high"
          decoding="async"
        />
        <div className="site-container hero-inner">
          <p className="eyebrow">
            <span />
            Your journey. Our commitment.
          </p>
          <h1>
            Premium Car Rental
            <br />& Taxi Service
            <br />
            in <em>Jabalpur.</em>
          </h1>
          <p className="hero-copy">
            Travel comfortably across Jabalpur and Madhya Pradesh with local taxi services, airport
            transfers, outstation cabs and chauffeur-driven car rentals.
          </p>
          <div className="hero-buttons">
              <Button variant="gold" size="lg">
               <ContactAction kind="whatsapp" none />
                <ArrowUpRight className="text-white" />
              </Button>
            <Button variant="darkOutline" size="lg" asChild>
              <Link to="/fleet">
                Explore Our Fleet
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <p className="hero-footnote">
            <ShieldCheck size={15} /> Comfortable rides. Clear communication. Personal assistance.
          </p>
          <div className="hero-location">
            <MapPin size={17} />
            <strong>Rooted in Jabalpur.</strong>Ready for the road ahead.
          </div>
        </div>
      </section>
      <div className="site-container booking-band">
        <div className="booking-panel">
          <div className="booking-panel-head">
            <h2>Where would you like to go?</h2>
            <p>
              <MessageCircle size={14} />
              Let’s plan your next journey
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </>
  );
}
