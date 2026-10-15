import { z } from "zod";

export const businessConfig = {
  name: "Jabalpur Car Rental Taxi Service",
  shortName: "Jabalpur Car Rental",
  phone: "7047057575",
  whatsapp: "917047057575",
  email: "jcrtaxiservice@gmail.com",
  website: "https://jcrtaxiservice.netlify.app/",
  googleMapsUrl:
    "https://www.google.com/maps/place/Jabalpur+Car+Rental+Taxi+Service/@23.1617731,79.8632827,15z/data=!4m10!1m2!2m1!1sjabalpur+car+rental+taxi+service!3m6!1s0x3981adbe8b2ac917:0xa3964949d43a1433!8m2!3d23.1610995!4d79.8735983!15sCiBqYWJhbHB1ciBjYXIgcmVudGFsIHRheGkgc2VydmljZVoiIiBqYWJhbHB1ciBjYXIgcmVudGFsIHRheGkgc2VydmljZZIBDHRheGlfc2VydmljZeABAA!16s%2Fg%2F11vrdtggb_?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
  city: "Jabalpur",
  state: "Madhya Pradesh",
  postalCode: "482003",
  businessHours: {
    monday: "Open 24 hours",
    tuesday: "Open 24 hours",
    wednesday: "Open 24 hours",
    thursday: "Open 24 hours",
    friday: "Open 24 hours",
    saturday: "Open 24 hours",
    sunday: "Open 24 hours",
  },
  address: {
    street: "Shop No 02, In Front of Gurukul School, Dhanwantri Nagar",
    locality: "Jabalpur",
    state: "Madhya Pradesh",
    postalCode: "482003",
  },
  serviceAreas: [
    "Jabalpur",
    "Katni",
    "Mandla",
    "Gotegaon",
    "Bandhavgarh",
    "Bargi",
    "Damoh",
    "Patan",
    "Seoni",
    "Kundam",
    "Sihora",
    "Dindori",
    "Panagar",
    "Shahpura",
    "Bhedaghat",
    "Lakhnadon",
  ],
  mapsUrl:
    "https://www.google.com/maps/place/Jabalpur+Car+Rental+Taxi+Service/@23.1617731,79.8632827,15z/data=!4m10!1m2!2m1!1sjabalpur+car+rental+taxi+service!3m6!1s0x3981adbe8b2ac917:0xa3964949d43a1433!8m2!3d23.1610995!4d79.8735983!15sCiBqYWJhbHB1ciBjYXIgcmVudGFsIHRheGkgc2VydmljZVoiIiBqYWJhbHB1ciBjYXIgcmVudGFsIHRheGkgc2VydmljZZIBDHRheGlfc2VydmljZeABAA!16s%2Fg%2F11vrdtggb_?entry=ttu",
};

export const business = {
  ...businessConfig,
  get address() {
    return [
      businessConfig.address.street,
      businessConfig.address.locality,
      businessConfig.address.state,
      businessConfig.address.postalCode,
    ]
      .filter(Boolean)
      .join(", ");
  },
};

export const bookingSchema = z.object({
  pickup: z.string().trim().min(2, "Enter a pickup location.").max(150),
  destination: z.string().trim().min(2, "Enter your destination.").max(150),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a travel date.")
    .refine((value) => {
      const date = new Date(value + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !isNaN(date.getTime()) && date >= today;
    }, "Choose today or a future date."),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Choose a travel time."),
  passengers: z.coerce.number().int().min(1).max(7),
  tripType: z.enum([
    "Local",
    "One-way",
    "Round trip",
    "Airport transfer",
    "Outstation",
    "Sightseeing",
  ]),
});

export type BookingDetails = z.infer<typeof bookingSchema>;

export function bookingMessage(input: BookingDetails) {
  const data = bookingSchema.parse(input);
  return `Hello ${business.name}, I would like to enquire about a taxi.\n\nPickup: ${data.pickup}\nDestination: ${data.destination}\nDate: ${data.date}\nTime: ${data.time}\nPassengers: ${data.passengers}\nTrip type: ${data.tripType}\n\nPlease share vehicle options, fare and availability. This is a booking enquiry, not a confirmed booking.`;
}

export function whatsappUrl(message: string) {
  const number = business.whatsapp.replace(/[\s+()-]/g, "");
  if (!/^\d{10,15}$/.test(number)) return null;
  const safeMessage = z.string().trim().min(1).max(2000).parse(message);
  return `https://wa.me/${number}?text=${encodeURIComponent(safeMessage)}`;
}

export const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Fleet", "/fleet"],
  ["Routes", "/routes"],
  ["Tours", "/tours"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;
