const ImpactStatsSection = () => {
  return (
    <section className="relative w-full py-24">
      {/* Fondo gradiente + blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-red-700 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Nuestros Resultados
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Trabajamos con empresas que buscan algo más que una sistema tecnológico.<br></br>
            Diseñamos experiencias digitales alineadas a su visión,
            estrategia y crecimiento.
          </p>
        </div>

        {/* Stats container */}
        <div
          className="
            flex flex-col md:flex-row
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-black/40 backdrop-blur-2xl
          "
        >

          {/* Stat 1 */}
          <div className="flex-1 px-8 py-12 hover:bg-white/5 transition">
            <span className="text-6xl font-bold text-white">91%</span>
            <p className="mt-4 text-gray-300">
              de nuestros clientes prefieren una web
              completamente personalizada y alineada a su marca.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/10" />

          {/* Stat 2 */}
          <div className="flex-1 px-8 py-12 hover:bg-white/5 transition">
            <span className="text-6xl font-bold text-white">89%</span>
            <p className="mt-4 text-gray-300">
              confía su transformación digital en nosotros
              como partner tecnológico.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/10" />

          {/* Stat 3 */}
          <div className="flex-1 px-8 py-12 hover:bg-white/5 transition">
            <span className="text-6xl font-bold text-white">72%</span>
            <p className="mt-4 text-gray-300">
              nos considera su socio estratégico
              en decisiones clave de negocio y tecnología.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
