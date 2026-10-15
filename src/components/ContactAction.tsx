import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { business, whatsappUrl } from '@/config/business';
import { Button } from './Button';
export function ContactAction({ kind = 'phone', compact = false }: { kind?: 'phone' | 'whatsapp'; compact?: boolean }) {
 const [notice,setNotice]=useState(false);
 const url = kind === 'phone' ? (/^\+?[\d\s()-]{10,20}$/.test(business.phone) ? `tel:${business.phone.replace(/[\s()-]/g,'')}` : null) : whatsappUrl(`Hello ${business.name}, I would like to enquire about a taxi.`);
 const Icon = kind==='phone' ? Phone : MessageCircle;
 return <span className="contact-action">{url ? <Button variant="darkOutline" asChild size={compact?'icon':'default'}><a href={url} aria-label={kind==='phone'?'Call now':'WhatsApp enquiry'}><Icon/>{!compact && (kind==='phone'?'Call Now':'WhatsApp')}</a></Button> : <Button variant="darkOutline" size={compact?'icon':'default'} aria-label={kind==='phone'?'Call now':'WhatsApp enquiry'} onClick={()=>setNotice(!notice)}><Icon/>{!compact && (kind==='phone'?'Call Now':'WhatsApp')}</Button>}{notice && <span className="contact-notice" role="status">The business {kind==='phone'?'phone':'WhatsApp'} number hasn’t been added yet.</span>}</span>;
}
