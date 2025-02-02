"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center">
      {/* Titre de la section */}
      <h2 className="text-3xl font-bold mb-6 animate-slideUp">Contact</h2>
      <p className="mb-4 animate-fadeIn">
        N&apos;hésitez pas à me contacter pour toute question ou collaboration. Je serais ravi de discuter avec vous !
      </p>
      <div className="mb-6 animate-slideUp">
        <p className="mb-4">
          <strong>Email :</strong>{" "}
          <a
            href="mailto:ornel.rony@et.esiea.fr"
            className="text-blue-500 hover:underline transition-colors hover:text-blue-700"
          >
            ornel.rony@et.esiea.fr
          </a>
        </p>
        <p>
          <strong>Téléphone :</strong>{" "}
          <a
            href="tel:+33758384679"
            className="text-blue-500 hover:underline transition-colors hover:text-blue-700"
          >
            +33 7 58 38 46 79
          </a>
        </p>
      </div>
      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg animate-fadeIn">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-left text-sm font-medium mb-2"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Votre nom"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-left text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Votre email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-left text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Votre message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 animate-bounce"
        >
          Envoyer
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-yellow-400 animate-fadeIn">{status}</p>}
      {/* Réseaux sociaux */}
      <div className="mt-8 flex justify-center gap-6 animate-slideUp">
        <a
          href="https://www.linkedin.com/in/ornel-rony"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110"
        >
          <i className="fab fa-linkedin text-4xl"></i>
        </a>
        <a
          href="https://github.com/ornel-rony"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-transform transform hover:scale-110"
        >
          <i className="fab fa-github text-4xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
