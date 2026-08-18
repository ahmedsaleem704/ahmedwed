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
import { Faqs } from "@/components/wedding/Faqs";
import { Guestbook } from "@/components/wedding/Guestbook";
import { ThankYou } from "@/components/wedding/ThankYou";
import { couple, venue } from "@/data/wedding";

const title = "Ahmed & Aqsa — Wedding Invitation | 2 November 2026";
const description =
  "Join Ahmed & Aqsa in Islamabad this November. Events, love story, gallery, RSVP, venue and travel details for the wedding celebration.";

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
          location: {
            "@type": "Place",
            name: venue.name,
            address: { "@type": "PostalAddress", streetAddress: venue.address, addressLocality: "Islamabad", addressCountry: "PK" },
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
        <Faqs />
        <Guestbook />
      </main>
      <ThankYou />
    </div>
  );
}
