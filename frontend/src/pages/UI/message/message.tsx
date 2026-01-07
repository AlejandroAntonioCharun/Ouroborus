import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Tooltip flotante */}
      {showTooltip && !open && (
        <div
          className="
            flex items-start gap-3
            max-w-[220px]
            rounded-xl
            bg-white/20 dark:bg-black/30
            backdrop-blur-xl
            border border-white/20
            px-4 py-3
            text-sm text-neutral-900 dark:text-white
            shadow-lg
          "
        >
          <span>Comunícate con un asesor</span>

          <button
            onClick={() => setShowTooltip(false)}
            className="
              text-neutral-700 dark:text-neutral-300
              hover:text-red-500
              transition
            "
            aria-label="Cerrar mensaje"
          >
            <FiX size={16} />
          </button>
        </div>
      )}

      {/* Opciones WhatsApp */}
      {open && (
        <div
          className="
            flex flex-col gap-3
            rounded-2xl
            bg-white/20 dark:bg-black/30
            backdrop-blur-xl
            border border-white/20
            p-4
            shadow-xl
          "
        >
          <a
            href="https://wa.me/51934817478?text=Hola%20Jeffry%2C%20te%20escribo%20porque%20tengo%20una%20consulta%20sobre%20los%20servicios%20que%20ofrece%20Ouroboros."
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              rounded-xl
              bg-green-500
              px-4 py-2
              text-white text-sm font-medium
              hover:bg-green-600
              transition
            "
          >
            <FaWhatsapp className="text-lg" />
            Hablar con Jeffry
          </a>

          <a
            href="https://wa.me/51934085336?text=Hola%20Alejandro%2C%20te%20escribo%20porque%20tengo%20una%20consulta%20sobre%20los%20servicios%20que%20ofrece%20Ouroboros."
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              rounded-xl
              bg-green-500
              px-4 py-2
              text-white text-sm font-medium
              hover:bg-green-600
              transition
            "
          >
            <FaWhatsapp className="text-lg" />
            Hablar con Alejandro
          </a>
        </div>
      )}

      {/* Botón principal WhatsApp */}
      <button
        onClick={() => {
          setOpen(!open);
          setShowTooltip(false);
        }}
        className="
          flex items-center justify-center
          h-14 w-14
          rounded-full
          bg-green-500
          text-white
          shadow-lg
          hover:bg-green-600
          transition
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default FloatingChat;
