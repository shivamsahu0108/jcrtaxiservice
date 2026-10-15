import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { services } from '@/config/content';
export function Services({fullPage=false}:{fullPage?:boolean}) { return <section className="section-space"><div className="site-container"><SectionHeading eyebrow="Travel, tailored to you" title="Every journey, taken care of." description="From a quick city ride to a weekend away, find a service that fits your plans." action={!fullPage && <Button variant="link" asChild><Link to="/services">All services<ArrowUpRight/></Link></Button>}/><div className="services-grid">{services.map(service=><ServiceCard service={service} key={service.title}/>)}</div></div></section>; }
