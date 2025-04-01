import Image from "next/image"

interface ProgramCardProps {
  name: string
  description: string
  image: string
}

export default function ProgramCard({ name, description, image }: ProgramCardProps) {
  return (
    <div className="bg-green-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-yellow-500 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{name}</h3>
        <p className="text-yellow-100 flex-grow">{description}</p>
      </div>
    </div>
  )
}

