import { ArrowRight, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { BookingDialog } from './BookingDialog';
import type { popularRoutes } from '@/config/content';
export function RouteCard({route}:{route:typeof popularRoutes[number]}) { return <article className="route-card"><div className="route-line"><h3>Jabalpur</h3><ArrowRight size={18}/><h3>{route.name}</h3></div><p>{route.description}</p><BookingDialog destination={route.name}><Button variant="link"><MessageCircle/>WhatsApp quote<ArrowUpRight/></Button></BookingDialog></article>; }
