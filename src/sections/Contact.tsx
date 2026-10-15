import { MapPin, Phone, Mail, MapPinned, ArrowUpRight } from "lucide-react";
import { business } from "@/config/business";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { BookingDialog } from "@/components/BookingDialog";
import { ContactAction } from "@/components/ContactAction";
export function Contact() {
  return (
    <section className="section-space contact-section">
      <div className="site-container contact-layout">
        <div>
          <SectionHeading
            eyebrow="Your journey starts with a conversation"
            title="Wherever you’re headed, let’s get you there."
            description="Share your plans. We’ll help you explore the right ride for your journey."
          />
          <div className="contact-buttons">
            <BookingDialog>
              <Button variant="gold" size="lg">
                Plan Your Ride
                <ArrowUpRight />
              </Button>
            </BookingDialog>
            <ContactAction />
            <ContactAction kind="whatsapp" />
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <MapPin />
            <div>
              <h3>Based in</h3>
              <p>{business.address}</p>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps ↗
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <Phone />
            <div>
              <h3>Phone & WhatsApp</h3>
              <p>{business.phone || "Contact details coming soon"}</p>
            </div>
          </div>
          <div className="contact-detail">
            <Mail />
            <div>
              <h3>Email</h3>
              {business.email ? (
                <a href={`mailto:${business.email}`}>{business.email}</a>
              ) : (
                <p>Email details coming soon</p>
              )}
            </div>
          </div>
          <div className="contact-detail">
            <MapPinned />
            <div>
              <h3>Service areas</h3>
              <p>{business.serviceAreas.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
