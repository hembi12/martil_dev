import Hero from "../components/home/Hero";
import Trust from "../components/home/Trust";
import Services from "../components/home/Services/Services";
import WorkProcess from "../components/home/WorkProcess/WorkProcess";
import PaymentMethods from "../components/home/PaymentMethods";
import Reviews from "../components/home/Reviews/Reviews";
import FAQ from "../components/home/FAQ";

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
