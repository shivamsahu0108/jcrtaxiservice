import { ArrowRight } from "lucide-react";
import { jabalpurDestinations, mpDestinations } from "../data/destinations";
import { popularRoutes } from "../data/routes";
import ContactActions from "../components/ContactActions";
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
        description="Reliable local, sightseeing, airport, railway station and outstation taxi services from Jabalpur, Madhya Pradesh."
        faq
      />
      <main>
        <Hero />
        <Services />
        <Fleet />
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
        <HowItWorks />
        <FAQ />
        <ContactSection />
        <FinalCta />
      </main>
    </>
  );
}
