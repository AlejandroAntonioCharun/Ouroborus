import servicesImage from "../../../../assets/Imagenes/inicio-imagen-section5.png"; // cambia por tu imagen

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-widest text-red-600">
            Conoce más de nuestros servicios
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black">
            Soluciones digitales diseñadas para crecer contigo
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Acompañamos a empresas y emprendedores en su proceso de
            transformación digital con soluciones estratégicas,
            escalables y alineadas a su visión de negocio.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={servicesImage}
                alt="Servicios digitales"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Services list */}
          <div className="space-y-10">

            {/* Service item */}

            <div>
                <h3 className="text-xl font-semibold text-black inline">
                    Desarrollo de Software a Medida
                </h3>

                <p className="inline text-gray-500 ml-2">
                   soluciones basadas en software, con una integración y despliegue continuo, con altos estandares de seguridad, alineadas
a los objetivos estratégicos de tu negocio.
                </p>

                {/* Líneas decorativas */}
                <div className="mt-4 mb-3 flex items-center gap-3">
                    {/* HR corto */}
                    <hr className="w-10 border-slate-500 " />

                    {/* HR largo */}
                    <hr className="w-full border-black/20" />
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-black inline">
                    Desarrollo Web
                </h3>

                <p className="inline text-gray-500 ml-2">
                    plataformas modernas, rápidas y orientadas a resultados.
                </p>

                {/* Líneas decorativas */}
                <div className="mt-4 mb-3 flex items-center gap-3">
                    {/* HR corto */}
                    <hr className="w-10 border-slate-500 " />

                    {/* HR largo */}
                    <hr className="w-full border-black/20" />
                </div>
            </div>


            {/* Service item */}

            <div>
                <h3 className="text-xl font-semibold text-black inline">
                    Arquitecturas Empresariales
                </h3>

                <p className="inline text-gray-500 ml-2">
                    Implementamos arquitecturas basadas en TOGAFG, Zachman, FEAF, GARTNER, ARCHIMATE.
                </p>

                {/* Líneas decorativas */}
                <div className="mt-4 mb-3 flex items-center gap-3">
                    {/* HR corto */}
                    <hr className="w-10 border-slate-500 " />

                    {/* HR largo */}
                    <hr className="w-full border-black/20" />
                </div>
            </div>

            {/* Service item */}

            <div>
                <h3 className="text-xl font-semibold text-black inline">
                    Transformación Digital
                </h3>

                <p className="inline text-gray-500 ml-2">
                    procesos optimizados con tecnología estratégica.
                </p>

                {/* Líneas decorativas */}
                <div className="mt-4 mb-3 flex items-center gap-3">
                    {/* HR corto */}
                    <hr className="w-10 border-slate-500 " />

                    {/* HR largo */}
                    <hr className="w-full border-black/20" />
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-black inline">
                    Auditorias de Seguridad de la Información
                </h3>

                <p className="inline text-gray-500 ml-2">
                    Evaluamos y fortalecemos la seguridad de la información para proteger los datos críticos y garantizar el cumplimiento normativo.
                </p>

                {/* Líneas decorativas */}
                <div className="mt-4 mb-3 flex items-center gap-3">
                    {/* HR corto */}
                    <hr className="w-10 border-slate-500 " />

                    {/* HR largo */}
                    <hr className="w-full border-black/20" />
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
