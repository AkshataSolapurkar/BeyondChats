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
    <div className="bg-gradient-to-l from-[#e5dcf9] to-[#c5d7ff] text-black w-full min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* For small screens, render the horizontal navigation at the top */}
        <div className="w-full md:hidden">
          <StepNavigation steps={steps} currentStep={currentStep} handleStepClick={handleStepClick} />
        </div>
        <div className="md:w-[80%] w-[90%] max-w-6xl flex flex-col md:flex-row">
          {/* For medium and larger screens, render the vertical sidebar */}
          <div className="hidden md:block">
            <StepNavigation steps={steps} currentStep={currentStep} handleStepClick={handleStepClick} />
          </div>
          {/* Main content area */}
          <div className="flex-1 bg-white rounded-xl p-6 flex items-center justify-center">
            {currentStep === 'OrgSetup' && <OrgSetup handleNextStep={handleNextStep} />}
            {currentStep === 'Trigger' && <WebsiteScraper handleNextStep={handleNextStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
