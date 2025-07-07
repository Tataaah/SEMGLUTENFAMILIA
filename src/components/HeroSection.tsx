import React from 'react';
import StarRating from './StarRating';

const HeroSection: React.FC = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const scrollToOffers = () => {
    const offersSection = document.getElementById('offers-section');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://i.im.ge/2025/05/01/vwveZ4.img-bolos.md.jpeg')`
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-sm font-semibold mb-2 text-yellow-300">
          ATUALIZADO EM {getCurrentDate()}
        </p>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          RESTAURE A SAÚDE DO SEU INTESTINO POR APENAS{' '}
          <span className="text-yellow-400">R$29,90</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-yellow-200">
          RECEITAS SEM GLÚTEN - Bolos simples e fofinhos
        </h2>
        
        <h3 className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-200">
          Fáceis, Deliciosas e SAUDÁVEIS Para Todos Os Amantes De Bolos
        </h3>
        
        <div className="flex justify-center mb-8">
          <StarRating size="lg" />
        </div>
        
        <button
          onClick={scrollToOffers}
          className="bg-gradient-to-r from-[#B67E5E] to-[#C69C6D] hover:from-[#A66E4E] hover:to-[#B58C5D] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
        >
          QUERO CONQUISTAR UMA ALIMENTAÇÃO SAUDÁVEL
        </button>
      </div>
    </section>
  );
};

export default HeroSection;