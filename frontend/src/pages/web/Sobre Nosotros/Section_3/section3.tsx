import lider1 from '../../../../assets/Imagenes/Equipo/imagen-alejandro.jpg';
import lider2 from '../../../../assets/Imagenes/inicio-imagen-section4.png';

export default function Equipo() {
  return (
    <section className="mt-9 px-6 lg:px-12 mb-12">
      <div className="space-y-24">

        {/* ================= LIDERAZGO ================= */}
        <div className="pt-12">
          {/* Separador */}
          <div className="relative mb-12 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:top-0 before:left-0 before:h-px before:w-6 after:top-0 after:right-0 after:left-8 after:h-px" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Título */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Nuestro Equipo
              </h2>
            </div>

            {/* Cards */}
            <div className="lg:col-span-3">
              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <li>
                  <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                    <img
                      src={lider1}
                      alt="Ana Martínez"
                      className="h-96 w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 to-black/0 p-6">
                      <p className="font-display text-base font-semibold tracking-wide text-white">
                        Alejandro Antonio
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Director General (CEO y CTO)
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                    <img
                      src={lider2}
                      alt="Carlos Ramírez"
                      className="h-96 w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 to-black/0 p-6">
                      <p className="font-display text-base font-semibold tracking-wide text-white">
                        Jeffry Aaron
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Director General (CEO)
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
