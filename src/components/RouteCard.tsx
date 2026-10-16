import { ArrowRight, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { BookingDialog } from "./BookingDialog";
import type { popularRoutes } from "@/config/content";
import { Contact } from "@/sections/Contact";
import { ContactAction } from "./ContactAction";
export function RouteCard({ route }: { route: (typeof popularRoutes)[number] }) {
  return (
    <article className="route-card">
      <div className="route-line">
        <h3>Jabalpur</h3>
        <ArrowRight size={18} />
        <h3>{route.name}</h3>
      </div>
      <p>{route.description}</p>
      <div className="flex justify-between ">
        <Button variant="link">
          <ContactAction />
        </Button>
        <Button variant="link">
          <ContactAction kind="whatsapp" />
        </Button>
      </div>
    </article>
  );
}
