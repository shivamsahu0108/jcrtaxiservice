import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/Button";
import { vehicles } from "@/config/content";
export function Fleet({ fullPage = false }: { fullPage?: boolean }) {
  return (
    <section className="section-space fleet-section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Comfort comes standard"
          title="The right ride for your journey."
          description="Sedans for everyday travel. Spacious MPVs for shared adventures."
          action={
            !fullPage && (
              <Button variant="link" asChild>
                <Link to="/fleet">
                  Explore the fleet
                  <ArrowUpRight />
                </Link>
              </Button>
            )
          }
        />
        <div className="fleet-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard vehicle={vehicle} key={vehicle.name} />
          ))}
        </div>
        <p className="booking-note">
          Representative vehicle images. Seating configuration, vehicle availability and fares are
          confirmed when you enquire.
        </p>
      </div>
    </section>
  );
}
