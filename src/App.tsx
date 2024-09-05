import { ChartSection } from "./components/page/chart";
import { Footer } from "./components/page/footer";
import { HeaderSection } from "./components/page/header";
import HeroSection from "./components/page/hero";
import { InvestCarousel } from "./components/page/promise";
import { ServicesSection } from "./components/page/services";
import StatsSection from "./components/page/stats";

function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ChartSection />
      <InvestCarousel />
      <Footer />
    </>
  );
}

export default App;
