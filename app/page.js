import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import HeroBanner from "@/components/HeroBanner";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
