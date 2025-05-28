"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import DefaultLayout from "../_components/DefaultLayout";
import PageLayout from "../_components/PageLayout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Merci ${formData.gender} ${formData.name}, votre message a bien été envoyé !`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        alert(`Erreur: ${errorData.error || "Une erreur est survenue"}`);
      }
    } catch (error) {
      alert("Erreur réseau, veuillez réessayer plus tard.");
    }
  };

  return (
    <DefaultLayout>
      <PageLayout title="Contact">
        <main className="max-w-3xl mx-auto px-6 py-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C27803]"
              >
                <option value="">Civilité</option>
                <option value="Monsieur">Monsieur</option>
                <option value="Madame">Madame</option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C27803]"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C27803]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C27803]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C27803] resize-none"
            />

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-[#C27803] text-white py-3 px-6 rounded-xl hover:bg-[#a06502] transition"
            >
              <SendHorizontal size={18} />
              Envoyer le message
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Vous pouvez aussi m’écrire directement à{" "}
            <a
              href="mailto:gg.intervention@gmail.com"
              className="text-blue-600"
            >
              gg.intervention@gmail.com
            </a>
            .
          </p>
        </main>
      </PageLayout>
    </DefaultLayout>
  );
}
