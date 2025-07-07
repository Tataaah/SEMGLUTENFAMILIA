import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, X } from 'lucide-react';

const SalesNotification: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<{ id: number; name: string; visible: boolean } | null>(null);
  const [nextId, setNextId] = useState(1);

  const names = [
    'Ana Silva', 'Maria Santos', 'João Pedro', 'Carla Oliveira', 'Pedro Costa',
    'Lucia Ferreira', 'Ricardo Alves', 'Fernanda Lima', 'Carlos Mendes', 'Juliana Rocha',
    'Roberto Sousa', 'Mariana Cunha', 'Diego Martins', 'Camila Ribeiro', 'Eduardo Pereira',
    'Patrícia Gomes', 'Marcos Vieira', 'Daniela Castro', 'Felipe Barbosa', 'Gabriela Moreira'
  ];

  const closeNotification = useCallback(() => {
    if (currentNotification) {
      setCurrentNotification(prev => prev ? { ...prev, visible: false } : null);
      setTimeout(() => {
        setCurrentNotification(null);
      }, 300);
    }
  }, [currentNotification]);

  useEffect(() => {
    const showNotification = () => {
      // Only show if there's no current notification
      if (currentNotification && currentNotification.visible) return;

      const randomName = names[Math.floor(Math.random() * names.length)];
      const notification = { id: nextId, name: randomName, visible: true };
      
      setCurrentNotification(notification);
      setNextId(prev => prev + 1);

      // Auto remove after 4 seconds
      setTimeout(() => {
        setCurrentNotification(prev => 
          prev ? { ...prev, visible: false } : null
        );
        setTimeout(() => {
          setCurrentNotification(null);
        }, 300);
      }, 4000);
    };

    // Initial delay of 10 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
      
      // Then repeat every 23 seconds (10s + 5s + 8s cycle)
      const interval = setInterval(showNotification, 23000);
      
      return () => clearInterval(interval);
    }, 10000);

    return () => clearTimeout(initialTimeout);
  }, [nextId, currentNotification, names]);

  if (!currentNotification) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none">
      <div
        className={`bg-white border border-green-200 rounded-lg shadow-lg p-4 max-w-sm transition-all duration-300 pointer-events-auto ${
          currentNotification.visible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-gray-800">{currentNotification.name}</p>
              <p className="text-xs text-gray-600">acabou de comprar as receitas!</p>
            </div>
          </div>
          <button
            onClick={closeNotification}
            className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SalesNotification);