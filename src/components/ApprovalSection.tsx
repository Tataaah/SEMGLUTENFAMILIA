import React from 'react';
import { Award, Milk, DollarSign } from 'lucide-react';

const ApprovalSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#E2C9A5] to-[#D8D3C3]">
      <div className="max-w-4xl mx-auto">
        {/* Título inspiracional adicionado */}
        <h2 className="text-lg md:text-xl font-bold text-center mb-8 text-[#F5F1E8] leading-relaxed" style={{ textShadow: '2px 2px 4px #8B4513, 1px 1px 2px #A0522D' }}>
          Nada de dieta maluca ou comida sem gosto! Aqui, cada prato é um convite para cuidar da saúde sem abrir mão do prazer de comer bem. Porque cuidar de você também é um ato de amor
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#C69C6D]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-[#B67E5E] mb-4" />
              <h3 className="font-bold text-lg text-[#B67E5E] mb-2">
                A Cada 10 Nutricionistas
              </h3>
              <p className="text-[#AFA89B] font-semibold">9 Aprovam Estas Receitas</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Milk className="w-12 h-12 text-[#B67E5E] mb-4" />
              <h3 className="font-bold text-lg text-[#B67E5E] mb-2">
                Sem Leite E Sem Açúcar
              </h3>
              <p className="text-[#AFA89B] font-semibold">100% Natural</p>
            </div>
            
            <div className="flex flex-col items-center">
              <DollarSign className="w-12 h-12 text-[#B67E5E] mb-4" />
              <h3 className="font-bold text-lg text-[#B67E5E] mb-2">
                Ingredientes Acessíveis
              </h3>
              <p className="text-[#AFA89B] font-semibold">Você já tem em casa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprovalSection;