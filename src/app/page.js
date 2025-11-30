import { Header } from "../../widgets/header";
import { FirstMain } from "../../widgets/firstMain";
import { SecondMain } from "../../widgets/secondMain";
import { ThirdMain } from "../../widgets/thirdMain";
import { Footer } from "../../widgets/footer";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center pb-12"
               style={{ backgroundImage: "url('/bgFirst.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <FirstMain />
        </div>
      </section>

      <section className="min-h-screen bg-cover bg-center bg-fixed relative py-16"
               style={{ backgroundImage: "url('/bgSecond.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div id="anime">
              <SecondMain />
          </div>
          <div id="manga">
              <ThirdMain />
          </div>
        </div>
      </section>


      <section className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
               style={{ backgroundImage: "url('/BgThird.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" id="randomAnime">
          <Footer />
        </div>
      </section>
    </>
  );
}