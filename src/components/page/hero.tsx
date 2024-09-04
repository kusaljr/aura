import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function HeroSection() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-black font-medium">
            Over 100 successful deals
          </h1>
          <h2 className="text-4xl text-primary font-extrabold md:text-6xl">
            Next Real State Investment Opportunity Awaits
          </h2>
          <p>
            We offers investment opportunities in single-family homes,
            apartments, and commercial buildings for strong returns.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to="/contact"
              className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150  rounded-lg shadow-lg hover:shadow-none"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-lg">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <img src="/assets/property.png" alt="home" />
              </CarouselItem>
              <CarouselItem>
                <img src="/assets/property2.png" alt="home" />
              </CarouselItem>
              <CarouselItem>
                <img src="/assets/property3.png" alt="home" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
