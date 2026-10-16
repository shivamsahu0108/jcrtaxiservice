import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { business } from "@/config/business";
import type { services } from "@/config/content";
export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="service-card">
      <div className="service-icon">
        <service.icon />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Button variant="link" className="service-link">
        <a href={`tel:${business.phone.replace(/[\s()-]/g, "")}`}>
          <div className="flex gap-2 items-center">
            Book a ride <ArrowUpRight />
          </div>
        </a>
      </Button>
    </article>
  );
}
