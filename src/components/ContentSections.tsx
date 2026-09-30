import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { businessConfig as business } from "../config/business";
import { cities } from "../data/cities";
import { type Destination } from "../data/destinations";
import { faqs } from "../data/faqs";
import { tourPackages } from "../data/packages";
import { services } from "../data/services";
import { vehicles } from "../data/vehicles";
import { whatsappUrl } from "../utils/whatsapp";
import ContactActions from "./ContactActions";

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

export function Section({
  eyebrow,
  title,
  children,
  dark = false,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
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

export function DestinationGrid({ items }: { items: Destination[] }) {
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

export function Services() {
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

export function Fleet() {
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

export function FAQ() {
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

export function CitiesPreview() {
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

export function Packages() {
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
        {tourPackages.map((name, index) => (
          <article key={name}>
            <p className="overline">
              TRIP {String(index + 1).padStart(2, "0")}
            </p>
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

export function Why() {
  const points = [
    [
      "Local Jabalpur Service",
      "Local travel, sightseeing and route planning from Jabalpur.",
    ],
    [
      "Direct Contact",
      "Discuss your trip details with us on WhatsApp or phone.",
    ],
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

export function HowItWorks() {
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
        {steps.map(([Icon, title, text], index) => {
          const StepIcon = Icon as typeof Car;
          return (
            <article key={title as string}>
              <span>0{index + 1}</span>
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

export function ContactSection() {
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

export function FinalCta() {
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

export function PageHero({ h1, intro }: { h1: string; intro: string }) {
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
