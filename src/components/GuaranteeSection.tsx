import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-green-50/90 backdrop-blur-sm border-2 border-green-400 rounded-xl p-8 shadow-xl">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              🛡️ GARANTIA DE SATISFAÇÃO 🛡️
            </h3>
            
            <div className="space-y-3 text-green-700">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">30 dias de garantia incondicional</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Se não gostar, devolvemos 100% do seu dinheiro</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Sem perguntas, sem burocracias</span>
              </div>
            </div>
            
            <p className="text-green-600 mt-4 font-medium">
              Sua satisfação é nossa prioridade. Compre com total segurança!
            </p>
          </div>
        </div>
        
        {/* Botão dourado adicionado abaixo do card de garantia */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToOffers}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse border-2 border-yellow-300"
          >
            QUERO UMA VIDA COM MAIS SAÚDE
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;