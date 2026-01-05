import img from "../../../../assets/Imagenes/inicio-Imagen-section1.png"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-black from-25% via-black via-40% to-red-700 flex items-center">
      
      {/* Overlay glass */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* TEXT */}
          <div className="space-y-6">
            <h1 className="text-white text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight max-w-xl">
              Inicia la transformación digital de tu empresa
            </h1>

            <p className="text-gray-200 text-base sm:text-lg max-w-md">
              Descubre soluciones innovadoras y personalizadas para llevar tu
              negocio al siguiente nivel con nuestra experiencia en desarrollo
              web y tecnología.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="
                  rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black
                  hover:bg-red-500 hover:text-white
                  transition
                "
              >
                Para Empresas
              </button>

              <button
                className="
                  rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white
                  hover:bg-white hover:text-black hover:border-white
                  transition
                "
              >
                Para Emprendedores
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative hidden lg:flex justify-center">
            <div
              className="
                relative
                p-4
              "
            >
              <img
                src={img}
                alt="Transformación digital"
                className="w-[420px] xl:w-[480px] rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
