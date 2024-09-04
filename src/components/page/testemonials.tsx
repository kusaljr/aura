import React from "react";

export const TestimonialsTooltip = () => {
  const testimonials = [
    {
      id: "testimonial-01",
      imgSrc: "/assets/property2.png",
      altText: "Testimonial 01",
    },
    {
      id: "testimonial-02",
      imgSrc: "/assets/property.png",
      altText: "Testimonial 02",
    },
    {
      id: "testimonial-03",
      imgSrc: "/assets/property3.png",
      altText: "Testimonial 03",
    },
  ];

  return (
    <div className="relative font-inter antialiased">
      <main className="relative  flex flex-col justify-center  overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <section className="text-center">
            <div className="font-nycd text-xl text-primary mb-4">
              <span className="relative inline-flex">
                <span>Our promise</span>
                <svg
                  className="fill-indigo-500 absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="132"
                  height="4"
                >
                  <path
                    fillOpacity=".4"
                    fillRule="evenodd"
                    d="M131.014 2.344s-39.52 1.318-64.973 1.593c-25.456.24-65.013-.282-65.013-.282C-.34 3.623-.332 1.732.987 1.656c0 0 39.52-1.32 64.973-1.593 25.455-.24 65.012.282 65.012.282 1.356.184 1.37 1.86.042 1.999"
                  />
                </svg>
              </span>
            </div>
            <div className="text-5xl leading-tight font-bold text-slate-900">
              {testimonials.map((testimonial, index) => (
                <React.Fragment key={testimonial.id}>
                  <span
                    className={`[&:has(~.active)]:opacity-25 [&.active~*]:opacity-25 transition-opacity duration-200`}
                  >
                    {index === 0 && "Your Next Investment Awaits"}
                    {index === 1 && "Opportunities in Homes & Apartments"}
                    {index === 2 && "Achieve Strong Returns"}
                  </span>
                  <TestimonialButton
                    id={testimonial.id}
                    imgSrc={testimonial.imgSrc}
                    altText={testimonial.altText}
                  />
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

interface TestimonialButtonProps {
  id: string;
  imgSrc: string;
  altText: string;
}

const TestimonialButton = ({ id, imgSrc, altText }: TestimonialButtonProps) => {
  return (
    <div
      className={`relative inline-flex justify-center w-[52px] h-[52px] align-middle -translate-y-1 `}
    >
      <button
        className={`h-full w-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-[20px]  transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] delay-100`}
        aria-labelledby={id}
      >
        <img
          className="absolute top-1/2 -translate-y-1/2 rounded-[inherit]"
          src={imgSrc}
          width="52"
          height="52"
          alt={altText}
        />
      </button>
    </div>
  );
};
