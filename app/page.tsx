"use client";

import { useState } from "react";
import { UploadSection } from "@/components/resume/upload-section";
import { AnalysisSection } from "@/components/resume/analysis-section";
import { FeatureCards } from "@/components/resume/feature-cards";
import { analyzeResume, type ResumeAnalysis } from "@/lib/analysis-utils";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleAnalyze = async () => {
    setAnalyzing(true);
    setProgress(0);
    
    // Simulate file reading and analysis
    for (let i = 0; i <= 100; i += 20) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProgress(i);
    }

    // In a real application, you would:
    // 1. Read the file content
    // 2. Extract text from PDF/DOC
    // 3. Send to AI service for analysis
    const mockResumeText = "Sample resume text";
    const result = await analyzeResume(mockResumeText, jobDescription);
    setAnalysis(result);
    setAnalyzing(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            AI Resume Analyzer
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get detailed feedback on your resume's match with job requirements.
            Identify gaps, missing keywords, and areas for improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <UploadSection
            file={file}
            jobDescription={jobDescription}
            analyzing={analyzing}
            onFileUpload={handleFileUpload}
            onJobDescriptionChange={setJobDescription}
            onAnalyze={handleAnalyze}
          />
          <AnalysisSection
            analyzing={analyzing}
            progress={progress}
            analysis={analysis}
          />
        </div>

        <FeatureCards />
      </div>
    </main>
  );
}