import { useEffect, useRef } from "react";

const logos: string[] = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
];

const SPEED = 0.2; 

const InfiniteLogoCarousel = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 2;
    let rafId: number;

    const animate = () => {
      positionRef.current += SPEED;

      // 🔁 reset EXACTO sin salto
      if (positionRef.current >= singleSetWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(-${positionRef.current}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="w-full bg-black py-16">
      {/* Title */}
      <h2 className="mb-10 text-center text-sm uppercase tracking-widest text-gray-400">
        Empresas que confían en nosotros
      </h2>

      <div className="relative overflow-hidden">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Empresa"
                className="h-[40px] w-[150px] object-contain opacity-70 transition hover:opacity-100"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InfiniteLogoCarousel;
