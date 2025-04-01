"use client"
import Image from "next/image"
import { Instagram } from "lucide-react"

interface InstagramFeedProps {
  username: string
}

export default function InstagramFeed({ username }: InstagramFeedProps) {
  // In a real implementation, you would fetch data from Instagram API
  // For this demo, we'll use placeholder images

  const placeholderPosts = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?q=80&w=600&h=600&auto=format&fit=crop",
      caption: "Nuestros caballos disfrutando del día soleado. #equinoterapia #fundacionmonteymonta",
      likes: 45,
      comments: 3,
      url: `https://www.instagram.com/p/abc123/`,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?q=80&w=600&h=600&auto=format&fit=crop",
      caption:
        "Sesión de terapia con nuestros pequeños amigos. Cada sonrisa es un logro que celebramos. #inclusión #terapiaasistida",
      likes: 67,
      comments: 8,
      url: `https://www.instagram.com/p/def456/`,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&h=600&auto=format&fit=crop",
      caption:
        "Nuestro equipo de voluntarios preparándose para un nuevo día de actividades. ¡Gracias por su dedicación! #voluntariado #equipo",
      likes: 38,
      comments: 5,
      url: `https://www.instagram.com/p/ghi789/`,
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=600&h=600&auto=format&fit=crop",
      caption: "La conexión entre humanos y caballos es mágica. #terapiaecuestre #bienestaranimal",
      likes: 52,
      comments: 7,
      url: `https://www.instagram.com/p/jkl012/`,
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1527142879-95b61a0916a7?q=80&w=600&h=600&auto=format&fit=crop",
      caption:
        "Celebrando el Día Internacional de la Equinoterapia con nuestros amigos de cuatro patas. #díainternacional #celebración",
      likes: 73,
      comments: 12,
      url: `https://www.instagram.com/p/mno345/`,
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&h=600&auto=format&fit=crop",
      caption: "Naturaleza, caballos y terapia: los ingredientes perfectos para sanar. #naturaleza #terapianatural",
      likes: 41,
      comments: 4,
      url: `https://www.instagram.com/p/pqr678/`,
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {placeholderPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.caption.substring(0, 30) + "..."}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white text-center p-4">
                <p className="text-sm line-clamp-3">{post.caption}</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-heart"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={`https://www.instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-yellow-400 px-6 py-3 rounded-full transition-colors duration-300"
        >
          <Instagram className="h-5 w-5" />
          Ver más en Instagram
        </a>
      </div>

      <div className="mt-8 p-6 bg-green-800/50 rounded-xl border border-yellow-500/30 max-w-3xl mx-auto">
        <p className="text-yellow-100 text-center">
          <strong className="text-yellow-400">Nota:</strong> Para ver nuestro contenido más reciente y mantenerte al día
          con nuestras actividades, te invitamos a seguirnos en Instagram{" "}
          <a
            href={`https://www.instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            @{username}
          </a>
        </p>
      </div>
    </div>
  )
}

