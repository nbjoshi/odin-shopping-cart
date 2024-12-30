import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <LatestCollection />
      <BestSeller />
      <div className="px-4 sm:px-6 lg:px-8">
        <Policy />
        <NewsLetter />
      </div>
    </div>
  );
}
