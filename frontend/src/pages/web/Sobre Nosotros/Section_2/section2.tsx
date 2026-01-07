const CultureSection = () => {
  return (
    <section className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-0 lg:py-32">
      
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-white">
                Nuestra cultura
              </span>

              <span className="sr-only"> - </span>

              <span className="block font-display tracking-tight text-balance text-4xl font-medium sm:text-5xl text-white">
                Equilibra tu pasión profesional con tu vida personal.
              </span>
            </h2>

            <div className="mt-6 text-xl text-neutral-300">
              <p>
                Somos un equipo de personas alineadas en valores, que creen en
                la colaboración, el compromiso y el crecimiento constante.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <ul
            role="list"
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Valor 1 */}
            <li className="text-base text-neutral-300">
              <div className="pl-8 relative">
                <span className="absolute left-0 top-0 h-6 w-px bg-white" />
                <span className="absolute left-0 top-8 bottom-0 w-px bg-white/10" />

                <strong className="font-semibold text-white">
                  Lealtad.
                </strong>{" "}
                Nuestro equipo ha crecido con nosotros desde el inicio,
                construyendo relaciones basadas en confianza y compromiso.
              </div>
            </li>

            {/* Valor 2 */}
            <li className="text-base text-neutral-300">
              <div className="pl-8 relative">
                <span className="absolute left-0 top-0 h-6 w-px bg-white" />
                <span className="absolute left-0 top-8 bottom-0 w-px bg-white/10" />

                <strong className="font-semibold text-white">
                  Confianza.
                </strong>{" "}
                Creemos en la autonomía y la responsabilidad, enfocándonos en
                resultados y no en horarios rígidos.
              </div>
            </li>

            {/* Valor 3 */}
            <li className="text-base text-neutral-300">
              <div className="pl-8 relative">
                <span className="absolute left-0 top-0 h-6 w-px bg-white" />
                <span className="absolute left-0 top-8 bottom-0 w-px bg-white/10" />

                <strong className="font-semibold text-white">
                  Empatía.
                </strong>{" "}
                Valoramos a las personas, promoviendo un entorno humano,
                respetuoso y consciente del bienestar individual.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
