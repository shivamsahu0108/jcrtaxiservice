import { businessConfig } from "../config/business";

export function whatsappUrl(
  message = "Hello, I would like to enquire about your taxi service.",
) {
  return `https://wa.me/${businessConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
