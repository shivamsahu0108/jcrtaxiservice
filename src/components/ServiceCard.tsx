import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { BookingDialog } from './BookingDialog';
import type { services } from '@/config/content';
export function ServiceCard({service}:{service:typeof services[number]}) { return <article className="service-card"><div className="service-icon"><service.icon/></div><h3>{service.title}</h3><p>{service.description}</p><BookingDialog><Button variant="link" className="service-link">Book a ride <ArrowUpRight/></Button></BookingDialog></article>; }
