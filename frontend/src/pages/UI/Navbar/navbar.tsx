import { useState } from "react";
import { FiMenu, FiX, FiMessageCircle } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../../assets/ouroboros_blanco.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="Ouroboros Logo"
                    className="h-7 w-7 shrink-0"

                />
                <span className="text-white font-bold text-xl tracking-tight">
                    <Link to="/">Ouroboros.</Link>
                </span>
            </div>


          <div className="flex items-center gap-3">
            <button className="hidden sm:block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-gray-200 transition">
              <Link to="/contactanos">Contáctanos</Link>
            </button>

            <button className="rounded-full border border-neutral-900 p-2 text-white hover:bg-neutral-950 transition">
              <FiMessageCircle size={18} />
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-neutral-900 p-2 text-white hover:bg-neutral-950 transition"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu */}
      <div
        className={`
         transition-all duration-300 ease-out
          ${open
            ? "max-h-screen overflow-y-auto opacity-100 translate-y-0"
            : "max-h-0 overflow-hidden opacity-0 -translate-y-4"}
        `}
      >
        <div className="bg-black border-t border-neutral-900">

          {/* FULL WIDTH GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            {[
              { label: "Inicio", to: "/" },
              { label: "Servicios", to: "/servicios" },
              { label: "Sobre Nosotros", to: "/Sobre-Nosotros" },
              { label: "Contactanos", to: "/contactanos" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="
                  flex items-center justify-center
                  h-28 md:h-32
                  border border-neutral-900
                  text-white text-4xl font-medium
                  hover:bg-neutral-950 hover:border-neutral-850
                  transition
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom info — CON PADDING */}
          <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-300">

            {/* Offices */}
            <div>
              <p className="mb-4 font-semibold text-white">Nuestras Oficinas</p>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-white">Amazonas</p>
                  <p>Soritor</p>
                </div>

                <div>
                  <p className="font-medium text-white">Junín</p>
                  <p>Huancayo</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mb-12">
              <p className="mb-4 font-semibold text-white">Siguenos en</p>

              <div className="flex gap-1">
                {[ FaFacebookF,FaLinkedinIn,FaInstagram ].map(
                  (Icon, i) => (
                    <span
                      key={i}
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        text-white
                        hover:bg-neutral-950 hover:border-neutral-850
                        transition
                        cursor-pointer
                      "
                    >
                      <Icon size={16} />
                    </span>
                  )
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
