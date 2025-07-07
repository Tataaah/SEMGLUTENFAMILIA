import React from 'react';
import { HelpCircle, CheckCircle, Mail } from 'lucide-react';
import LazyImage from './LazyImage';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Essas receitas são caras?",
      answer: "Não! Usamos ingredientes básicos que você provavelmente já tem na cozinha, evitando a necessidade de itens caros ou especializados."
    },
    {
      question: "O bolo realmente fica gostoso e fofinho?",
      answer: "Sim! Criadas por uma especialista em intolerâncias, nossas receitas garantem bolos fofinhos e deliciosos, comparáveis aos bolos tradicionais."
    },
    {
      question: "Eu preciso ser experiente na cozinha?",
      answer: "Não! Fizemos receitas pensando em todos os níveis de habilidade, com instruções claras e um passo a passo super simples."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#F9F7F2] to-[#E2C9A5]">
      <div className="max-w-4xl mx-auto">
        {/* Imagem otimizada com lazy loading */}
        <div className="flex justify-center mb-8">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5vrY.IMG-7045.jpeg" 
            alt="Receitas sem glúten FAQ" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#C69C6D]"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#B67E5E]">
          VOCÊ DEVE ESTAR SE PERGUNTANDO:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#C69C6D] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-6 h-6 text-[#B67E5E]" />
                <h3 className="font-bold text-lg text-[#B67E5E]">{faq.question}</h3>
              </div>
              <p className="text-[#AFA89B] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#B67E5E]">
            Como Vou Receber As Receitas?
          </h3>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#C69C6D] max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-8 h-8 text-[#B67E5E]" />
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-lg font-semibold text-[#B67E5E]">
              Receba <span className="text-green-600">INSTANTANEAMENTE</span> por E-MAIL logo após o pagamento. 
              <span className="text-red-600 font-bold"> ZERO ESPERA!</span>
            </p>
          </div>
        </div>
        
        {/* Imagem final com lazy loading */}
        <div className="flex justify-center mt-12">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5J5D.IMG-7047.jpeg" 
            alt="Bolos sem glúten deliciosos FAQ" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#C69C6D]"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;