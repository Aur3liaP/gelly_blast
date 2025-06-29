import Avantages from "./ui/Avantages/Avantages";
import Hero from "./ui/Hero/Hero";
import Informations from "./ui/Informations/Informations";
import Navbar from "./ui/Navbar/Navbar";
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
      </main>
    </div>
  );
}
