import { ContactAction } from './ContactAction';
import type { services } from '@/config/content';
export function ServiceCard({service}:{service:typeof services[number]}) { return <article className="service-card"><div className="service-icon"><service.icon/></div><h3>{service.title}</h3><p>{service.description}</p><div className="card-contact-actions"><ContactAction kind="whatsapp"/><ContactAction kind="phone"/></div></article>; }
