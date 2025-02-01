'use client';

import { useState } from 'react';
import StepNavigation from '@/components/RegisterComponent/sidebar';
import OrgSetup from '@/components/RegisterComponent/orgSetup';
import WebsiteScraper from '@/components/RegisterComponent/WebsiteScraper';

const steps = [
  { id: 'OrgSetup', title: 'Setup Org', subtitle: 'Mention Details of your Organisation', isCompleted: false },
  { id: 'Trigger', title: 'Extracting Data', subtitle: 'WebPage Scraping', isCompleted: false },
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState('OrgSetup');

  const handleStepClick = (stepId: string) => {
    const currentStepIndex = steps.findIndex(step => step.id === currentStep);
    const clickedStepIndex = steps.findIndex(step => step.id === stepId);
    if (clickedStepIndex <= currentStepIndex) {
      setCurrentStep(stepId);
    }
  };

  const handleNextStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  return (
    <div className='bg-gradient-to-l from-[#e3d7ff] to-[#c5d7ff] text-black w-full min-h-screen'>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[80%] max-w-6xl flex items-stretch">
          {/* Left sidebar with step navigation */}
          <div className="flex">
            <StepNavigation steps={steps} currentStep={currentStep} handleStepClick={handleStepClick} />
          </div>
          
          {/* Main content area */}
          <div className="flex-1 bg-white rounded-xl p-6 flex items-center justify-center">
            {currentStep === 'OrgSetup' && <OrgSetup handleNextStep={handleNextStep} />}
            {currentStep === 'Trigger' && <WebsiteScraper handleNextStep={handleNextStep} />}
            {currentStep === 'trigger' && <div>somerandom</div>}
            {currentStep === 'frameworks' && <div>somerandom</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;