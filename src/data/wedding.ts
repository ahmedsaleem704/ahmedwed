import haldiImg from "@/assets/event-haldi.png";
import mehendiImg from "@/assets/event-mehendi.png";
import sangeetImg from "@/assets/event-sangeet.png";
import weddingImg from "@/assets/event-wedding.png";
import receptionImg from "@/assets/event-reception.png";
import coupleHero from "@/assets/couple-hero.png";
import venueImg from "@/assets/venue.jpg";

export const couple = {
  bride: "Aqsa",
  groom: "Ahmed",
  tagline: "Two Hearts. One Beautiful Beginning.",
  hashtag: "#AhmedWedsAqsa",
  heroImage: coupleHero,
  /** Main wedding ceremony date & time (local). */
  weddingDate: "2026-11-02T19:30:00+05:00",
  weddingDateLabel: "2 November 2026",
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
};

export const events: WeddingEvent[] = [
  {
    id: "haldi",
    name: "Haldi",
    date: "30 October 2026",
    time: "10:00 AM",
    venue: "Aqsa's Residence, Islamabad",
    description:
      "A sunlit morning of turmeric, marigolds and laughter as blessings are showered on the couple.",
    image: haldiImg,
    icon: "sun",
    palette: ["#F6D365", "#FDA085", "#FFF3C4"],
  },
  {
    id: "mehendi",
    name: "Mehendi",
    date: "30 October 2026",
    time: "5:00 PM",
    venue: "The Courtyard Lawn, Islamabad",
    description:
      "Henna artistry, dholak beats and green foliage under a canopy of fairy lights.",
    image: mehendiImg,
    icon: "leaf",
    palette: ["#A7C957", "#6A994E", "#EAF4D3"],
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "1 November 2026",
    time: "8:00 PM",
    venue: "Grand Ballroom, Islamabad",
    description:
      "An evening of choreographed madness, live music and family performances.",
    image: sangeetImg,
    icon: "music",
    palette: ["#F7B2BD", "#C77DFF", "#FFD9A0"],
  },
  {
    id: "wedding",
    name: "Wedding",
    date: "2 November 2026",
    time: "7:30 PM",
    venue: "Ahmed Home, Islamabad",
    description:
      "The sacred pheras beneath a flower-laden mandap, in warm golden light.",
    image: weddingImg,
    icon: "flame",
    palette: ["#C1121F", "#F2C078", "#FFF1D0"],
  },
  {
    id: "reception",
    name: "Reception",
    date: "3 November 2026",
    time: "7:00 PM",
    venue: "Chandelier Hall, Islamabad",
    description:
      "Champagne toasts, chandeliers and one last dance before forever begins.",
    image: receptionImg,
    icon: "sparkles",
    palette: ["#E9D8A6", "#F4E3D7", "#BFA46F"],
  },
];

export const loveStory = [
  {
    date: "June 2017",
    title: "First Meet",
    text: "A crowded Islamabad wedding, a spilled cup of chai, and an apology that lasted three hours.",
    image: mehendiImg,
  },
  {
    date: "June 2017",
    title: "First Date",
    text: "Kulfi on a quiet road while the monsoon decided to join them, uninvited.",
    image: sangeetImg,
  },
  {
    date: "April 2025",
    title: "The Proposal",
    text: "A rooftop full of diyas, a hidden ring box, and a yes before the question ended.",
    image: receptionImg,
  },
  {
    date: "November 2026",
    title: "Forever Begins",
    text: "And now, surrounded by everyone they love, the pheras that make it forever.",
    image: weddingImg,
  },
];

export const gallery = [
  { src: coupleHero, alt: "Ahmed and Aqsa illustrated in blush and cream wedding attire", span: "tall" },
  { src: haldiImg, alt: "The couple at their Haldi ceremony surrounded by marigolds", span: "short" },
  { src: venueImg, alt: "Ahmed Home decorated with a floral mandap at dusk", span: "wide" },
  { src: mehendiImg, alt: "The couple in green outfits during the Mehendi celebration", span: "tall" },
  { src: sangeetImg, alt: "Ahmed and Aqsa dancing at the Sangeet night", span: "short" },
  { src: receptionImg, alt: "The couple dressed in formal attire for the reception", span: "tall" },
  { src: weddingImg, alt: "Ahmed and Aqsa at the wedding mandap in red and gold", span: "short" },
];

export const venue = {
  name: "Ahmed Home",
  address: "HR4M+HJ Islamabad, Pakistan",
  image: venueImg,
  dateTime: "2 November 2026 · 7:30 PM onwards",
  mapEmbed:
    "https://www.google.com/maps?q=HR4M%2BHJ+Islamabad%2C+Pakistan&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=HR4M%2BHJ+Islamabad%2C+Pakistan",
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

export const faqs = [
  { q: "What time should guests arrive?", a: "Please arrive 30 minutes before each event's listed start time so we can welcome you properly." },
  { q: "Is parking available?", a: "Yes — complimentary parking is available near the venue for all functions." },
  { q: "Is the wedding venue indoor or outdoor?", a: "The Haldi, Mehendi and Wedding are outdoors on the lawns; the Sangeet and Reception are indoors." },
  { q: "Can I bring additional guests?", a: "Your invitation lists the number of seats reserved for you. Do mention extra guests in your RSVP and we'll do our best." },
  { q: "Are children welcome?", a: "Absolutely. There is a supervised play corner and a kids' menu at every function." },
  { q: "How do I RSVP?", a: "Fill in the RSVP form on this page, ideally before 1 October 2026." },
];
