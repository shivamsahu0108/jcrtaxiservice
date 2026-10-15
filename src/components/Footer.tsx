import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Brand } from './Header';
import { business, navItems } from '@/config/business';
import { ContactAction } from './ContactAction';
import { BookingDialog } from './BookingDialog';
import { Button } from './Button';
export function Footer() {
 return <><footer className="site-footer"><div className="site-container"><div className="footer-grid"><div className="footer-about"><Brand/><p>Thoughtfully planned journeys. Comfortable rides. Your local connection to Jabalpur and beyond.</p></div><div><h3>Quick links</h3>{navItems.slice(1).map(([name,path])=><Link className="footer-link" key={path} to={path}>{name}</Link>)}</div><div><h3>Our services</h3>{['Local Taxi Service','Airport Transfers','Outstation Taxi','Chauffeur-Driven Rental','Jabalpur Sightseeing'].map(name=><Link className="footer-link" to="/services" key={name}>{name}</Link>)}</div><div><h3>Let’s get you there</h3><p>{business.address}</p><p className="mt-3">{business.phone || 'Phone details coming soon'}</p><Link className="footer-link mt-3" to="/contact">Contact & travel enquiries ↗</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span><span>Jabalpur · Madhya Pradesh · India</span></div></div></footer><div className="mobile-booking-actions"><ContactAction/><BookingDialog><Button variant="gold">Book Your Ride<ArrowUpRight/></Button></BookingDialog></div></>;
}
