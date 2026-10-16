import { ArrowRight } from 'lucide-react';
import type { popularRoutes } from '@/config/content';
import { ContactAction } from './ContactAction';
export function RouteCard({route}:{route:typeof popularRoutes[number]}) { return <article className="route-card"><div className="route-line"><h3>Jabalpur</h3><ArrowRight size={18}/><h3>{route.name}</h3></div><p>{route.description}</p><div className="card-contact-actions"><ContactAction kind="whatsapp"/><ContactAction kind="phone"/></div></article>; }
