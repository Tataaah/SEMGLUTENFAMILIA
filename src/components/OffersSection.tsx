import React from 'react';
import { Crown, Download, Clock, Infinity, ChefHat, Cookie, Cake } from 'lucide-react';

const OffersSection: React.FC = () => {
  return (
    <section id="offers-section" className="py-16 px-4 bg-gradient-to-b from-[#E2C9A5] to-[#D8D3C3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#B67E5E]">
          DESVENDE OS SEGREDOS DOS BOLOS SEM GLÚTEN PERFEITOS E SABOREIE HOJE MESMO!
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Package */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#C69C6D] hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#AFA89B] mb-4">BAIXE SUA CÓPIA</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-[#B67E5E]" />
                  <span className="text-[#AFA89B]">Melhores Receitas de Bolos Sem Glúten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-[#B67E5E]" />
                  <span className="text-[#AFA89B]">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Infinity className="w-5 h-5 text-[#B67E5E]" />
                  <span className="text-[#AFA89B]">Acesso Vitalício</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 line-through">R$59,90</p>
                <p className="text-3xl font-bold text-[#B67E5E]">R$29,90</p>
              </div>
              
              <a
                href="https://oferta-down2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#B67E5E] to-[#C69C6D] hover:from-[#A66E4E] hover:to-[#B58C5D] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
              >
                QUERO AS RECEITAS
              </a>
              
              <div className="border-t border-[#E2C9A5] pt-4">
                <p className="text-sm text-[#AFA89B] mb-2">
                  Mas antes de comprar… temos uma oferta AINDA MAIS vantajosa para você!
                </p>
                <p className="text-sm text-[#B67E5E] font-semibold">
                  Veja logo abaixo⬇️
                </p>
              </div>
            </div>
          </div>
          
          {/* Premium Package */}
          <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-2xl border-2 border-yellow-400 transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="w-8 h-8 text-yellow-600" />
                <h3 className="text-2xl font-bold text-yellow-700">PACOTE PREMIUM</h3>
              </div>
              
              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Melhores Receitas de Bolos Sem Glúten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Receitas de Pães Fofinhos Sem Glúten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cake className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Receitas de Coberturas Saudáveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">30 Receitas de Salgados Assados</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">30 Receitas de Salgados Fritos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Infinity className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Acesso Vitalício</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 line-through">R$200,00</p>
                <p className="text-4xl font-bold text-yellow-700">R$97,00</p>
              </div>
              
              <a
                href="https://pay.kirvano.com/66a4d2d6-64cc-497f-9c79-63dc391de390"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                EU QUERO AS RECEITAS PREMIUM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;