import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      budget: formData.get("budget") as string,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setNotification({
        type: "success",
        message: "Mensaje enviado correctamente. Te contactaremos pronto.",
      });

      form.reset();
    } catch (error) {
      console.error("Error enviando email:", error);
      setNotification({
        type: "error",
        message: "Ocurrió un error. Inténtalo nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex-auto mb-32">

      {/* ================== HERO ================== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-5xl">
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              Contáctanos
            </span>
            <span className="mt-6 block font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl">
              Trabajemos juntos
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Estamos listos para escuchar tu idea.
          </p>
        </div>
      </section>

      {/* ================== CONTENIDO ================== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-12 gap-y-24 lg:grid-cols-2">

          {/* ================== FORMULARIO ================== */}
          <div className="lg:order-last">
            <form onSubmit={handleSubmit} className="space-y-10">
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Solicitudes de trabajo
              </h2>

              <div className="isolate -space-y-px bg-white/50">

                {[
                  { id: "name", label: "Nombre", type: "text" },
                  { id: "email", label: "Correo electrónico", type: "email" },
                  { id: "company", label: "Empresa", type: "text" },
                  { id: "phone", label: "Teléfono", type: "tel" },
                  { id: "message", label: "Mensaje", type: "text" },
                ].map((field) => (
                  <div key={field.id} className="group relative z-0">
                    <input
                      required
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder=" "
                      className="
                        peer block w-full border border-neutral-300 bg-transparent
                        px-6 pt-12 pb-4 text-neutral-950
                        ring-4 ring-transparent transition
                        focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-none
                      "
                    />
                    <label
                      htmlFor={field.id}
                      className="
                        pointer-events-none absolute top-1/2 left-6 -mt-3
                        origin-left text-neutral-500 transition-all duration-200
                        peer-not-placeholder-shown:-translate-y-4
                        peer-not-placeholder-shown:scale-75
                        peer-not-placeholder-shown:font-semibold
                        peer-not-placeholder-shown:text-neutral-950
                        peer-focus:-translate-y-4 peer-focus:scale-75
                        peer-focus:font-semibold peer-focus:text-neutral-950
                      "
                    >
                      {field.label}
                    </label>
                  </div>
                ))}

                {/* Presupuesto */}
                <div className="border border-neutral-300 px-6 py-8 rounded-b-2xl">
                  <fieldset>
                    <legend className="text-neutral-500">
                      Presupuesto estimado
                    </legend>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {[
                        "$25K – $50K",
                        "$50K – $100K",
                        "$100K – $150K",
                        "Más de $150K",
                      ].map((value) => (
                        <label key={value} className="flex gap-x-3 items-center">
                          <input
                            type="radio"
                            name="budget"
                            value={value}
                            className="
                              h-6 w-6 appearance-none rounded-full
                              border border-neutral-950/20
                              checked:border-[0.5rem] checked:border-neutral-950
                            "
                          />
                          <span className="text-neutral-950">{value}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex rounded-full bg-neutral-950
                  px-6 py-2 text-sm font-semibold text-white
                  transition hover:bg-neutral-800 disabled:opacity-50
                "
              >
                {loading ? "Enviando..." : "Trabajemos juntos"}
              </button>
            </form>
          </div>

          {/* ================== INFO ================== */}
          <div>
            <h2 className="font-display text-base font-semibold text-neutral-950">
              Nuestras oficinas
            </h2>

            <p className="mt-6 text-neutral-600 max-w-md">
              ¿Prefieres una reunión presencial? Estas son nuestras ubicaciones.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <li>
                <address className="not-italic text-sm text-neutral-600">
                  <strong className="text-neutral-950">Copenhague</strong><br />
                  1 Carlsberg Gate<br />
                  1260, Dinamarca
                </address>
              </li>
              <li>
                <address className="not-italic text-sm text-neutral-600">
                  <strong className="text-neutral-950">Billund</strong><br />
                  24 Lego Allé<br />
                  7190, Dinamarca
                </address>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================== NOTIFICACIÓN ================== */}
      {notification && (
        <div
          className={`
            fixed bottom-6 right-6 z-50
            rounded-xl px-4 py-3 text-sm shadow-lg
            backdrop-blur-xl
            ${
              notification.type === "success"
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            }
          `}
        >
          {notification.message}
        </div>
      )}
    </main>
  );
}
