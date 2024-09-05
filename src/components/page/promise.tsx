import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ChartLine, Lightbulb, ShieldCheck, Users } from "lucide-react";
import * as React from "react";

export function InvestCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div
      className={cn(
        "w-full text-primary-foreground lg:mx-10 mx-0 rounded-xl my-10"
      )}
    >
      <h2 className="text-2xl px-10 lg:px:0 text-center py-5 font-bold text-gray-800 dark:text-white md:text-4xl">
        Why <span className="text-primary">Invest</span> With Us?
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-screen-2xl mx-auto rounded-xl "
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-xl h-60 flex items-center justify-center">
                {/* Blurred background image */}
                <div
                  style={{
                    backgroundColor: "#f4eded",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: "blur(20px)",
                  }}
                  className="absolute inset-0"
                />

                {/* Foreground content */}
                <div className="relative z-10 flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-56 p-6">
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0 text-gray-800" />
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg mt-1 max-w-2xl text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

const carouselItems = [
  {
    icon: ChartLine,
    title: "Consistent Rental Income",
    description:
      "Steady cash flow from well-managed properties, delivering reliable returns to investors.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Acquisitions",
    description:
      "Targeted property investments in high-growth areas to maximize value appreciation.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Mitigation",
    description:
      "Diversified portfolios and comprehensive due diligence to minimize investment risks.",
  },
  {
    icon: Users,
    title: "Expert Management Team",
    description:
      "A team with deep industry experience, ensuring optimal property performance and growth.",
  },
];
