import { useState } from "react";
import emailjs from "@emailjs/browser";

type StatusType = {
  type: "success" | "error";
  message: string;
};

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusType | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      consent: (form.elements.namedItem("consent") as HTMLInputElement).checked,
    };

    if (!data.consent) {
      setStatus({
        type: "error",
        message: "Debes aceptar el tratamiento de datos",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          company: data.company,
          role: data.role,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Mensaje enviado correctamente",
      });

      form.reset();
    } catch (error) {
      console.error("Error enviando email:", error);
      setStatus({
        type: "error",
        message: "Ocurrió un error al enviar el mensaje",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen py-24 lg:py-0 bg-gradient-to-r from-black from-25% via-black via-40% to-red-700 flex items-start lg:items-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* TEXT */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-xl mx-auto lg:mx-0">
              Inicia la transformación digital de tu empresa
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Descubre soluciones innovadoras y personalizadas para llevar tu
              negocio al siguiente nivel con nuestra experiencia en desarrollo
              web y tecnología.
            </p>
          </div>

          {/* FORMULARIO */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/40 px-6 py-8 sm:px-10 sm:py-12">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-8">
              Conversemos
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">

              <input name="name" required type="text" placeholder="Nombre y apellido"
                className="w-full required bg-transparent border-b border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input name="company" type="text" placeholder="Empresa"
                  className="w-full required bg-transparent border-b border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2" />

                <select name="role"
                  className="w-full required bg-transparent border-b border-white/20 text-gray-400 focus:outline-none focus:border-white pb-2">
                  <option className="text-black" value="">¿Quién eres?</option>
                  <option className="text-black">Empresa</option>
                  <option className="text-black">Emprendedor</option>
                  <option className="text-black">Startup</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input name="email" required type="email" placeholder="Correo"
                  className="w-full  required bg-transparent border-b border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2" />

                <input name="phone" type="tel" placeholder="Teléfono"
                  className="w-full required bg-transparent border-b border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2" />
              </div>

              <textarea name="message" required rows={2}
                placeholder="Ingresa la descripción de tu proyecto/negocio"
                className="w-full required bg-transparent border-b border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white pb-2 resize-none" />

              <div className="flex items-start gap-x-3 text-xs text-gray-400">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="
                    accent-white
                    mt-0
                    w-4 h-4
                    cursor-pointer
                    touch-manipulation
                  "
                />
                <label
                  htmlFor="consent"
                  className="cursor-pointer select-none"
                >
                  Acepto el tratamiento de datos personales
                </label>
              </div>


              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full border border-white/40 py-2.5 text-sm text-white hover:bg-white hover:text-black transition disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Empezar"}
              </button>

              {status && (
                <p
                  className={`text-sm text-center ${
                    status.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
