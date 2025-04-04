export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
  };
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    graduationDate: string;
    gpa: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    techStack: string[];
    link: string;
  }[];
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    summary: '',
  },
  experience: [{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  }],
  education: [{
    school: '',
    degree: '',
    graduationDate: '',
    gpa: '',
    description: '',
  }],
  skills: [{
    category: 'Programming Languages',
    items: [],
  }],
  projects: [{
    name: '',
    description: '',
    techStack: [],
    link: '',
  }],
};