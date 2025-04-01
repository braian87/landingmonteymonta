import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Youtube, Mail, MapPin, Clock, Heart } from "lucide-react"
import ContactForm from "@/components/contact-form"
import TeamMemberCard from "@/components/team-member-card"
import ProgramCard from "@/components/program-card"
import HistorySection from "@/components/history-section"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileMenu from "@/components/mobile-menu"
import TestimonialCard from "@/components/testimonial-card"
import InstagramFeed from "@/components/instagram-feed"

export default function Home() {
  const whatsappNumber = "+5491163604558" // Replace with the foundation's WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const teamMembers = [
    {
      name: "María González",
      position: "Directora",
      description:
        "Fundadora y directora de la Fundación Monte y Monta. Con más de 15 años de experiencia en equinoterapia y programas de desarrollo con caballos.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Carlos Rodríguez",
      position: "Coordinador de Programas",
      description:
        "Especialista en programas terapéuticos asistidos con caballos. Lidera nuestros programas de inclusión y desarrollo personal.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Laura Martínez",
      position: "Terapeuta Equina",
      description:
        "Terapeuta certificada en equinoterapia con especialización en niños con necesidades especiales y adultos en rehabilitación.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Javier López",
      position: "Entrenador de Caballos",
      description:
        "Experto en entrenamiento y cuidado de caballos terapéuticos. Asegura que nuestros caballos estén perfectamente preparados para su labor.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ]

  const programs = [
    {
      name: "Equinoterapia",
      description:
        "Terapia asistida con caballos para personas con discapacidades físicas, psíquicas o sensoriales. Mejora la calidad de vida a través del movimiento del caballo y la conexión con el animal.",
      image: "https://images.unsplash.com/photo-1551887335-04b4a9c54b5f?q=80&w=600&h=400&auto=format&fit=crop",
    },
    {
      name: "Desarrollo Personal",
      description:
        "Programas de crecimiento personal y desarrollo de habilidades sociales a través de la interacción con caballos. Ideal para niños, adolescentes y adultos.",
      image: "https://images.unsplash.com/photo-1527142879-95b61a0916a7?q=80&w=600&h=400&auto=format&fit=crop",
    },
    {
      name: "Inclusión Social",
      description:
        "Iniciativas para promover la inclusión de personas en situación de vulnerabilidad a través de actividades con caballos y naturaleza.",
      image: "https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=600&h=400&auto=format&fit=crop",
    },
    {
      name: "Educación Ambiental",
      description:
        "Programas educativos sobre el cuidado del medio ambiente, los animales y la importancia de la naturaleza en nuestras vidas.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&h=400&auto=format&fit=crop",
    },
  ]

  const testimonials = [
    {
      name: "Familia Pérez",
      quote:
        "La transformación de nuestro hijo desde que comenzó en la fundación ha sido increíble. Su confianza y habilidades motoras han mejorado significativamente.",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      name: "Lucía Gómez",
      quote:
        "Como profesional de la salud, he visto resultados extraordinarios en mis pacientes que participan en los programas de Monte y Monta. Es una terapia complementaria invaluable.",
      image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ]

  const historySections = [
    {
      name: "Fundación (2010)",
      description:
        "Fundación Monte y Monta nació del sueño de María González de crear un espacio donde los caballos pudieran ayudar a transformar vidas. Comenzamos con solo dos caballos y un pequeño terreno donado.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&h=400&auto=format&fit=crop",
    },
    {
      name: "Actualidad (2020-presente)",
      description:
        "Hoy contamos con instalaciones modernas, un equipo multidisciplinario y programas que benefician a cientos de personas cada año. Seguimos creciendo con la misión de transformar vidas a través de los caballos.",
      image: "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?q=80&w=600&h=400&auto=format&fit=crop",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-800 to-yellow-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-green-800/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1553441404-9c6b105ece49?q=80&w=50&h=50&auto=format&fit=crop"
              width={50}
              height={50}
              className="rounded-full"
              alt="Logo Fundación Monte y Monta"
            />
            <h1 className="text-2xl font-bold text-yellow-400">Fundación Monte y Monta</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#inicio" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#programas" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Programas
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#historia" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24 bg-gradient-to-r from-green-800 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">Fundación Monte y Monta</h2>
          <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto">
            Transformando vidas a través de los caballos
          </p>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=1200&h=600&auto=format&fit=crop"
                alt="Fundación Monte y Monta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-12 md:py-16 bg-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Quiénes Somos</h2>
            <p className="text-lg md:text-xl text-yellow-100 mb-8">
              Fundación Monte y Monta es una organización sin fines de lucro dedicada a mejorar la calidad de vida de
              personas a través de programas terapéuticos y educativos asistidos con caballos. Trabajamos con niños,
              jóvenes y adultos con diversas necesidades, promoviendo la inclusión, el desarrollo personal y el respeto
              por la naturaleza.
            </p>

            <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1533167649158-6d508895b680?q=80&w=1000&h=500&auto=format&fit=crop"
                alt="Fundación Monte y Monta"
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="py-16 md:py-24 bg-green-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Nuestros Programas</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} name={program.name} description={program.description} image={program.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-16 md:py-24 bg-green-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Nuestro Equipo</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                image={member.image}
                position={member.position}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 md:py-24 bg-green-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Testimonios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="py-16 md:py-24 bg-green-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Síguenos en Instagram</h2>

          <div className="text-center mb-8">
            <a
              href="https://www.instagram.com/fundacionmonteymonta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-lg"
            >
              <Instagram className="h-6 w-6" />
              @fundacionmonteymonta
            </a>
          </div>

          <InstagramFeed username="fundacionmonteymonta" />
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-16 md:py-24 bg-green-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Nuestra Historia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {historySections.map((section, index) => (
              <HistorySection key={index} name={section.name} description={section.description} image={section.image} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-800 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Nuestra Misión</h2>

            <div className="bg-green-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-500">
              <p className="text-lg text-yellow-100 mb-6">
                Nuestra <span className="font-bold">misión</span> es mejorar la calidad de vida de personas con
                necesidades especiales, en situación de vulnerabilidad o que buscan desarrollo personal, a través de
                programas terapéuticos y educativos asistidos con caballos.
              </p>

              <p className="text-lg text-yellow-100 mb-6">
                Creemos en el poder transformador de la conexión entre humanos y caballos, y trabajamos cada día para
                crear un espacio seguro, inclusivo y enriquecedor donde esta conexión pueda florecer.
              </p>

              <p className="text-lg text-yellow-100">
                Nos comprometemos con el bienestar de nuestros caballos, el desarrollo profesional de nuestro equipo y
                la mejora continua de nuestros programas para ofrecer siempre el mejor servicio a nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-green-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Contáctanos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-800 rounded-xl p-8 shadow-lg border border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Información de Contacto</h3>

              <div className="space-y-4 text-yellow-100">
                <p className="flex items-center gap-3">
                  <MessageCircle className="text-yellow-400" />
                  <span>WhatsApp: </span>
                  <a href={whatsappUrl} className="text-yellow-400 hover:underline">
                    {whatsappNumber}
                  </a>
                </p>

                <div className="flex items-start gap-3">
                  <Mail className="text-yellow-400 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <span className="block">Email: </span>
                    <a
                      href="mailto:info@fundacionmonteymonta.org"
                      className="text-yellow-400 hover:underline break-all"
                    >
                      info@fundacionmonteymonta.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-yellow-400" />
                  <span>Ubicación: </span>
                </div>
                <address className="not-italic pl-10 text-yellow-100">
                  Ruta Provincial 123, Km 45, Provincia de Buenos Aires, Argentina
                </address>

                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-400" />
                  <span>Horarios: </span>
                </div>
                <p className="pl-10 text-yellow-100">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 9:00 - 14:00
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Síguenos</h3>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/fundacionmonteymonta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-600 transition-colors p-3 rounded-full"
                  >
                    <Instagram className="text-yellow-400 h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a href="#" className="bg-green-700 hover:bg-green-600 transition-colors p-3 rounded-full">
                    <Youtube className="text-yellow-400 h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a href="#" className="bg-green-700 hover:bg-green-600 transition-colors p-3 rounded-full">
                    <Facebook className="text-yellow-400 h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-800 rounded-xl p-8 shadow-lg border border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Envíanos un Mensaje</h3>
              <ContactForm whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-green-900 text-yellow-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1553441404-9c6b105ece49?q=80&w=50&h=50&auto=format&fit=crop"
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="Logo Fundación Monte y Monta"
                />
                <h2 className="text-xl font-bold text-yellow-400">Fundación Monte y Monta</h2>
              </div>
              <p className="text-sm text-yellow-200 mb-4">Transformando vidas a través de los caballos desde 2010.</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/fundacionmonteymonta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#programas" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Programas
                  </a>
                </li>
                <li>
                  <a href="#equipo" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Equipo
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Programas</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#programas" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Equinoterapia
                  </a>
                </li>
                <li>
                  <a href="#programas" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Desarrollo Personal
                  </a>
                </li>
                <li>
                  <a href="#programas" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Inclusión Social
                  </a>
                </li>
                <li>
                  <a href="#programas" className="text-yellow-200 hover:text-yellow-300 transition-colors">
                    Educación Ambiental
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contacto</h3>
              <address className="not-italic space-y-2 text-yellow-200">
                <p className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <span>Ruta Provincial 123, Km 45, Buenos Aires, Argentina</span>
                </p>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <a
                      href="mailto:info@fundacionmonteymonta.org"
                      className="hover:text-yellow-300 transition-colors break-all"
                    >
                      info@fundacionmonteymonta.org
                    </a>
                  </div>
                </div>
                <p className="flex items-start gap-2">
                  <MessageCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <a href={whatsappUrl} className="hover:text-yellow-300 transition-colors">
                    {whatsappNumber}
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-yellow-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fundación Monte y Monta. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-yellow-400" />
              <p className="text-sm text-yellow-200">Hecho con amor para quienes más lo necesitan</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  )
}

