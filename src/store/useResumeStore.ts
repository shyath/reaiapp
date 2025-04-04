import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ResumeData, initialResumeData } from '../types/resume';

interface ResumeStore {
  resumeData: ResumeData;
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
  updateExperience: (experience: ResumeData['experience']) => void;
  updateEducation: (education: ResumeData['education']) => void;
  updateSkills: (skills: ResumeData['skills']) => void;
  updateProjects: (projects: ResumeData['projects']) => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resumeData: initialResumeData,
      updatePersonalInfo: (info) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personalInfo: { ...state.resumeData.personalInfo, ...info },
          },
        })),
      updateExperience: (experience) =>
        set((state) => ({
          resumeData: { ...state.resumeData, experience },
        })),
      updateEducation: (education) =>
        set((state) => ({
          resumeData: { ...state.resumeData, education },
        })),
      updateSkills: (skills) =>
        set((state) => ({
          resumeData: { ...state.resumeData, skills },
        })),
      updateProjects: (projects) =>
        set((state) => ({
          resumeData: { ...state.resumeData, projects },
        })),
    }),
    {
      name: 'resume-storage',
    }
  )
);