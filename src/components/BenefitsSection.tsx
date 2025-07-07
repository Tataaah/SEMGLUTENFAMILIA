import React, { lazy, Suspense } from 'react';
import { Heart, Zap, Shield, Sparkles, Scale, Leaf, Brain, Apple, Star, CheckCircle, X } from 'lucide-react';
import LazyImage from './LazyImage';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-[#B67E5E]" />,
      title: "Melhora na Digestão",
      description: "Reduz sintomas como inchaço, gases e desconforto abdominal."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#B67E5E]" />,
      title: "Mais Energia",
      description: "Evita a sensação de cansaço causada por sensibilidades ao glúten."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#B67E5E]" />,
      title: "Redução de Inflamações",
      description: "Pode ajudar a aliviar dores nas articulações e inflamações no corpo."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#B67E5E]" />,
      title: "Pele Mais Saudável",
      description: "Combate acne e problemas de pele relacionados à sensibilidade alimentar."
    },
    {
      icon: <Scale className="w-8 h-8 text-[#B67E5E]" />,
      title: "Controle do Peso",
      description: "Facilita escolhas alimentares mais naturais e nutritivas."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#B67E5E]" />,
      title: "Melhora da Saúde Intestinal",
      description: "Promove uma flora intestinal mais equilibrada."
    },
    {
      icon: <Brain className="w-8 h-8 text-[#B67E5E]" />,
      title: "Apoio à Saúde Mental",
      description: "Reduz sintomas como ansiedade e nevoeiro mental em pessoas sensíveis ao glúten."
    },
    {
      icon: <Apple className="w-8 h-8 text-[#B67E5E]" />,
      title: "Estímulo a uma Alimentação Mais Saudável",
      description: "Encoraja a inclusão de alimentos integrais e naturais."
    },
    {
      icon: <Star className="w-8 h-8 text-[#B67E5E]" />,
      title: "Benefícios para Pessoas com Sensibilidade ao Glúten",
      description: "Alívio de sintomas como enxaquecas, fadiga e irritabilidade."
    }
  ];

  const forWhoItems = [
    "Para quem quer viver mais saudável, com mais DISPOSIÇÃO, SAÚDE, ALEGRIA e EQUILÍBRIO;",
    "Para quem quer demonstrar amor e cuidado com a família, oferecendo saúde e bem-estar em cada prato;",
    "Para quem quer passar mais tempo em família na cozinha — é uma oportunidade de ensinar, rir, conversar e criar tradições;",
    "Para quem quer PRATICIDADE com receitas SAUDÁVEIS;"
  ];

  const notForWhoItems = [
    "Para quem quer continuar comendo as mesmas comidas de sempre — mesmo sabendo que pode ser diferente",
    "Para quem quer abrir mão de viver mais e melhor ao lado de quem ama;",
    "Para quem quer perder a chance de aprender receitas que cuidam do corpo sem abrir mão do sabor;",
    "Para quem quer deixar momentos preciosos escaparem por falta de energia e saúde;",
    "Para quem quer fechar a porta para uma nova fase da sua vida com mais saúde e alegria."
  ];

  return (
    <section className="py-16 px-4 bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto">
        {/* Imagem otimizada com lazy loading */}
        <div className="flex justify-center mb-8">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5GIq.IMG-7041.jpeg" 
            alt="Receitas sem glúten" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#B67E5E]">
          A Solução Que Você Procurava: Saúde, Energia e Bem-Estar Sem Glúten!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#E2C9A5] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                {benefit.icon}
                <h3 className="font-semibold text-lg text-[#B67E5E]">{benefit.title}</h3>
              </div>
              <p className="text-[#AFA89B] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Nova imagem da família com lazy loading */}
        <div className="flex justify-center mt-12 mb-8">
          <LazyImage 
            src="https://i.im.ge/2025/07/07/JUPCJM.familia.md.jpeg" 
            alt="Família feliz" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
        
        {/* Card "Para Quem São Estas Receitas" */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#E2C9A5] mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#B67E5E]">
            Para Quem Quer Aproveitar A Vida Com Mais Saúde Junto De Quem Ama
          </h3>
          
          <h4 className="text-xl font-semibold mb-6 text-[#B67E5E]">
            Para Quem São Estas Receitas:
          </h4>
          
          <div className="space-y-4">
            {forWhoItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-[#AFA89B] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Card "Para Quem NÃO São Estas Receitas" */}
        <div className="bg-red-50/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-red-200 mb-12">
          <h4 className="text-xl font-semibold mb-6 text-red-700">
            Para Quem NÃO São Estas Receitas:
          </h4>
          
          <div className="space-y-4">
            {notForWhoItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-red-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Imagem final com lazy loading */}
        <div className="flex justify-center mt-12">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5ng4.IMG-7044.jpeg" 
            alt="Bolos sem glúten deliciosos" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;