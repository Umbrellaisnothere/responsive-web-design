import highlight from "../../../../assets/images/highlight.svg";
import heroImage from "../../../../assets/images/hero-image.svg";

import { BsStarFill } from "react-icons/bs";

function HeroSection() {

  return (
    <section className="flex min-h-[55vh] items-center justify-between bg-gradient-to-t from-[#E9F8FF] to-white lg:min-h-[80vh]">
      <div className="flex flex-col gap-6 p-4 lg:pl-10">
        <h1 className="lg:text-7xl text-5xl font-bold">
          Start accepting{" "}
          <span className="relative">
            payments <img 
            src={highlight} 
            alt="Highlight" 
            className="absolute top-0 h-20 w-full lg:h-28" />{" "}
          </span>{" "}
          in 3 minutes
        </h1>

        <h2 className="font text-2xl font-semibold">
          Integrate xyz payment gateway without any technical knowledge.
        </h2>

        {/*Buttons*/}
        <div className="flex gap-4">
          <button className="bg-primary flex w-fit items-center gap-2 rounded-lg px-2 py-2 text-white/90 md:px-4">
            Start Now
          </button>
          <button className="flex w-fit items-center gap-2 rounded-lg border-2 border-black p-2 py-2 md:px-4">
            Read the developer docs
          </button>
        </div>

        {/*Ratings*/}
          <div>
          <div className="flex items-center gap-8">
            <h3 className="text-5xl font-bold">4.7</h3>

            <div className="flex flex-col gap-2">
              <p className="lowercase">
                Top rated on Trust Pilot
              </p>

              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <BsStarFill key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/*Image*/}
        <img 
        src={heroImage} 
        alt="Hero Image" 
        className="hidden lg:flex"
        />
      </div>
    </section>
  );
}

export default HeroSection;
