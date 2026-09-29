import { businessConfig } from '../config/business';

export type Booking = Record<string, string>;

export function whatsappUrl(booking: Booking = {}) {
  const fields: Array<[string, string]> = [
    ['Name', booking.Name || 'Not provided'],
    ['Phone', booking.Phone || 'Not provided'],
    ['Pickup', booking.Pickup || 'Not provided'],
    ['Drop', booking.Drop || 'Not provided'],
    ['Date', booking.Date || 'Not provided'],
    ['Time', booking.Time || 'Not provided'],
    ['Passengers', booking.Passengers || 'Not provided'],
    ['Vehicle', booking.Vehicle || 'Any available category'],
    ['Trip Type', booking['Trip Type'] || 'Not provided'],
    ['Additional requirements', booking['Additional requirements'] || 'None'],
  ];
  const message = ['Hello, I would like to enquire about a taxi booking.', '', ...fields.map(([label, value]) => `${label}: ${value}`)].join('\n');
  return `https://wa.me/${businessConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
