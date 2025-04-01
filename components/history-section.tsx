import Image from "next/image"

interface HistorySectionProps {
  name: string
  description: string
  image: string
}

export default function HistorySection({ name, description, image }: HistorySectionProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-green-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
      <div className="relative h-64 md:h-auto md:w-1/3">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{name}</h3>
        <p className="text-yellow-100">{description}</p>
      </div>
    </div>
  )
}

