import Avantages from "./ui/Avantages/Avantages";
import Contact from "./ui/Contact/contact";
import Hero from "./ui/Hero/Hero";
import Informations from "./ui/Informations/Informations";
import Navbar from "./ui/Navbar/Navbar";
import SavoirPlus from "./ui/SavoirPlus/SavoirPlus";
import ScrollToTopButton from "./ui/ScrollToTopButton";


export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar/>
      </header>
      <main className="">
        <ScrollToTopButton/>
        <Hero/>
        <Informations/>
        <Avantages/>
        <SavoirPlus/>
        <Contact/>
      </main>
    </div>
  );
}
