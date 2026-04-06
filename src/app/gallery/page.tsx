import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and highlights from past Feyfay Events — talent shows, sports bonanzas, conferences and more.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
