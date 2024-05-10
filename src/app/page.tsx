"use client";
import { fetchData } from "@/api/api";
import { AudioPlayer } from "@/components/audio-player/audio-player";
import { ContactsSection } from "@/sections/contacts-section";
import { DescriptionSection } from "@/sections/description-section";
import { EquipmentSection } from "@/sections/equipment-section";
import { ExamplesSection } from "@/sections/examples-section";
import { HeroSection } from "@/sections/hero-section";
import { PhotosSection } from "@/sections/photos-section";
import { ReviewsSection } from "@/sections/reviews-section";
import { ServicesSection } from "@/sections/services-section";
import { VideoButtonSection } from "@/sections/video-button-section";
import { WhySection } from "@/sections/why-section";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["page"],
    queryFn: () => fetchData(),
  });

  return (
    <>
      <HeroSection />
      <VideoButtonSection />
      <DescriptionSection />
      <WhySection />
      <ExamplesSection />
      <ServicesSection />
      <EquipmentSection />
      <PhotosSection />
      <ReviewsSection />
      <ContactsSection />
      {/* <AudioPlayer trackSrc={tracks.data[0].src.url} /> */}
    </>
  );
}
