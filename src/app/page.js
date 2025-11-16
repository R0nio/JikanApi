import { Header } from "../../widgets/header";
import { FirstMain } from "../../widgets/firstMain";
import { SecondMain } from "../../widgets/secondMain";
import { ThirdMain } from "../../widgets/thirdMain";
import { Footer } from "../../widgets/footer";

export default function Home() {
  return (
    <div>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[url('/bgFirst.jpg')] bg-cover bg-center -z-3 -top-3" />
        <div className="max-w-[1200px] mx-auto my-0 pb-12">
          <header name="header">
            <Header />
          </header>
          <main>
            <FirstMain />
          </main>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-0 bg-[url('/bgSecond.jpg')] bg-cover bg-center -z-2 -top-2" />
        <div className="max-w-[1200px] mx-auto my-0">
          <main id="anime">
            <SecondMain />
          </main>
          <main id="manga">
            <ThirdMain />
          </main>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[url('/BgThird.jpg')] bg-cover bg-center -z-2 " />
        <div className="max-w-[1200px] mx-auto my-0">
          <footer id="randomAnime">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}