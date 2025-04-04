import React from 'react';
import { useResumeStore } from '../store/useResumeStore';
import { ExternalLink } from 'lucide-react';

export const ResumePreview: React.FC = () => {
  const { resumeData } = useResumeStore();

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      <div className="border-b-2 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{resumeData.personalInfo.name}</h1>
        <div className="mt-2 text-gray-600">
          <p>{resumeData.personalInfo.email} | {resumeData.personalInfo.phone}</p>
          <p>{resumeData.personalInfo.linkedin}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-gray-700">{resumeData.personalInfo.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
            </div>
            <p className="text-gray-700">{exp.company}</p>
            <p className="mt-2 text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-gray-600">{edu.graduationDate}</p>
            </div>
            <p className="text-gray-700">{edu.degree}</p>
            {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
            {edu.description && <p className="mt-2 text-gray-600">{edu.description}</p>}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        {resumeData.skills.map((skillCategory, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800">{skillCategory.category}</h3>
            <p className="text-gray-600">{skillCategory.items?.join(', ') || ''}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{project.name}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-gray-700 mt-1">
              <span className="font-medium">Tech Stack:</span> {project.techStack?.join(', ') || ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};