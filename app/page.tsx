"use client"
import Benefits from "./_components/benefits";
import Features from "./_components/features";
import Introduction from "./_components/introduction";
import Tagline from "./_components/tagline";

import { InView } from "react-intersection-observer";
import useMenuStore from "@/store/use-menu-store";

export default function Home() {
  const setActiveMenu = useMenuStore(state => state.setActiveMenu)
  const getActiveSection = (inView: boolean, sectionId: string) => {
    if (inView) {
        setActiveMenu(sectionId as string)
    }
  }

  return (
    <main>
      <InView threshold={0.4} id="introduction" as="div" onChange={(inView) => getActiveSection(inView, "introduction")}>
        <Introduction />
      </InView>
      <InView threshold={0.4} id="features" as="div" onChange={(inView) => getActiveSection(inView, "features")}>
        <Features />
      </InView>
      <InView threshold={0.4} id="benefits" as="div" onChange={(inView) => getActiveSection(inView, "benefits")}>
        <Benefits />
      </InView>
      <Tagline />
    </main>
  );
}
