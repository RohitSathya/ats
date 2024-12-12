export interface SkillMatch {
  skill: string;
  present: boolean;
  importance: 'high' | 'medium' | 'low';
}

export interface ResumeAnalysis {
  matchScore: number;
  missingKeywords: string[];
  skillMatches: SkillMatch[];
  suggestions: {
    category: string;
    issues: string[];
    improvements: string[];
  }[];
}

export const analyzeResume = async (
  resumeText: string,
  jobDescription: string
): Promise<ResumeAnalysis> => {
  // This is a mock implementation. In a real app, this would use AI to analyze the resume
  return {
    matchScore: 65,
    missingKeywords: ['cloud architecture', 'AWS', 'team leadership'],
    skillMatches: [
      { skill: 'React', present: true, importance: 'high' },
      { skill: 'TypeScript', present: true, importance: 'high' },
      { skill: 'AWS', present: false, importance: 'high' },
      { skill: 'Node.js', present: true, importance: 'medium' },
    ],
    suggestions: [
      {
        category: 'Skills Section',
        issues: [
          'Missing critical cloud computing skills',
          'Technical skills not properly categorized',
        ],
        improvements: [
          'Add a dedicated cloud technologies section',
          'Group skills by category (e.g., Frontend, Backend, DevOps)',
        ],
      },
      {
        category: 'Experience Section',
        issues: [
          'Job achievements lack quantifiable metrics',
          'Leadership experience not highlighted',
        ],
        improvements: [
          'Add specific metrics to achievements (e.g., "Increased performance by 40%")',
          'Highlight team leadership and management responsibilities',
        ],
      },
      {
        category: 'Resume Format',
        issues: [
          'Summary section is too generic',
          'Important keywords are buried in dense paragraphs',
        ],
        improvements: [
          'Tailor summary to specifically match job requirements',
          'Use bullet points to highlight key achievements and skills',
        ],
      },
    ],
  };
};