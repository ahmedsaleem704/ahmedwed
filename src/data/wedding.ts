import haldiImg from "@/assets/event-haldi.png";
import mehendiImg from "@/assets/event-mehendi.png";
import sangeetImg from "@/assets/event-sangeet.png";
import weddingImg from "@/assets/event-wedding.png";
import receptionImg from "@/assets/event-reception.png";
import coupleHero from "@/assets/couple-hero.png";
import venueImg from "@/assets/venue.jpg";

export const couple = {
  bride: "Rashima",
  groom: "Vijay",
  tagline: "Two Hearts. One Beautiful Beginning.",
  hashtag: "#VijayWedsRashima",
  heroImage: coupleHero,
  /** Main wedding ceremony date & time (local). */
  weddingDate: "2026-12-11T19:30:00+05:30",
  weddingDateLabel: "11 December 2026",
};

export const brand = {
  name: "Theplanify",
  descriptor: "India's trusted event planning platform",
  status: "Launching Soon",
};

export type WeddingEvent = {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  icon: "sun" | "leaf" | "music" | "flame" | "sparkles";
  palette: string[];
  dressCode: string;
};

export const events: WeddingEvent[] = [
  {
    id: "haldi",
    name: "Haldi",
    date: "9 December 2026",
    time: "10:00 AM",
    venue: "Rashima's Residence, Jaipur",
    description:
      "A sunlit morning of turmeric, marigolds and laughter as blessings are showered on the couple.",
    image: haldiImg,
    icon: "sun",
    palette: ["#F6D365", "#FDA085", "#FFF3C4"],
    dressCode: "Sunshine yellows, marigold orange and breezy cottons.",
  },
  {
    id: "mehendi",
    name: "Mehendi",
    date: "9 December 2026",
    time: "5:00 PM",
    venue: "The Courtyard Lawn, Rambagh Gardens",
    description:
      "Henna artistry, dholak beats and green foliage under a canopy of fairy lights.",
    image: mehendiImg,
    icon: "leaf",
    palette: ["#A7C957", "#6A994E", "#EAF4D3"],
    dressCode: "Emerald and mint ethnic wear, mirror work and floral jewellery.",
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "10 December 2026",
    time: "8:00 PM",
    venue: "Grand Ballroom, Rambagh Heritage Palace",
    description:
      "An evening of choreographed madness, live music and family performances.",
    image: sangeetImg,
    icon: "music",
    palette: ["#F7B2BD", "#C77DFF", "#FFD9A0"],
    dressCode: "Glamorous Indo-western, sequins and statement heels.",
  },
  {
    id: "wedding",
    name: "Wedding",
    date: "11 December 2026",
    time: "7:30 PM",
    venue: "Mandap Lawns, Rambagh Heritage Palace",
    description:
      "The sacred pheras beneath a flower-laden mandap, in warm golden light.",
    image: weddingImg,
    icon: "flame",
    palette: ["#C1121F", "#F2C078", "#FFF1D0"],
    dressCode: "Traditional Indian finery — reds, golds and heirloom jewellery.",
  },
  {
    id: "reception",
    name: "Reception",
    date: "12 December 2026",
    time: "7:00 PM",
    venue: "Chandelier Hall, Rambagh Heritage Palace",
    description:
      "Champagne toasts, chandeliers and one last dance before forever begins.",
    image: receptionImg,
    icon: "sparkles",
    palette: ["#E9D8A6", "#F4E3D7", "#BFA46F"],
    dressCode: "Black-tie elegance, floor-length gowns and tailored suits.",
  },
];

export const loveStory = [
  {
    date: "March 2019",
    title: "First Meet",
    text: "A crowded Jaipur wedding, a spilled cup of chai, and an apology that lasted three hours.",
    image: mehendiImg,
  },
  {
    date: "July 2019",
    title: "First Date",
    text: "Kulfi on Nahargarh Road while the monsoon decided to join them, uninvited.",
    image: sangeetImg,
  },
  {
    date: "February 2021",
    title: "Falling in Love",
    text: "Two cities, endless voice notes, and one shared playlist that said everything.",
    image: haldiImg,
  },
  {
    date: "December 2025",
    title: "The Proposal",
    text: "A rooftop full of diyas, a hidden ring box, and a yes before the question ended.",
    image: receptionImg,
  },
  {
    date: "December 2026",
    title: "Forever Begins",
    text: "And now, surrounded by everyone they love, the pheras that make it forever.",
    image: weddingImg,
  },
];

export const gallery = [
  { src: coupleHero, alt: "Vijay and Rashima illustrated in blush and cream wedding attire", span: "tall" },
  { src: haldiImg, alt: "The couple at their Haldi ceremony surrounded by marigolds", span: "short" },
  { src: venueImg, alt: "Rambagh Heritage Palace decorated with a floral mandap at dusk", span: "wide" },
  { src: mehendiImg, alt: "The couple in green outfits during the Mehendi celebration", span: "tall" },
  { src: sangeetImg, alt: "Vijay and Rashima dancing at the Sangeet night", span: "short" },
  { src: receptionImg, alt: "The couple dressed in formal attire for the reception", span: "tall" },
  { src: weddingImg, alt: "Vijay and Rashima at the wedding mandap in red and gold", span: "short" },
];

export const venue = {
  name: "Rambagh Heritage Palace",
  address: "Bhawani Singh Road, Rambagh, Jaipur, Rajasthan 302005, India",
  image: venueImg,
  dateTime: "11 December 2026 · 7:30 PM onwards",
  mapEmbed:
    "https://www.google.com/maps?q=Rambagh+Palace+Jaipur&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Rambagh+Palace+Jaipur",
};

export const families = {
  bride: [
    { name: "Mr. Anil Sharma", relation: "Father of the Bride", note: "Will personally check that every guest has eaten. Twice." },
    { name: "Mrs. Meena Sharma", relation: "Mother of the Bride", note: "The heart behind every detail you'll see this week." },
    { name: "Ananya Sharma", relation: "Sister of the Bride", note: "Chief bridesmaid, official hype-woman, sangeet choreographer." },
  ],
  groom: [
    { name: "Mr. Rakesh Mehra", relation: "Father of the Groom", note: "Storyteller-in-chief. Ask him about 1994." },
    { name: "Mrs. Sunita Mehra", relation: "Mother of the Groom", note: "Her blessings and her laddoos are equally famous." },
    { name: "Arjun Mehra", relation: "Brother of the Groom", note: "Best man, ring guardian, and the loudest cheer in the room." },
  ],
};

export const travel = {
  getting: [
    { icon: "plane", title: "By Air", text: "Jaipur International Airport (JAI) — 12 km / 25 min from the venue. Direct flights from Delhi, Mumbai and Bengaluru." },
    { icon: "train", title: "By Rail", text: "Jaipur Junction — 6 km / 15 min. Well connected via Shatabdi and Vande Bharat services." },
    { icon: "bus", title: "Local Transport", text: "Metro Pink Line and app-based autos run across the city until midnight." },
    { icon: "car", title: "Taxi & Cabs", text: "Uber and Ola operate 24x7. Shuttle service from partner hotels on all event days." },
  ],
  hotels: [
    { name: "The Lily Boutique Hotel", location: "C-Scheme, Jaipur", price: "₹4,500 / night", distance: "2.1 km from venue", link: "#rsvp" },
    { name: "Amber Grand Residency", location: "Bani Park, Jaipur", price: "₹7,200 / night", distance: "4.6 km from venue", link: "#rsvp" },
    { name: "Palace View Suites", location: "Rambagh, Jaipur", price: "₹11,000 / night", distance: "0.8 km from venue", link: "#rsvp" },
  ],
};

export const faqs = [
  { q: "What time should guests arrive?", a: "Please arrive 30 minutes before each event's listed start time so we can welcome you properly." },
  { q: "Is parking available?", a: "Yes — complimentary valet parking is available at the palace gate for all functions." },
  { q: "Is the wedding venue indoor or outdoor?", a: "The Haldi, Mehendi and Wedding are outdoors on the lawns; the Sangeet and Reception are indoors." },
  { q: "What should I wear?", a: "Each function has its own colour story — see the Dress Code section for guidance." },
  { q: "Can I bring additional guests?", a: "Your invitation lists the number of seats reserved for you. Do mention extra guests in your RSVP and we'll do our best." },
  { q: "Are children welcome?", a: "Absolutely. There is a supervised play corner and a kids' menu at every function." },
  { q: "What meal options are available?", a: "Vegetarian, non-vegetarian, vegan and Jain menus are served at all events." },
  { q: "Where can I stay?", a: "See Travel & Stay for hotels with negotiated wedding rates near the palace." },
  { q: "How do I RSVP?", a: "Fill in the RSVP form on this page, ideally before 15 November 2026." },
];