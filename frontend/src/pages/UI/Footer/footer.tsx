const Footer = () => {
  return (
    <footer
      className="
        relative w-full py-24 text-white bg-white
        bg-gradient-to-b from-black via-[#1a0008] to-black
      "
    >
      {/* Overlay sutil para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-700/10 to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* TOP */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">

          {/* Navegación */}
          <nav>
            <ul className="grid grid-cols-2 gap-10 sm:grid-cols-3">

              {/* Proyectos */}
              <li>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                  Proyectos
                </h3>
                <ul className="mt-6 text-sm text-gray-400">
                  {["FamilyFund", "Unseal", "Phobia"].map((item) => (
                    <li key={item} className="mt-4">
                      <a
                        href="#"
                        className="transition hover:text-red-500"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <li className="mt-5">
                    <a
                      href="#"
                      className="font-medium transition hover:text-red-500"
                    >
                      Ver todos →
                    </a>
                  </li>
                </ul>
              </li>

              {/* Empresa */}
              <li>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                  Empresa
                </h3>
                <ul className="mt-6 text-sm text-gray-400">
                  {["Sobre nosotros", "Proceso", "Blog", "Contáctanos"].map(
                    (item) => (
                      <li key={item} className="mt-4">
                        <a
                          href="#"
                          className="transition hover:text-red-500"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>

              {/* Conecta */}
              <li>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                  Conecta
                </h3>
                <ul className="mt-6 text-sm text-gray-400">
                  {["Facebook", "Instagram", "GitHub", "Dribbble"].map(
                    (item) => (
                      <li key={item} className="mt-4">
                        <a
                          href="#"
                          className="transition hover:text-red-500"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>

            </ul>
          </nav>

          {/* Newsletter */}
          <div className="flex lg:justify-end">
            <form className="w-full max-w-sm">
              <h2 className="text-sm font-semibold tracking-wider uppercase text-white">
                Boletín informativo
              </h2>
              <p className="mt-6 text-sm text-gray-400">
                Suscríbete para recibir noticias, artículos y recursos sobre
                diseño y tecnología.
              </p>

              <div className="relative mt-8">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="
                    w-full rounded-2xl
                    border border-white/20
                    bg-black/40 backdrop-blur-md
                    py-4 pl-6 pr-20
                    text-white placeholder:text-gray-500
                    focus:outline-none
                    focus:border-red-500
                    focus:ring-4 focus:ring-red-500/20
                  "
                />
                <button
                  type="submit"
                  className="
                    absolute inset-y-1 right-1
                    flex items-center justify-center
                    rounded-xl
                    bg-white px-4
                    text-black font-medium
                    transition
                    hover:bg-red-500 hover:text-white
                  "
                >
                  →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-28 flex flex-wrap items-center justify-between
            gap-x-6 gap-y-4
            border-t border-white/10 pt-10
          "
        >
          {/* Marca */}
          <a href="/" className="text-lg font-bold tracking-tight">
            <span className="text-white">Ouroboros</span>
            <span className="text-red-500">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © Ouroboros Agencia 2026. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
