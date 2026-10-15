import { useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from './Button';
import { BookingForm } from './BookingForm';
export function BookingDialog({ children, destination, vehicle }: { children: ReactNode; destination?: string; vehicle?: string }) {
 const [open,setOpen]=useState(false);
 return <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild>{children}</DialogTrigger><DialogContent className="booking-dialog" showCloseButton={false}><div className="dialog-top"><div><p className="eyebrow">LET’S PLAN YOUR JOURNEY</p><DialogTitle>Book your ride</DialogTitle></div><DialogClose asChild><Button variant="ghost" size="icon" aria-label="Close booking"><X/></Button></DialogClose></div><DialogDescription>Share your travel details. Vehicle, fare and availability are confirmed directly before booking.</DialogDescription>{open && <BookingForm destination={destination} vehicle={vehicle}/>}</DialogContent></Dialog>;
}
