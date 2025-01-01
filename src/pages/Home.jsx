import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import LatestCollection from "../components/LatestCollection";
import WomensPromo from "../components/WomensPromo";
import Policy from "../components/Policy";
import NewsLetter from "../components/NewsLetter";
import Promo from "../components/Promo";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promo />
      <NewArrivals />
      <WomensPromo />
      <LatestCollection />
      <div className="px-4 sm:px-6 lg:px-8">
        <Policy />
        <NewsLetter />
      </div>
    </div>
  );
}
