import React from 'react';
import StarRating from './StarRating';
import LazyImage from './LazyImage';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Nayara Soares",
      text: "Pensa num e-book maravilhoso as receitas são maravilhosas estou amando real... a Lara é maravilhosa, uma benção nos dar suporte tira nossas dúvidas... super indico mil vezes!!!"
    },
    {
      name: "Marcia Maria",
      text: "Gente gente, o bolo é maravilhoso. Sigam exatamente a receita. Olha sem palavras para descrever a alegria em comer um bolo sem glúten delicioso."
    },
    {
      name: "Tatiane Araújo Moraes",
      text: "Oi comprei seu ebook estou apaixonada vou imprimir e encadernar, vou fazer uma receita agorinha❤️"
    },
    {
      name: "Tamires Reis",
      text: "Comprei e chegou na hora no e-mail, adorei o material, super bem feitinho, achei ótimo que tem as medidas em xícaras e em gramas também. Logo começo a testar as receitas."
    },
    {
      name: "Marlene Costa",
      text: "Com estas receitas meu intestino está funcionando muito melhor, não me sinto mais inchada após comer estas receitas de bolos e pães. Uma mudança EXCEPCIONAL!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto">
        {/* Imagem otimizada com lazy loading */}
        <div className="flex justify-center mb-8">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5eEp.IMG-7049.jpeg" 
            alt="Avaliações de clientes" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#B67E5E]">
          Avaliações de Clientes
        </h2>
        
        <div className="flex justify-center mb-12">
          <StarRating size="lg" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#E2C9A5] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <StarRating size="sm" />
              </div>
              
              <p className="text-[#AFA89B] leading-relaxed mb-4 text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-[#E2C9A5] pt-4">
                <p className="font-semibold text-[#B67E5E] text-center">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Imagem final com lazy loading */}
        <div className="flex justify-center mt-12">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja9MJP.IMG-7050.jpeg" 
            alt="Depoimentos de clientes satisfeitos" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;