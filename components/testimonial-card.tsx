import Image from "next/image"

interface TestimonialCardProps {
  name: string
  quote: string
  image: string
}

export default function TestimonialCard({ name, quote, image }: TestimonialCardProps) {
  return (
    <div className="bg-green-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
      <div className="p-6 flex flex-col md:flex-row gap-6">
        <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-full" />
        </div>
        <div>
          <blockquote className="text-yellow-100 italic mb-4">"{quote}"</blockquote>
          <p className="text-yellow-400 font-semibold text-right">— {name}</p>
        </div>
      </div>
    </div>
  )
}

