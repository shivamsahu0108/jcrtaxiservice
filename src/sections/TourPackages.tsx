import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingDialog } from '@/components/BookingDialog';
import { Button } from '@/components/Button';
import { tours } from '@/config/content';
export function TourPackages() { return <section className="section-space"><div className="site-container"><SectionHeading eyebrow="A little further. A little wonder." title="Discover the heart of Madhya Pradesh." description="River escapes, wildlife adventures and local discoveries. Let’s plan your next getaway."/><div className="tours-grid">{tours.map(tour=><article className="tour-card" key={tour.name}><img src={tour.image} alt={`${tour.name} — illustrative destination image`} loading="lazy" width={630} height={505}/><div className="tour-info"><p>{tour.tag}</p><h3>{tour.name}</h3><BookingDialog destination={tour.destination}><Button variant="link">Plan Your Trip<ArrowUpRight/></Button></BookingDialog></div></article>)}</div></div></section>; }
