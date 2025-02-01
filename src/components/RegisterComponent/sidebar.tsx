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
    <div className="p-8 border-r border-gray-200 flex flex-col justify-center">
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
  );
};

export default StepNavigation;