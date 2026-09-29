import { businessConfig } from '../config/business';
export type Booking = Record<string,string>;
export function whatsappUrl(data: Booking = {}) { const lines = ['Hello, I would like to enquire about a taxi booking.', ...Object.entries(data).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`)]; const number = businessConfig.whatsapp.replace(/\D/g,''); return `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`; }
