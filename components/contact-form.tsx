"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactFormProps {
  whatsappNumber: string
}

export default function ContactForm({ whatsappNumber }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    whatsapp: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const message = `
*Nuevo mensaje de contacto*
*Nombre:* ${formData.firstName} ${formData.lastName}
*WhatsApp:* ${formData.whatsapp}
*Email:* ${formData.email}
*Mensaje:* ${formData.message}
    `.trim()

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message)

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-yellow-400">
            Nombre
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            className="bg-green-700 border-yellow-500 text-yellow-100 placeholder:text-yellow-200/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-yellow-400">
            Apellido
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Tu apellido"
            className="bg-green-700 border-yellow-500 text-yellow-100 placeholder:text-yellow-200/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp" className="text-yellow-400">
          WhatsApp
        </Label>
        <Input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          placeholder="Tu número de WhatsApp"
          className="bg-green-700 border-yellow-500 text-yellow-100 placeholder:text-yellow-200/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-yellow-400">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Tu correo electrónico"
          className="bg-green-700 border-yellow-500 text-yellow-100 placeholder:text-yellow-200/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-yellow-400">
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Escribe tu mensaje aquí"
          rows={4}
          className="bg-green-700 border-yellow-500 text-yellow-100 placeholder:text-yellow-200/50"
        />
      </div>

      <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold">
        Enviar a WhatsApp
      </Button>
    </form>
  )
}

