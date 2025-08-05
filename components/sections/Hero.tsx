"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find the <span className="text-blue-600">Perfect Gear</span> for Your Journey
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            From everyday essentials to adventure‑ready packs, our collection is
            designed to keep you moving with comfort and style.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Featured Backpack"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
