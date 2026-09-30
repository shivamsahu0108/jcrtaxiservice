import { ArrowRight, Car, Landmark } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cities } from "../data/cities";
import { services } from "../data/services";
import ContactActions from "../components/ContactActions";
import {
  ContactSection,
  FAQ,
  Fleet,
  HowItWorks,
  Packages,
  PageHero,
  Section,
  Why,
} from "../components/ContentSections";
import { SEO } from "../components/SEO";

export type PageData = {
  title: string;
  description: string;
  h1: string;
  intro: string;
};

export function StandardPage({ data }: { data: PageData }) {
  return (
    <>
      <SEO title={data.title} description={data.description} />
      <PageHero h1={data.h1} intro={data.intro} />
      <Section
        eyebrow="SERVICE OPTIONS"
        title={
          <>
            Travel with a <em>clear plan.</em>
          </>
        }
      >
        <div className="serviceGrid">
          {services.slice(0, 6).map((service, index) => (
            <article className="serviceCard" key={service.href}>
              <span className="serviceNumber">0{index + 1}</span>
              <Car className="serviceIcon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.href}>
                View Service <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="GET IN TOUCH"
        dark
        title={
          <>
            Get fare & <em>availability.</em>
          </>
        }
      >
        <ContactActions className="sectionActions sectionActionsDark" />
      </Section>
    </>
  );
}

export function CitiesPage() {
  return (
    <>
      <SEO
        title="Cities We Serve from Jabalpur | Taxi Service"
        description="Cities and destinations served from Jabalpur for local and outstation taxi travel."
      />
      <PageHero
        h1="Cities We Serve"
        intro="Request current availability for taxi travel from Jabalpur to popular cities and destinations."
      />
      <Section
        eyebrow="POPULAR CITIES"
        title={
          <>
            From Jabalpur to <em>more destinations.</em>
          </>
        }
      >
        <div className="citiesGrid">
          {cities.map((city) => (
            <article key={city.slug}>
              <h2>{city.name}</h2>
              <p>{city.shortDescription}</p>
              <ContactActions className="cardActions" />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

export function CityPage() {
  const { slug } = useParams();
  const city = cities.find((item) => item.slug === slug);
  if (!city) return <NotFoundPage />;
  return (
    <>
      <SEO
        title={`Taxi Service from Jabalpur to ${city.name} | Jabalpur Car Rental Taxi Service`}
        description={`${city.shortDescription} Request current fare and availability from Jabalpur Car Rental Taxi Service.`}
      />
      <PageHero
        h1={`Taxi from Jabalpur to ${city.name}`}
        intro={`${city.shortDescription} Share your travel date, passenger count and pickup details to request current availability.`}
      />
      <Section
        eyebrow="PLAN YOUR JOURNEY"
        title={
          <>
            Request a current <em>fare & availability.</em>
          </>
        }
      >
        <ContactActions className="sectionActions" />
      </Section>
    </>
  );
}

export function FleetPage() {
  return (
    <>
      <SEO
        title="Taxi & Tempo Traveller Fleet in Jabalpur"
        description="Vehicle seating categories for taxi and group travel in Jabalpur."
      />
      <PageHero
        h1="Vehicle Categories for Every Group"
        intro="Choose a seating category and request current availability for your journey."
      />
      <Fleet />
    </>
  );
}

export function PackagesPage() {
  return (
    <>
      <SEO
        title="Jabalpur & Madhya Pradesh Taxi Tour Packages"
        description="Request a custom quote for Jabalpur sightseeing and Madhya Pradesh taxi tours."
      />
      <PageHero
        h1="Jabalpur & Madhya Pradesh Taxi Tours"
        intro="Request a custom quote for sightseeing, wildlife, family and outstation travel."
      />
      <Packages />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Jabalpur Car Rental Taxi Service"
        description="Contact Jabalpur Car Rental Taxi Service for car rental, sightseeing and outstation travel."
      />
      <PageHero
        h1="Contact Jabalpur Taxi Service"
        intro="Call us or message on WhatsApp to discuss your travel plans."
      />
      <Section
        eyebrow="CONTACT"
        dark
        title={
          <>
            Get fare & <em>availability.</em>
          </>
        }
      >
        <ContactActions className="sectionActions sectionActionsDark" />
      </Section>
      <ContactSection />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Jabalpur Car Rental Taxi Service"
        description="Local taxi, car rental, sightseeing, airport, railway station and outstation travel from Jabalpur."
      />
      <PageHero
        h1="Jabalpur Car Rental Taxi Service"
        intro="Local taxi, car rental, sightseeing, airport, railway station and outstation travel from Jabalpur, Madhya Pradesh."
      />
      <Why />
      <HowItWorks />
    </>
  );
}

export function FAQPage() {
  return (
    <>
      <SEO
        title="Taxi Service FAQ in Jabalpur"
        description="Frequently asked questions about taxi services, car rental and travel from Jabalpur."
        faq
      />
      <PageHero
        h1="Taxi Service FAQs"
        intro="Useful information about taxi service and car rental in Jabalpur."
      />
      <FAQ />
    </>
  );
}

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Jabalpur Car Rental Taxi Service"
        description="The page you requested could not be found."
      />
      <section className="notFound">
        <Landmark />
        <h1>Page Not Found</h1>
        <p>The page you requested is not available.</p>
        <div>
          <Link className="btn gold" to="/">
            Return Home
          </Link>
          <ContactActions className="cardActions" />
        </div>
      </section>
    </>
  );
}
