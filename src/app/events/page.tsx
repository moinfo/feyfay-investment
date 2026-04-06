import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events",
  description: "Browse all upcoming entertainment and empowerment events organized by Feyfay Events.",
};

export default function EventsPage() {
  return <EventsClient />;
}
