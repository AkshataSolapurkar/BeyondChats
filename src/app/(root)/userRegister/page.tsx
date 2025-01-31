'use client';

import { useState } from 'react';

const steps = [
  { id: 'persona', title: 'Persona', subtitle: 'Your offering and value prop', isCompleted: false },
  { id: 'prospects', title: 'Prospects', subtitle: 'Who you want to reach out to', isCompleted: false },
  { id: 'trigger', title: 'Trigger', subtitle: 'Reason for reaching out', isCompleted: false },
  { id: 'frameworks', title: 'Frameworks', subtitle: 'Structures of your messages', isCompleted: false },
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState('persona');
  const [formData, setFormData] = useState({
    persona: { website: '', document: '', questionnaire: '' },
    prospects: {},
    trigger: {},
    frameworks: {},
  });

  const handleStepClick = (stepId: string) => {
    const currentStepIndex = steps.findIndex(step => step.id === currentStep);
    const clickedStepIndex = steps.findIndex(step => step.id === stepId);
    
    if (clickedStepIndex <= currentStepIndex) {
      setCurrentStep(stepId);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'persona':
        return (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Help us understand your offering</h2>
            <p className="text-gray-600 mb-8">Choose a source to gather your value proposition info</p>
            
            <div className="grid grid-cols-3 gap-6">
              <button className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 bg-white text-center">
                <span className="text-4xl mb-4 block">🌐</span>
                <h3 className="text-lg font-medium mb-1">Website</h3>
                <p className="text-sm text-gray-500">Auto import</p>
              </button>
              
              <button className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 bg-white text-center">
                <span className="text-4xl mb-4 block">📄</span>
                <h3 className="text-lg font-medium mb-1">Document</h3>
                <p className="text-sm text-gray-500">Auto import</p>
              </button>
              
              <button className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 bg-white text-center">
                <span className="text-4xl mb-4 block">📝</span>
                <h3 className="text-lg font-medium mb-1">Questionnaire</h3>
                <p className="text-sm text-gray-500">Manual entry</p>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-gradient-to-l from-[#ebf0fb] to-[#eeeaf7] text-black w-full'>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-6xl flex">
            <div className="w-72 p-8 border-r border-gray-200">
              {steps.map((step) => (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`p-4 mb-4 rounded-lg cursor-pointer transition-all ${
                    currentStep === step.id
                      ? 'bg-gray-100 shadow-sm'
                      : 'hover:bg-gray-50'
                  } ${
                    step.isCompleted ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{step.subtitle}</p>
                </div>
              ))}
            </div>
            
            <div className="flex-1 p-8">
              {renderCurrentStep()}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Page;