import React from 'react';
import { useResumeStore } from '../store/useResumeStore';
import { Plus, Trash2 } from 'lucide-react';

export const ResumeForm: React.FC = () => {
  const { resumeData, updatePersonalInfo, updateExperience, updateEducation, updateSkills, updateProjects } = useResumeStore();

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updatePersonalInfo({ [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const newExperience = [...resumeData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    updateExperience(newExperience);
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    updateEducation(newEducation);
  };

  const handleSkillsChange = (index: number, field: string, value: string | string[]) => {
    const newSkills = [...resumeData.skills];
    if (field === 'items' && typeof value === 'string') {
      newSkills[index] = { 
        ...newSkills[index], 
        items: value.split(',').map(item => item.trim()).filter(Boolean)
      };
    } else {
      newSkills[index] = { ...newSkills[index], [field]: value };
    }
    updateSkills(newSkills);
  };

  const handleProjectChange = (index: number, field: string, value: string | string[]) => {
    const newProjects = [...resumeData.projects];
    if (field === 'techStack' && typeof value === 'string') {
      newProjects[index] = { 
        ...newProjects[index], 
        techStack: value.split(',').map(item => item.trim()).filter(Boolean)
      };
    } else {
      newProjects[index] = { ...newProjects[index], [field]: value };
    }
    updateProjects(newProjects);
  };

  const addExperience = () => {
    updateExperience([
      ...resumeData.experience,
      { company: '', position: '', startDate: '', endDate: '', description: '' },
    ]);
  };

  const addEducation = () => {
    updateEducation([
      ...resumeData.education,
      { school: '', degree: '', graduationDate: '', gpa: '', description: '' },
    ]);
  };

  const addSkillCategory = () => {
    updateSkills([...resumeData.skills, { category: '', items: [] }]);
  };

  const addProject = () => {
    updateProjects([...resumeData.projects, { name: '', description: '', techStack: [], link: '' }]);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={resumeData.personalInfo.name}
            onChange={handlePersonalInfoChange}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={resumeData.personalInfo.email}
            onChange={handlePersonalInfoChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            value={resumeData.personalInfo.phone}
            onChange={handlePersonalInfoChange}
            placeholder="Phone"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="linkedin"
            value={resumeData.personalInfo.linkedin}
            onChange={handlePersonalInfoChange}
            placeholder="LinkedIn URL"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="summary"
            value={resumeData.personalInfo.summary}
            onChange={handlePersonalInfoChange}
            placeholder="Professional Summary"
            className="w-full p-2 border rounded h-32"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Experience</h2>
          <button
            onClick={addExperience}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            <Plus size={20} /> Add Experience
          </button>
        </div>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="space-y-4 mb-6 p-4 border rounded">
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              placeholder="Company"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              placeholder="Position"
              className="w-full p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                placeholder="Start Date"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                placeholder="End Date"
                className="w-full p-2 border rounded"
              />
            </div>
            <textarea
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              placeholder="Description"
              className="w-full p-2 border rounded h-32"
            />
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            <Plus size={20} /> Add Education
          </button>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="space-y-4 mb-6 p-4 border rounded">
            <input
              type="text"
              value={edu.school}
              onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
              placeholder="School/University"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              placeholder="Degree"
              className="w-full p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={edu.graduationDate}
                onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
                placeholder="Graduation Date"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={edu.gpa}
                onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                placeholder="GPA"
                className="w-full p-2 border rounded"
              />
            </div>
            <textarea
              value={edu.description}
              onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
              placeholder="Additional Information"
              className="w-full p-2 border rounded h-32"
            />
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <button
            onClick={addSkillCategory}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            <Plus size={20} /> Add Skill Category
          </button>
        </div>
        {resumeData.skills.map((skillCategory, index) => (
          <div key={index} className="space-y-4 mb-6 p-4 border rounded">
            <input
              type="text"
              value={skillCategory.category}
              onChange={(e) => handleSkillsChange(index, 'category', e.target.value)}
              placeholder="Category (e.g., Programming Languages)"
              className="w-full p-2 border rounded"
            />
            <textarea
              value={skillCategory.items?.join(', ') || ''}
              onChange={(e) => handleSkillsChange(index, 'items', e.target.value)}
              placeholder="Skills (comma-separated)"
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <button
            onClick={addProject}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            <Plus size={20} /> Add Project
          </button>
        </div>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="space-y-4 mb-6 p-4 border rounded">
            <input
              type="text"
              value={project.name}
              onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
              placeholder="Project Name"
              className="w-full p-2 border rounded"
            />
            <textarea
              value={project.description}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              placeholder="Project Description"
              className="w-full p-2 border rounded h-32"
            />
            <input
              type="text"
              value={project.link}
              onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
              placeholder="Project Link"
              className="w-full p-2 border rounded"
            />
            <textarea
              value={project.techStack?.join(', ') || ''}
              onChange={(e) => handleProjectChange(index, 'techStack', e.target.value)}
              placeholder="Technologies Used (comma-separated)"
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};