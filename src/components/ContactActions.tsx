import { MessageCircle, Phone } from "lucide-react";
import { businessConfig as business } from "../config/business";
import { whatsappUrl } from "../utils/whatsapp";

export default function ContactActions({
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
