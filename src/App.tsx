import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreview } from './components/ResumePreview';

function App() {
  const [isBuilding, setIsBuilding] = useState(false);

  if (!isBuilding) {
    return <LandingPage onStart={() => setIsBuilding(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm />
          </div>
          <div className="space-y-6">
            <ResumePreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;