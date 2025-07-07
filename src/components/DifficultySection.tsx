import React from 'react';
import LazyImage from './LazyImage';

const DifficultySection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#F9F7F2]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Imagem otimizada com lazy loading */}
        <div className="flex justify-center mb-8">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5HfM.IMG-7042.jpeg" 
            alt="Receitas fáceis sem glúten" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#B67E5E]">
          Qual o nível de dificuldade das receitas?
        </h2>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-[#E2C9A5]">
          <div className="mb-4">
            <div className="flex justify-between text-sm text-[#AFA89B] mb-2">
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 relative">
              <div
                className="bg-gradient-to-r from-[#B67E5E] to-[#C69C6D] h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '20%' }}
              ></div>
              <div
                className="absolute top-0 bg-[#B67E5E] w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all duration-1000 ease-out"
                style={{ left: 'calc(20% - 12px)', top: '-4px' }}
              ></div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-[#B67E5E] mb-2">
              Nível de Dificuldade: <span className="text-2xl font-bold">2/10</span>
            </p>
            <p className="text-[#AFA89B]">
              Receitas super simples e fáceis de fazer, mesmo para iniciantes!
            </p>
          </div>
        </div>
        
        {/* Imagem final com lazy loading */}
        <div className="flex justify-center mt-8">
          <LazyImage 
            src="https://i.im.ge/2025/07/01/Ja5BMC.IMG-7048.jpeg" 
            alt="Bolos sem glúten prontos" 
            className="max-w-full h-auto rounded-lg shadow-lg border border-[#E2C9A5]"
          />
        </div>
      </div>
    </section>
  );
};

export default DifficultySection;