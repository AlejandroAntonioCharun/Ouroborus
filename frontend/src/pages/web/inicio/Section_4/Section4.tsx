import { useEffect, useRef, useState } from "react";
import bgImg from "../../../../assets/Imagenes/inicio-imagen-section4.png";

type Testimonial = {
  quote: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Trabajar con Ouroboros transformó por completo nuestra presencia digital.",
    author: "Andrea Müller",
  },
  {
    quote:
      "No solo desarrollaron nuestra web, se convirtieron en socios estratégicos.",
    author: "Carlos Fernández",
  },
  {
    quote:
      "Entendieron nuestra visión y la llevaron a un nivel superior.",
    author: "Sofía Lindström",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const total = testimonials.length;

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  return (
    <section className="relative w-full overflow-hidden py-32">

      {/* ===== Background ===== */}
      <div className="absolute inset-0 -z-10 bg-white">
        {/* Imagen / SVG como fondo */}
        <img
          src={bgImg}
          alt=""
          className="h-full w-full object-cover opacity-12"
        />

        {/* Gradiente + glassmorphism */}
        <div className="absolute inset-0" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-2xl md:text-3xl font-light text-black leading-relaxed">
          “{testimonials[index].quote}”
        </p>

        <p
          className="mt-10 text-lg font-bold italic text-black tracking-wide"
          style={{ fontFamily: "cursive" }}
        >
          — {testimonials[index].author}
        </p>
      </div>

      {/* ===== Indicator ===== */}
      <div className="absolute bottom-8 right-8 text-sm text-black/70 tracking-wide">
        <span className="font-medium text-black">{index + 1}</span>
        <span className="mx-1">de</span>
        <span>{total}</span>
      </div>
    </section>
  );
};

export default TestimonialsSection;
