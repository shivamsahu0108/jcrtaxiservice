import { SectionHeading } from '@/components/SectionHeading';
import { RouteCard } from '@/components/RouteCard';
import { popularRoutes } from '@/config/content';
export function PopularRoutes() { return <section className="section-space routes-section"><div className="site-container"><SectionHeading eyebrow="Beyond the city" title="Popular roads. Remarkable journeys." description="From Jabalpur to your next destination, travel on your terms."/><div className="routes-grid">{popularRoutes.map(route=><RouteCard route={route} key={route.name}/>)}</div></div></section>; }
