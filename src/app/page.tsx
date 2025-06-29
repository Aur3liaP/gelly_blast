import Navbar from "./ui/Navbar/Navbar";
import ScrollToTopButton from "./ui/ScrollToTopButton";


export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar/>
      </header>
      <main className="mt-[12vh] w-[90%] max-w-[1440px] mx-auto ">
        <ScrollToTopButton/>

      </main>
    </div>
  );
}
