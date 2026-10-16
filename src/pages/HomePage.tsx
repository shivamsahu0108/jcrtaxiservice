import { ArrowRight, MapPin } from "lucide-react";
import { jabalpurDestinations, mpDestinations } from "../data/destinations";
import { popularRoutes } from "../data/routes";
import ContactActions from "../components/ContactActions";
import { businessConfig as business } from "../config/business";
import {
  CitiesPreview,
  ContactSection,
  DestinationGrid,
  FAQ,
  FinalCta,
  Fleet,
  HowItWorks,
  Packages,
  Section,
  Services,
  Why,
} from "../components/ContentSections";
import Hero from "../components/Hero";
import { SEO } from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Jabalpur Car Rental & Taxi Service | Local & Outstation Taxi"
        description="Jabalpur Car Rental Taxi Service offers local taxi bookings, car rental with driver, outstation and round-trip cabs, railway station transfers, sightseeing around Bhedaghat, and travel from Jabalpur, Madhya Pradesh. Call 7047057575 to enquire."
        faq
      />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Section
          eyebrow="ABOUT OUR BUSINESS"
          title={
            <>
              Local travel made simpler <em>from Jabalpur.</em>
            </>
          }
        >
          <div className="businessDescription">
            <p>
              Jabalpur Car Rental Taxi Service helps travellers arrange taxi
              bookings from Jabalpur, Madhya Pradesh, for city journeys,
              family outings, business travel and trips to nearby destinations.
              Customers can enquire about local taxi rides, car rental with a
              driver, one-way and round-trip outstation journeys, railway
              station pickup and drop, and sightseeing trips around Bhedaghat,
              Marble Rocks and Dhuandhar Falls.
            </p>
            <p>
              Share your pickup point, destination, travel date, passenger
              count and return plan by phone or WhatsApp. We will help you
              check vehicle availability and the applicable fare before you
              finalize your travel arrangements. Trips to destinations such as
              Katni, Mandla and other nearby locations can be discussed
              according to route and availability.
            </p>
            <p>
              For taxi booking in Jabalpur, call{" "}
              <a href={`tel:${business.phone}`}>{business.phone}</a> or
              contact us on WhatsApp. Booking enquiries are not confirmed
              until the trip details and availability have been agreed.
            </p>
          </div>
        </Section>
        <Section
          eyebrow="POPULAR ROUTES"
          id="routes"
          title={
            <>
              Popular taxi routes <em>from Jabalpur.</em>
            </>
          }
        >
          <div className="routeGrid">
            {popularRoutes.map((route) => (
              <article className="routeCard" key={route}>
                <span>Jabalpur</span>
                <ArrowRight />
                <strong>{route}</strong>
                <ContactActions className="cardActions" />
              </article>
            ))}
          </div>
        </Section>
        <Section
          eyebrow="JABALPUR TOURISM"
          dark
          title={
            <>
              Explore Jabalpur <em>by Taxi</em>
            </>
          }
        >
          <DestinationGrid items={jabalpurDestinations} />
        </Section>
        <Section
          eyebrow="MADHYA PRADESH TOURISM"
          title={
            <>
              Explore Madhya Pradesh <em>by Taxi</em>
            </>
          }
        >
          <DestinationGrid items={mpDestinations} />
        </Section>
        <CitiesPreview />
        <Packages />
        <Why />
        <Section
          eyebrow="FIND OUR BUSINESS"
          title={
            <>
              Visit us in <em>Jabalpur.</em>
            </>
          }
        >
          <div className="mapEmbedPanel">
            <iframe
              title="Jabalpur Car Rental Taxi Service location on Google Maps"
              src="https://www.google.com/maps?q=23.1610995,79.8735983&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div>
              <MapPin aria-hidden="true" />
              <p>
                {business.address.street}, {business.address.locality},{" "}
                {business.address.state} {business.address.postalCode}
              </p>
              <a
                className="btn gold"
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Google Maps <ArrowRight />
              </a>
            </div>
          </div>
        </Section>
        <HowItWorks />
        <FAQ />
        <ContactSection />
        <FinalCta />
      </main>
    </>
  );
}
