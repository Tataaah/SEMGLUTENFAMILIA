import React, { useState, useEffect, useCallback } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-bold">
        <Clock className="w-4 h-4" />
        <span>A OFERTA ACABA EM: {formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default React.memo(CountdownTimer);