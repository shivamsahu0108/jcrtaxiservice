import { ArrowUpRight } from 'lucide-react';
import { Phone } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { tours } from '@/config/content';
import { business } from '@/config/business';
import { optimizedImage, responsiveImageSet } from '@/config/metadata';
export function TourPackages() { return <section className="section-space"><div className="site-container"><SectionHeading eyebrow="A little further. A little wonder." title="Discover the heart of Madhya Pradesh." description="River escapes, wildlife adventures and local discoveries. Let’s plan your next getaway."/><div className="tours-grid">{tours.map(tour=><article className="tour-card" key={tour.name}><img src={optimizedImage(tour.image, 720, 75)} srcSet={responsiveImageSet(tour.image, [480, 720, 960], 75)} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" alt={`${tour.name} — illustrative destination image`} loading="lazy" decoding="async" width={630} height={505}/><div className="tour-info"><p>{tour.tag}</p><h3>{tour.name}</h3><Button variant="link" asChild><a href={`tel:${business.phone.replace(/[\\s()-]/g,'')}`}><Phone/>Call to plan your trip<ArrowUpRight/></a></Button></div></article>)}</div></div></section>; }
