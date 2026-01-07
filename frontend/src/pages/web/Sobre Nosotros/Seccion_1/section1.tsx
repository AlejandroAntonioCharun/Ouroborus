const AboutUsSection = () => {
  return (
    <section className="w-full bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* Texto */}
        <div className="max-w-3xl">
          <h2 className="text-sm uppercase font-medium tracking-widest text-red-600">
            Sobre nosotros
          </h2>

          <h3 className="mt-6 text-5xl font-semibold text-black leading-tight">
            Nuestra fortaleza es la colaboración
          </h3>

          <p className="mt-6 mb-12 text-lg font-normal text-black">
            Creemos que nuestra fortaleza reside en un enfoque colaborativo
            que coloca a nuestros clientes en el centro de todo lo que hacemos.
          </p>

          <p className="mt-4 font-light text-black">
            <strong>Ouroboros</strong>  nació cuando dos amigos notaron que muchos estudios de
            desarrollo cobraban el doble de lo que costaría un equipo interno.
            Desde el inicio decidimos hacer las cosas de manera diferente.
          </p>

          <p className="mt-4 font-light text-black">
            En consecuencia, hemos transformado la forma en la que se contratan servicios, siendo nuestro principal foco
            por la calidad, el compromiso y el crecimiento conjunto.
          </p>
          <p className="mt-4 font-light italic text-black">
            por eso cuando trabajamos contigo, nos convertimos en una extensión de tu equipo.
          </p>
        </div>

        {/* Indicadores */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Item */}
          <div className="flex items-start gap-5">
            {/* Línea */}
            <div className="flex flex-col mt-1 gap-1.5">
                <div className="w-[1px] h-5 bg-black" />
                <div className="w-[1px] h-9 bg-slate-300" />
            </div>


            {/* Texto */}
            <div>
              <span className="block text-4xl font-bold text-black leading-none">
                120+
              </span>
              <span className="text-sm text-gray-400">
                Proyectos desarrollados
              </span>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start gap-5">
             <div className="flex flex-col mt-1 gap-1.5">
                <div className="w-[1px] h-5 bg-black" />
                <div className="w-[1px] h-9 bg-slate-300" />
            </div>

            <div>
              <span className="block text-4xl font-bold text-black leading-none">
                8+
              </span>
              <span className="text-sm text-gray-400">
                Años de experiencia
              </span>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start gap-5">
             <div className="flex flex-col mt-1 gap-1.5">
                <div className="w-[1px] h-5 bg-black" />
                <div className="w-[1px] h-9 bg-slate-300" />
            </div>

            <div>
              <span className="block text-4xl font-bold text-black leading-none">
                30+
              </span>
              <span className="text-sm text-gray-400">
                Clientes satisfechos
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
