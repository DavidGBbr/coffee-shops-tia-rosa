import { IFormData } from "@/types/FormData";
import React, { FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <h1 className="font-semibold m-8 uppercase text-primary text-4xl text-left underline">
        Fale Conosco
      </h1>
      <div className="mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-7">
            <div className="flex flex-col gap-7">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-terciary border border-secondary rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-terciary border border-secondary rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Mensagem"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-terciary border border-secondary rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary mt-10 py-4 px-24 text-terciary font-bold uppercase text-xs rounded hover:bg-terciary hover:text-primary"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
