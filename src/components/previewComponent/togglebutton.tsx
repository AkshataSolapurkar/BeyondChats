'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ToggleButtonsProps {
  onToggle: (view: 'preview' | 'code') => void;
}

export default function ToggleButtons({ onToggle }: ToggleButtonsProps) {
  const [activeView, setActiveView] = useState<'preview' | 'code'>('preview');

  const handleToggle = (view: 'preview' | 'code') => {
    setActiveView(view);
    onToggle(view);
  };

  const baseButtonClasses = 'font-semibold px-4 py-2 rounded';

  return (
    <div className="flex space-x-2 mb-4">
      <Button
        className={`${baseButtonClasses} ${
          activeView === 'preview' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
        }`}
        onClick={() => handleToggle('preview')}
      >
        Test Chatbot
      </Button>
      <Button
        className={`${baseButtonClasses} ${
          activeView === 'code' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
        }`}
        onClick={() => handleToggle('code')}
      >
        Integration
      </Button>
    </div>
  );
}
