import { ChartSection } from "./components/page/chart";
import { Footer } from "./components/page/footer";
import { HeaderSection } from "./components/page/header";
import HeroSection from "./components/page/hero";
import { ServicesSection } from "./components/page/services";
import StatsSection from "./components/page/stats";
import { TestimonialsTooltip } from "./components/page/testemonials";

function App() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ChartSection />
      <TestimonialsTooltip />
      <Footer />
    </>
  );
}

export default App;
