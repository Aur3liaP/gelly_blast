import Hero from "./ui/Hero/Hero";
import Navbar from "./ui/Navbar/Navbar";
import ScrollToTopButton from "./ui/ScrollToTopButton";


export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar/>
      </header>
      <main className="mx-auto ">
        <ScrollToTopButton/>
        <Hero/>
      </main>
    </div>
  );
}
