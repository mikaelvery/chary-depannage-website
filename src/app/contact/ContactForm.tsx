"use client";

import { useEffect, useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    message: "",
  });

  // Champ honeypot (invisible pour les humains, rempli par les bots)
  const [honeypot, setHoneypot] = useState("");
  // Timestamp du chargement du formulaire
  const loadTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    loadTimeRef.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _hp: honeypot,
          _t: loadTimeRef.current,
        }),
      });

      if (response.ok) {
        alert(
          `Merci ${formData.gender} ${formData.name}, votre message a bien été envoyé !`
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          gender: "",
          message: "",
        });
        setHoneypot("");
        loadTimeRef.current = Date.now();
      } else {
        const errorData = await response.json();
        alert(`Erreur: ${errorData.error || "Une erreur est survenue"}`);
      }
    } catch {
      alert("Erreur réseau, veuillez réessayer plus tard.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md shadow-xl p-8 rounded-2xl space-y-6"
    >
      {/* Champ honeypot : caché des humains, les bots le remplissent */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <label htmlFor="website">Ne pas remplir</label>
        <input
          id="website"
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

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

      <p className="mt-6 text-center text-sm text-gray-600">
        Vous pouvez aussi m'écrire directement à{" "}
        <a href="mailto:gg.intervention@gmail.com" className="text-blue-600">
          gg.intervention@gmail.com
        </a>
        .
      </p>
    </form>
  );
}
