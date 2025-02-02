import React from 'react';

interface Step {
  id: string;
  title: string;
  subtitle: string;
  isCompleted: boolean;
}

interface StepNavigationProps {
  steps: Step[];
  currentStep: string;
  handleStepClick: (stepId: string) => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ steps, currentStep, handleStepClick }) => {
  return (
    <div className=''>
      {/* Horizontal navigation for small screens */}
      <h1 className="text-2xl md:hidden text-center font-bold my-4 text-gray-800">Organisation Setup</h1>
      <div className="flex flex-row justify-around p-4 md:hidden">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => handleStepClick(step.id)}
            className={`cursor-pointer transition-all ${
              currentStep === step.id ? 'text-black font-bold' : 'text-gray-500'
            }`}
          >
            <h3 className="text-lg">{step.title}</h3>
          </div>
        ))}
      </div>

      {/* Vertical sidebar for medium and larger screens */}
      <div className="hidden md:flex md:flex-col md:justify-center md:p-8 md:border-r md:border-gray-200">
        <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">Organisation Setup</h1>
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => handleStepClick(step.id)}
            className={`p-4 mb-4 rounded-lg cursor-pointer transition-all ${
              currentStep === step.id ? 'bg-gray-100 shadow-sm' : 'hover:bg-[#d9e0f7]'
            } ${step.isCompleted ? 'opacity-100' : 'opacity-70'}`}
          >
            <h3 className={`text-lg font-bold ${currentStep === step.id ? 'text-black' : 'text-gray-500'}`}>
              {step.title}
            </h3>
            <p className={`text-sm mt-1 ${currentStep === step.id ? 'text-black' : 'text-gray-500'}`}>
              {step.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepNavigation;
