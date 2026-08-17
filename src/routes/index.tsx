import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/wedding/SiteNav";
import { Ambience } from "@/components/wedding/Ambience";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { LoveStory } from "@/components/wedding/LoveStory";
import { Events } from "@/components/wedding/Events";
import { Gallery } from "@/components/wedding/Gallery";
import { ScratchCard } from "@/components/wedding/ScratchCard";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Venue } from "@/components/wedding/Venue";
import { Family } from "@/components/wedding/Family";
import { Hashtag } from "@/components/wedding/Hashtag";
import { DressCode } from "@/components/wedding/DressCode";
import { Travel } from "@/components/wedding/Travel";
import { Faqs } from "@/components/wedding/Faqs";
import { Guestbook } from "@/components/wedding/Guestbook";
import { ThankYou } from "@/components/wedding/ThankYou";
import { couple, venue } from "@/data/wedding";

const title = "Vijay & Rashima — Wedding Invitation | Theplanify";
const description =
  "Join Vijay & Rashima in Jaipur this December. Events, love story, gallery, RSVP, venue and travel details — by Theplanify, India's trusted event planning platform.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: `${couple.groom} weds ${couple.bride}`,
          startDate: couple.weddingDate,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          description,
          organizer: { "@type": "Organization", name: "Theplanify" },
          location: {
            "@type": "Place",
            name: venue.name,
            address: { "@type": "PostalAddress", streetAddress: venue.address, addressLocality: "Jaipur", addressCountry: "IN" },
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Ambience />
      <SiteNav />
      <main className="relative z-10">
        <h1 className="sr-only">Vijay and Rashima's wedding — Jaipur, December 2026</h1>
        <Hero />
        <Countdown />
        <LoveStory />
        <Events />
        <Gallery />
        <ScratchCard />
        <Hashtag />
        <Rsvp />
        <Venue />
        <Family />
        <DressCode />
        <Travel />
        <Faqs />
        <Guestbook />
      </main>
      <ThankYou />
    </div>
  );
}