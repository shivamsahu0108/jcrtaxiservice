import { useEffect, useState } from "react";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  X,
  TrainFront,
  Plane,
  Users,
  Landmark,
} from "lucide-react";
import {
  Link,
  Route as RouterRoute,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { businessConfig as business } from "./config/business";
import { cities } from "./data/cities";
import {
  jabalpurDestinations,
  mpDestinations,
  type Destination,
} from "./data/destinations";
import { tourPackages } from "./data/packages";
import { popularRoutes } from "./data/routes";
import { services } from "./data/services";
import { vehicles } from "./data/vehicles";
import { whatsappUrl } from "./utils/whatsapp";

const pageData: Record<
  string,
  { title: string; description: string; h1: string; intro: string }
> = {
  "/taxi-service-jabalpur": {
    title: "Taxi Service in Jabalpur | Local, Tourist & Outstation Taxi",
    description:
      "Taxi service in Jabalpur for local, tourist, airport, railway station and outstation travel.",
    h1: "Taxi Service in Jabalpur",
    intro:
      "Arrange local, tourist and outstation taxi service from Jabalpur. Share your travel plan to check current availability and fare.",
  },
  "/car-rental-jabalpur": {
    title: "Car Rental in Jabalpur | Car Hire & Taxi Service",
    description:
      "Car rental in Jabalpur for local travel, sightseeing and outstation journeys.",
    h1: "Car Rental in Jabalpur",
    intro:
      "Request a vehicle category for local travel, sightseeing or outstation journeys from Jabalpur.",
  },
  "/local-taxi-jabalpur": {
    title: "Local Taxi Jabalpur | City Taxi Service",
    description:
      "Local taxi service in Jabalpur for city travel and nearby destinations.",
    h1: "Local Taxi in Jabalpur",
    intro:
      "Share your pickup and drop locations to request a local taxi in Jabalpur.",
  },
  "/outstation-taxi-jabalpur": {
    title: "Outstation Taxi Jabalpur | One Way & Round Trip",
    description:
      "Outstation taxi from Jabalpur for one-way and round-trip intercity travel.",
    h1: "Outstation Taxi from Jabalpur",
    intro:
      "Plan an intercity journey from Jabalpur with one-way or round-trip travel options.",
  },
  "/airport-taxi-jabalpur": {
    title: "Airport Taxi Jabalpur | Airport Pickup & Drop",
    description:
      "Airport taxi service from Jabalpur for pickup and drop travel.",
    h1: "Airport Taxi from Jabalpur",
    intro:
      "Share pickup, drop and timing details to request an airport transfer.",
  },
  "/railway-station-taxi-jabalpur": {
    title: "Railway Station Taxi Jabalpur | Pickup & Drop",
    description:
      "Railway station taxi service in Jabalpur for pickup and drop.",
    h1: "Railway Station Taxi Jabalpur",
    intro:
      "Plan a railway station pickup or drop with your train timing and destination.",
  },
  "/jabalpur-sightseeing-taxi": {
    title: "Jabalpur Sightseeing Taxi | Bhedaghat & Local Tours",
    description:
      "Jabalpur sightseeing taxi for Bhedaghat, Dhuandhar Falls, Marble Rocks and local attractions.",
    h1: "Jabalpur Sightseeing Taxi",
    intro:
      "Explore Bhedaghat, Dhuandhar Falls, Marble Rocks and local attractions with a sightseeing taxi.",
  },
  "/tourist-taxi-jabalpur": {
    title: "Tourist Taxi in Jabalpur | Sightseeing & Tours",
    description:
      "Tourist taxi service in Jabalpur for sightseeing and Madhya Pradesh travel.",
    h1: "Tourist Taxi in Jabalpur",
    intro:
      "Plan sightseeing and Madhya Pradesh travel from Jabalpur around your itinerary.",
  },
  "/tempo-traveller-jabalpur": {
    title: "Tempo Traveller Rental in Jabalpur | 9, 12, 15 & 17 Seater",
    description:
      "Tempo Traveller rental categories in Jabalpur for group travel, subject to availability.",
    h1: "Tempo Traveller Rental in Jabalpur",
    intro:
      "Request a 9, 12, 15 or 17 seater category for group travel, subject to availability.",
  },
};
const faqs = [
  [
    "How can I discuss my travel plans?",
    "Call us or send your travel details on WhatsApp. We will confirm current availability and fare for your requirement.",
  ],
  [
    "Do you provide airport transfers?",
    "Yes. Share your pickup or drop location and timing to request an airport transfer.",
  ],
  [
    "Do you provide railway station pickup?",
    "Yes. You can share your train timing, pickup point and destination when requesting a railway station transfer.",
  ],
  [
    "Can I arrange an outstation taxi?",
    "Yes. Share your route and travel requirements on WhatsApp or by phone to check current availability.",
  ],
  [
    "Do you provide sightseeing taxis?",
    "Yes. You can request a Jabalpur sightseeing taxi for destinations such as Bhedaghat and Dhuandhar Falls.",
  ],
  [
    "Do you provide Tempo Traveller rentals?",
    "Tempo Traveller seating categories can be requested for group travel, subject to availability.",
  ],
  [
    "How can I get the current fare?",
    "Share your trip details on WhatsApp or by phone. Fare is shared after reviewing your route and requirements.",
  ],
  [
    "How can I contact the taxi service?",
    `Call ${business.phone}, message on WhatsApp, or email ${business.email}.`,
  ],
];

function SEO({
  title,
  description,
  faq = false,
}: {
  title: string;
  description: string;
  faq?: boolean;
}) {
  const location = useLocation();
  useEffect(() => {
    const url = `${business.website.replace(/\/$/, "")}${location.pathname}`;
    document.title = title;
    const set = (selector: string, attrs: Record<string, string>) => {
      let element = document.head.querySelector(selector) as
        | HTMLMetaElement
        | HTMLLinkElement
        | null;
      if (!element) {
        element = document.createElement(
          selector.startsWith("link") ? "link" : "meta",
        );
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) =>
        element!.setAttribute(key, value),
      );
    };
    set('meta[name="description"]', {
      name: "description",
      content: description,
    });
    set('meta[property="og:title"]', { property: "og:title", content: title });
    set('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    set('meta[property="og:url"]', { property: "og:url", content: url });
    set('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    set('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    set('link[rel="canonical"]', { rel: "canonical", href: url });
    document.getElementById("page-jsonld")?.remove();
    const script = document.createElement("script");
    script.id = "page-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(
      faq
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([name, text]) => ({
              "@type": "Question",
              name,
              acceptedAnswer: { "@type": "Answer", text },
            })),
          }
        : {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: business.website,
              },
              { "@type": "ListItem", position: 2, name: title, item: url },
            ],
          },
    );
    document.head.appendChild(script);
    return () => script.remove();
  }, [description, faq, location.pathname, title]);
  return null;
}
function SiteSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "site-jsonld";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", name: business.name, url: business.website },
        {
          "@type": "TaxiService",
          name: business.name,
          url: business.website,
          telephone: `+91${business.phone}`,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            addressLocality: business.city,
            addressRegion: business.state,
            postalCode: business.postalCode,
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 00:00-23:59",
          areaServed: { "@type": "City", name: business.city },
        },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}
function Photo({
  src,
  alt,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo ${className} ${failed ? "photoFallback" : ""}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          width="1200"
          height="800"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
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
  return (
    <header className="header">
      <div className="nav container">
        <Link
          className="logo"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Jabalpur Car Rental Taxi Service"
        >
          <img src="/images/branding/jabalpur-car-rental-taxi-logo.svg" alt="" width="2067" height="761" />
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
function ContactActions({
  className = "",
  whatsappMessage,
}: {
  className?: string;
  whatsappMessage?: string;
}) {
  return (
    <div className={`contactActions ${className}`.trim()}>
      <a
        className="btn gold"
        href={whatsappUrl(whatsappMessage)}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle /> WhatsApp
      </a>
      <a className="btn outline" href={`tel:${business.phone}`}>
        <Phone /> Call Now
      </a>
    </div>
  );
}
function Section({
  eyebrow,
  title,
  children,
  dark = false,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="sectionHeading">
          <p className="overline">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
function DestinationGrid({ items }: { items: Destination[] }) {
  return (
    <div className="destinationGrid">
      {items.map((item) => (
        <article className="destinationCard" key={item.name}>
          <Photo src={item.image} alt={item.alt} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <ContactActions className="cardActions" />
          </div>
        </article>
      ))}
    </div>
  );
}
function Services() {
  return (
    <Section
      eyebrow="OUR SERVICES"
      title={
        <>
          Taxi services for <em>every journey.</em>
        </>
      }
    >
      <div className="serviceGrid">
        {services.map((service, index) => (
          <article className="serviceCard" key={service.href}>
            <span className="serviceNumber">0{index + 1}</span>
            <Car className="serviceIcon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div>
              <Link to={service.href}>
                View Service <ArrowRight />
              </Link>
              <ContactActions className="cardActions" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
function Fleet() {
  return (
    <Section
      eyebrow="OUR FLEET"
      dark
      title={
        <>
          Space for every <em>kind of trip.</em>
        </>
      }
    >
      <div className="fleetGrid">
        {vehicles.map((vehicle) => (
          <article className="fleetCard" key={vehicle.name}>
            <Photo
              src={vehicle.image}
              alt={`${vehicle.name.toLowerCase()} taxi for car rental in Jabalpur`}
            />
            <div>
              <p className="overline">{vehicle.name}</p>
              <h3>{vehicle.suitableFor}</h3>
              <p>
                Seating category and availability are confirmed for your trip.
              </p>
              <div>
                <ContactActions
                  className="cardActions"
                  whatsappMessage={`Hello, I would like to ask about the ${vehicle.name} vehicle.`}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
function FAQ() {
  return (
    <Section
      eyebrow="FAQ"
      title={
        <>
          Questions before <em>you travel.</em>
        </>
      }
    >
      <div className="faqList">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <ChevronDown />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
function Home() {
  return (
    <>
      <SEO
        title="Jabalpur Car Rental & Taxi Service | Local & Outstation Taxi"
        description="Reliable local, sightseeing, airport, railway station and outstation taxi services from Jabalpur, Madhya Pradesh."
        faq
      />
      <main>
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
                local, sightseeing, airport, railway station and outstation
                travel.
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
function CitiesPreview() {
  return (
    <Section
      eyebrow="CITIES WE SERVE"
      dark
      title={
        <>
          Travel beyond <em>Jabalpur.</em>
        </>
      }
    >
      <div className="cityList">
        {cities.map((city) => (
          <Link key={city.slug} to={`/cities/${city.slug}`}>
            {city.name}
            <ArrowRight />
          </Link>
        ))}
      </div>
    </Section>
  );
}
function Packages() {
  return (
    <Section
      eyebrow="TOUR PACKAGES"
      title={
        <>
          Travel plans worth <em>making time for.</em>
        </>
      }
    >
      <div className="packageGrid">
        {tourPackages.map((name, i) => (
          <article key={name}>
            <p className="overline">TRIP {String(i + 1).padStart(2, "0")}</p>
            <h3>{name}</h3>
            <p>Request a custom travel quote for your dates and group.</p>
            <ContactActions
              className="cardActions"
              whatsappMessage={`Hello, I would like to ask about the ${name} tour package.`}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
function Why() {
  const points = [
    [
      "Local Jabalpur Service",
      "Local travel, sightseeing and route planning from Jabalpur.",
    ],
    ["Direct Contact", "Discuss your trip details with us on WhatsApp or phone."],
    [
      "Multiple Vehicle Categories",
      "Seating categories for individuals, families and groups.",
    ],
    [
      "Airport & Railway Transfers",
      "Request pickup and drop travel around your schedule.",
    ],
  ];
  return (
    <Section
      eyebrow="WHY CHOOSE US"
      dark
      title={
        <>
          Travel with a <em>clear plan.</em>
        </>
      }
    >
      <div className="whyGrid">
        {points.map(([title, text]) => (
          <article key={title}>
            <CheckCircle2 />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
function HowItWorks() {
  const steps = [
    [
      MessageCircle,
      "Message Us",
      "Share your route and travel requirements on WhatsApp.",
    ],
    [
      Phone,
      "Discuss Your Trip",
      "Call us to check availability and current fare.",
    ],
    [
      CheckCircle2,
      "Confirm Details",
      "Finalize your travel plans directly with our team.",
    ],
    [Car, "Travel", "Start your planned journey from Jabalpur."],
  ];
  return (
    <Section
      eyebrow="YOUR JOURNEY"
      title={
        <>
          Simple steps to <em>your ride.</em>
        </>
      }
    >
      <ContactActions className="sectionActions" />
      <div className="steps">
        {steps.map(([Icon, title, text], i) => {
          const StepIcon = Icon as typeof Car;
          return (
            <article key={title as string}>
              <span>0{i + 1}</span>
              <StepIcon />
              <h3>{title as string}</h3>
              <p>{text as string}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
function ContactSection() {
  return (
    <Section
      eyebrow="CONTACT & LOCATION"
      title={
        <>
          Talk to our <em>travel desk.</em>
        </>
      }
    >
      <div className="contactGrid">
        <article>
          <Phone />
          <h3>Call</h3>
          <a href={`tel:${business.phone}`}>{business.phone}</a>
        </article>
        <article>
          <MessageCircle />
          <h3>WhatsApp</h3>
          <a target="_blank" rel="noreferrer" href={whatsappUrl()}>
            Start a chat
          </a>
        </article>
        <article>
          <MapPin />
          <h3>Jabalpur, Madhya Pradesh</h3>
          <a target="_blank" rel="noreferrer" href={business.googleMapsUrl}>
            Open Google Maps
          </a>
        </article>
        <article>
          <Clock3 />
          <h3>Open Hours</h3>
          <p>{business.businessHours.monday}, every day</p>
        </article>
      </div>
    </Section>
  );
}
function FinalCta() {
  return (
    <section className="finalCta">
      <div className="container">
        <div>
          <p className="overline">READY WHEN YOU ARE</p>
          <h2>
            Plan your next journey <em>from Jabalpur.</em>
          </h2>
        </div>
        <ContactActions />
      </div>
    </section>
  );
}
function StandardPage({
  data,
}: {
  data: { title: string; description: string; h1: string; intro: string };
}) {
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
          {services.slice(0, 6).map((service, i) => (
            <article className="serviceCard" key={service.href}>
              <span className="serviceNumber">0{i + 1}</span>
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
function PageHero({ h1, intro }: { h1: string; intro: string }) {
  return (
    <section className="pageHero">
      <div className="container">
        <p className="overline">JABALPUR CAR RENTAL TAXI SERVICE</p>
        <h1>{h1}</h1>
        <p>{intro}</p>
        <ContactActions />
      </div>
    </section>
  );
}
function CitiesPage() {
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
function CityPage() {
  const { slug } = useParams();
  const city = cities.find((item) => item.slug === slug);
  if (!city) return <NotFound />;
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
function FleetPage() {
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
function PackagesPage() {
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
function ContactPage() {
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
function AboutPage() {
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
function FAQPage() {
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
function NotFound() {
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
function Footer() {
  return (
    <>
      <footer>
        <div className="container footerGrid">
          <div>
            <Link
              className="logo"
              to="/"
              aria-label="Jabalpur Car Rental Taxi Service"
            >
              <img src="/images/branding/jabalpur-car-rental-taxi-logo.svg" alt="" width="2067" height="761" />
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
            <a href={`tel:${business.phone}`}>{business.phone}</a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={business.googleMapsUrl} target="_blank" rel="noreferrer">
              Google Maps
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
export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <SiteSchema />
      <Header />
      <Routes>
        <RouterRoute path="/" element={<Home />} />
        {Object.entries(pageData).map(([path, data]) => (
          <RouterRoute
            key={path}
            path={path}
            element={<StandardPage data={data} />}
          />
        ))}
        <RouterRoute path="/cities" element={<CitiesPage />} />
        <RouterRoute path="/cities/:slug" element={<CityPage />} />
        <RouterRoute path="/fleet" element={<FleetPage />} />
        <RouterRoute path="/tour-packages" element={<PackagesPage />} />
        <RouterRoute path="/about" element={<AboutPage />} />
        <RouterRoute path="/contact" element={<ContactPage />} />
        <RouterRoute path="/faq" element={<FAQPage />} />
        <RouterRoute path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
