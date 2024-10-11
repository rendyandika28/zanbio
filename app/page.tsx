"use client";
import { InView } from "react-intersection-observer";

import Benefits from "./_components/benefits";
import Features from "./_components/features";
import Introduction from "./_components/introduction";
import Tagline from "./_components/tagline";

import useMenuStore from "@/store/use-menu-store";
import { metaBenefitsOfAP, metaBenefitsOfAR } from "@/constant/benefits";

export default function Home() {
  const setActiveMenu = useMenuStore((state) => state.setActiveMenu);
  const getActiveSection = (inView: boolean, sectionId: string) => {
    if (inView) {
      setActiveMenu(sectionId as string);
    }
  };

  return (
    <main>
      <InView
        as="div"
        id="introduction"
        threshold={0.4}
        onChange={(inView) => getActiveSection(inView, "introduction")}
      >
        <Introduction />
      </InView>
      <InView
        as="div"
        id="features"
        threshold={0.4}
        onChange={(inView) => getActiveSection(inView, "features")}
      >
        <Features />
      </InView>
      <InView
        as="div"
        id="benefits"
        threshold={0.4}
        onChange={(inView) => getActiveSection(inView, "benefits")}
      >
        <Benefits metaBenefits={metaBenefitsOfAR} />
      </InView>
      <Benefits metaBenefits={metaBenefitsOfAP} />
      <Tagline />
    </main>
  );
}
