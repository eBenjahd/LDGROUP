import { useState } from "react";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";

import "./Faq.scss";

const faqs = [
  { question: "¿Cuánto tarda el envío?", answer: "El envío tarda entre 3 y 5 días hábiles según tu ubicación." },
  { question: "¿Puedo devolver un producto?", answer: "Sí, dentro de los 30 días posteriores a la compra." },
  { question: "¿Qué métodos de pago aceptan?", answer: "Aceptamos tarjetas de crédito, débito y PayPal." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <main className="faq">
        <h1>Preguntas Frecuentes</h1>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`data-container ${openIndex === index ? "open" : ""}`}
            >
              <button onClick={() => toggleFAQ(index)}>
                {faq.question}
              </button>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </main>
      <Footer year={2025} />
    </>
  );
}