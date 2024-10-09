import Benefits from "./_components/benefits";
import Features from "./_components/features";
import Introduction from "./_components/introduction";
import Tagline from "./_components/tagline";

export default function Home() {
  return (
    <section>
      <Introduction />
      <Features />
      <Benefits />
      <Tagline />
    </section>
  );
}
