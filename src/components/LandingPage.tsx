import React from 'react';
import { FileText } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center">
        <div className="flex justify-center mb-8">
          <FileText className="w-16 h-16 text-indigo-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Create Your Professional Resume
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build a stunning resume in minutes with our easy-to-use builder.
          Professional templates and real-time preview.
        </p>
        <button
          onClick={onStart}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                   hover:bg-indigo-700 transition-colors duration-200 shadow-lg"
        >
          Create Resume
        </button>
      </div>
    </div>
  );
};