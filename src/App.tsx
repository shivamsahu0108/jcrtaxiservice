import { useEffect } from "react";
import { Route as RouterRoute, Routes, useLocation } from "react-router-dom";
import { SiteSchema } from "./components/SEO";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import {
  AboutPage,
  CitiesPage,
  CityPage,
  ContactPage,
  FAQPage,
  FleetPage,
  NotFoundPage,
  PackagesPage,
  StandardPage,
  type PageData,
} from "./pages/RoutePages";

const servicePages: Record<string, PageData> = {
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

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SiteSchema />
      <SiteHeader />
      <Routes>
        <RouterRoute path="/" element={<HomePage />} />
        {Object.entries(servicePages).map(([path, data]) => (
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
        <RouterRoute path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
