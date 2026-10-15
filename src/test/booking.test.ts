import { describe, it, expect } from 'vitest';
import { bookingSchema, bookingMessage, whatsappUrl, business } from '@/config/business';

const valid = { pickup: 'Jabalpur station', destination: 'Bhedaghat', date: '2099-12-20', time: '09:30', passengers: 4, tripType: 'One-way' as const };
describe('Booking enquiries', () => {
 it('requires travel details and rejects invalid passenger counts', () => {
  expect(bookingSchema.safeParse({ ...valid, pickup: '', destination: '', time: '' }).success).toBe(false);
  expect(bookingSchema.safeParse({ ...valid, passengers: 8 }).success).toBe(false);
  expect(bookingSchema.safeParse({ ...valid, date: '2000-01-01' }).success).toBe(false);
 });
 it('generates a non-confirmed enquiry without changing input text', () => {
  const message = bookingMessage(valid);
  expect(message).toContain('Pickup: Jabalpur station');
  expect(message).toContain('not a confirmed booking');
 });
 it('does not invent a recipient and encodes a configured recipient message', () => {
  const original = business.whatsapp;
  try {
   business.whatsapp = '';
   expect(whatsappUrl('Test')).toBeNull();
   business.whatsapp = '919999999999';
   expect(whatsappUrl('A & B?')).toBe('https://wa.me/919999999999?text=A%20%26%20B%3F');
  } finally { business.whatsapp = original; }
 });
});