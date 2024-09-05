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
          <div className="items-center space-y-3 sm:flex sm:space-y-0">
            <div>
              <form action="" className="w-full mt-12">
                <div className="relative flex items-center rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                  <div className="pl-6 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    autoComplete="email"
                    placeholder="Your mail address"
                    className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent"
                    type="email"
                  />
                  <div className="md:pr-1.5 lg:pr-0">
                    <Link to={"/contact"}>
                      <button
                        type="button"
                        title="Start buying"
                        className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                      >
                        <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                          Contact Us
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
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
