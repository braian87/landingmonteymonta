"use client"

import { useRef } from "react"

export default function MobileMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const handleLinkClick = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false
    }
  }

  return (
    <div className="relative">
      <details ref={detailsRef} className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-center rounded-md bg-yellow-500 p-2 text-green-900 hover:bg-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </summary>

        <div className="absolute right-0 z-10 mt-3 w-56 rounded-md border border-yellow-500 bg-green-800 shadow-lg">
          <div className="p-2">
            <a
              href="#inicio"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Nosotros
            </a>
            <a
              href="#programas"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Programas
            </a>
            <a
              href="#equipo"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Equipo
            </a>
            <a
              href="#testimonios"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Testimonios
            </a>
            <a
              href="#instagram"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Instagram
            </a>
            <a
              href="#historia"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Historia
            </a>
            <a
              href="#contacto"
              className="block rounded-lg px-4 py-2 text-yellow-400 hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </div>
        </div>
      </details>
    </div>
  )
}

