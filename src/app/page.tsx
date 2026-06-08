import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BandSoho from "@/components/BandSoho";
import Why from "@/components/Why";
import Brands from "@/components/Brands";
import Reviews from "@/components/Reviews";
import BandTrain from "@/components/BandTrain";
import Lojas from "@/components/Lojas";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="top">
        <Hero />
        <Categories />
        <BandSoho />
        <Why />
        <Brands />
        <Reviews />
        <BandTrain />
        <Lojas />
        <Contato />
      </main>
      <Footer />
      <WaFloat />
      <RevealInit />
    </>
  );
}
