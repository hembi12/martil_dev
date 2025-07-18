import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services/Services";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import PaymentMethods from "../components/PaymentMethods";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <WorkProcess />
      <PaymentMethods />
      <Reviews />
      <FAQ />
    </>
  );
}
