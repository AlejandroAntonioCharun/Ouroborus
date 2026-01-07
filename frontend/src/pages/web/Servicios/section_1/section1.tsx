export default function Trabajo() {
  return (
    <main className="w-full flex-auto mb-12">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
        <div className="max-w-5xl">
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              Nuestro trabajo
            </span>
            <span className="mt-6 block font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl">
              Soluciones probadas para problemas reales.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            Creemos en la eficiencia y en maximizar nuestros recursos para ofrecer el mayor valor posible a nuestros clientes.
            Reutilizamos y perfeccionamos soluciones que han demostrado funcionar en el mundo real.
          </p>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-40">
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Casos de estudio
        </h2>

        <div className="mt-16 space-y-32">

          {/* ---------- Caso 1 ---------- */}
          <article className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative
            before:absolute after:absolute
            before:bg-neutral-950 after:bg-neutral-950/10
            before:top-0 before:left-0 before:h-px before:w-6
            after:top-0 after:left-8 after:right-0 after:h-px">

            <div className="col-span-full lg:col-span-1">
              <h3 className="mt-6 text-sm font-semibold text-neutral-950">
                FamilyFund
              </h3>

              <p className="mt-2 text-sm text-neutral-950">
                Desarrollo web · CMS
              </p>

              <p className="mt-2 text-sm text-neutral-950">
                Enero 2023
              </p>
            </div>

            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
              <p className="font-display text-4xl font-medium text-neutral-950">
                Saltarse el banco y confiar en quienes conoces
              </p>

              <div className="mt-6 space-y-6 text-neutral-600">
                <p>
                  FamilyFund es una plataforma de crowdfunding para amigos y familia, permitiendo préstamos personales
                  sin necesidad de instituciones financieras tradicionales.
                </p>
                <p>
                  Desarrollamos un CMS personalizado y optimizamos su posicionamiento SEO para palabras clave estratégicas.
                </p>
              </div>

              <a
                href="/work/family-fund"
                className="inline-flex mt-8 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Ver caso de estudio
              </a>

              <div className="pl-8 mt-12 relative
                before:absolute after:absolute
                before:bg-neutral-950 after:bg-neutral-950/10
                before:top-0 before:left-0 before:h-6 before:w-px
                after:top-8 after:bottom-0 after:left-0 after:w-px">

                <blockquote className="text-neutral-600">
                  “Trabajar con Studio se sintió más como una alianza que como una relación cliente-proveedor.”
                </blockquote>

                <p className="mt-6 font-semibold text-neutral-950">
                  Debra Fiscal — CEO de FamilyFund
                </p>
              </div>
            </div>
          </article>

          {/* ---------- Caso 2 ---------- */}
          <article className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative
            before:absolute after:absolute
            before:bg-neutral-950 after:bg-neutral-950/10
            before:top-0 before:left-0 before:h-px before:w-6
            after:top-0 after:left-8 after:right-0 after:h-px">

            <div className="col-span-full lg:col-span-1">
              <h3 className="mt-6 text-sm font-semibold text-neutral-950">
                Unseal
              </h3>

              <p className="mt-2 text-sm text-neutral-950">
                Desarrollo Blockchain
              </p>

              <p className="mt-2 text-sm text-neutral-950">
                Octubre 2022
              </p>
            </div>

            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
              <p className="font-display text-4xl font-medium text-neutral-950">
                Control total de tus datos de salud
              </p>

              <div className="mt-6 space-y-6 text-neutral-600">
                <p>
                  Unseal permite a los usuarios tokenizar y comercializar registros médicos mediante NFTs.
                </p>
                <p>
                  Diseñamos la infraestructura blockchain que soporta la plataforma desde cero.
                </p>
              </div>

              <a
                href="/work/unseal"
                className="inline-flex mt-8 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Ver caso de estudio
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-40">
        <div className="rounded-4xl bg-neutral-950 px-6 py-20 sm:py-32 md:px-12">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Cuéntanos sobre tu proyecto
            </h2>

            <a
              href="/contact"
              className="inline-flex mt-6 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            >
              Hablemos
            </a>

            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Nuestras oficinas
              </h3>

              <ul className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <li className="text-neutral-300 text-sm">
                  <strong className="text-white">Copenhague</strong><br />
                  1 Carlsberg Gate<br />
                  Dinamarca
                </li>
                <li className="text-neutral-300 text-sm">
                  <strong className="text-white">Billund</strong><br />
                  24 Lego Allé<br />
                  Dinamarca
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
