import { useId, useState } from 'react';
import { ArrowUpRight, MapPin, CalendarDays, Clock3, Users, LoaderCircle, MessageCircle, Copy, Check } from 'lucide-react';
import { Button } from './Button';
import { bookingSchema, bookingMessage, whatsappUrl } from '@/config/business';

export function BookingForm({ destination = '', vehicle = '' }: { destination?: string | undefined; vehicle?: string | undefined }) {
 const id = useId();
 const [values, setValues] = useState({ pickup: '', destination, date: '', time: '', passengers: '1', tripType: 'One-way' });
 const [errors, setErrors] = useState<Record<string, string>>({});
 const [draft, setDraft] = useState('');
 const [busy, setBusy] = useState(false);
 const [copied, setCopied] = useState(false);
 const update = (key: keyof typeof values, value: string) => { setValues(old => ({ ...old, [key]: value })); setDraft(''); setErrors(old => ({ ...old, [key]: '' })); };
 const fields = [{ key: 'pickup', label: 'Pickup location', placeholder: 'Where from?', type: 'text', icon: MapPin }, { key: 'destination', label: 'Destination', placeholder: 'Where to?', type: 'text', icon: MapPin }, { key: 'date', label: 'Travel date', placeholder: '', type: 'date', icon: CalendarDays }, { key: 'time', label: 'Travel time', placeholder: '', type: 'time', icon: Clock3 }] as const;
 const today = new Date(); const minDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
 async function submit(event: React.FormEvent) {
  event.preventDefault(); const result = bookingSchema.safeParse(values);
  if (!result.success) { setErrors(Object.fromEntries(result.error.issues.map(issue => [issue.path[0], issue.message]))); return; }
  setBusy(true); await new Promise(resolve => setTimeout(resolve, 250));
  setDraft(bookingMessage(result.data) + (vehicle ? `\nPreferred vehicle: ${vehicle}` : '')); setBusy(false);
 }
 const url = draft ? whatsappUrl(draft) : null;
 return <form className="booking-form" onSubmit={submit} noValidate><div className="booking-grid">
 {fields.map(field => <div className="form-field" key={field.key}><label htmlFor={`${id}-${field.key}`}>{field.label}</label><div className="input-wrap"><field.icon size={16}/><input id={`${id}-${field.key}`} type={field.type} value={values[field.key]} placeholder={field.placeholder} onChange={e => update(field.key,e.target.value)} maxLength={150} min={field.type === 'date' ? minDate : undefined} required aria-invalid={!!errors[field.key]} aria-describedby={errors[field.key] ? `${id}-${field.key}-error` : undefined}/></div>{errors[field.key] && <span id={`${id}-${field.key}-error`} className="field-error">{errors[field.key]}</span>}</div>)}
 <div className="form-field"><label htmlFor={`${id}-passengers`}>Passengers</label><div className="input-wrap"><Users size={16}/><select id={`${id}-passengers`} value={values.passengers} onChange={e=>update('passengers',e.target.value)}>{Array.from({length:7},(_,i)=><option value={i+1} key={i}>{i+1} {i===0?'Passenger':'Passengers'}</option>)}</select></div></div>
 <div className="form-field"><label htmlFor={`${id}-tripType`}>Trip type</label><div className="input-wrap"><select id={`${id}-tripType`} value={values.tripType} onChange={e=>update('tripType',e.target.value)}>{['Local','One-way','Round trip','Airport transfer','Outstation','Sightseeing'].map(v=><option key={v}>{v}</option>)}</select></div></div>
 <Button type="submit" variant="gold" size="lg" disabled={busy}>{busy ? <LoaderCircle className="animate-spin"/> : <ArrowUpRight/>}{busy ? 'Preparing…' : 'Enquire Now'}</Button>
 </div>
 <p className="booking-note"><MessageCircle size={13}/> No advance commitment. Confirm your fare & availability directly.</p>
 {draft && <div className="enquiry-result" role="status"><h3>Your travel enquiry is ready</h3><pre>{draft}</pre>{url ? <Button variant="gold" asChild><a href={url} target="_blank" rel="noopener noreferrer"><MessageCircle/>Continue on WhatsApp</a></Button> : <p className="field-error">Business WhatsApp number has not been added yet. Copy your enquiry; no booking has been sent.</p>}<Button type="button" variant="outline" onClick={async()=>{try {await navigator.clipboard.writeText(draft);setCopied(true);} catch { setErrors({copy:'Please select and copy the enquiry text.'}); }}}>{copied ? <Check/> : <Copy/>}{copied ? 'Copied' : 'Copy enquiry'}</Button>{errors['copy'] && <p>{errors['copy']}</p>}</div>}
 </form>;
}
