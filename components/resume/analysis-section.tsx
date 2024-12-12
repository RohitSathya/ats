"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  BarChart2,
  ListChecks,
  Lightbulb,
} from "lucide-react";
import type { ResumeAnalysis } from "@/lib/analysis-utils";

interface AnalysisSectionProps {
  analyzing: boolean;
  progress: number;
  analysis: ResumeAnalysis | null;
}

export function AnalysisSection({
  analyzing,
  progress,
  analysis,
}: AnalysisSectionProps) {
  if (analyzing) {
    return (
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Analyzing Resume</h2>
        <Progress value={progress} className="w-full" />
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            🔍 Scanning resume content...
          </p>
          <p className="text-sm text-muted-foreground">
            📊 Analyzing skill matches...
          </p>
          <p className="text-sm text-muted-foreground">
            💡 Generating improvement suggestions...
          </p>
          <p className="text-sm text-muted-foreground">
            ✨ Preparing detailed feedback...
          </p>
        </div>
      </Card>
    );
  }

  if (!analysis) {
    return (
      <Card className="p-6 flex flex-col items-center justify-center h-[600px] text-muted-foreground">
        <AlertCircle className="h-16 w-16 mb-4" />
        <p>Upload your resume and job description to get started</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Resume Analysis</h2>
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5" />
            <span className="font-semibold">
              Match Score: {analysis.matchScore}%
            </span>
          </div>
        </div>
        <Alert
          className={
            analysis.matchScore >= 80
              ? "border-green-500/50 bg-green-500/10"
              : analysis.matchScore >= 60
              ? "border-yellow-500/50 bg-yellow-500/10"
              : "border-red-500/50 bg-red-500/10"
          }
        >
          <AlertDescription>
            {analysis.matchScore >= 80
              ? "Your resume is well-matched with the job requirements!"
              : analysis.matchScore >= 60
              ? "Your resume needs some improvements to better match the job."
              : "Significant improvements needed to match job requirements."}
          </AlertDescription>
        </Alert>
      </div>

      <Tabs defaultValue="skills" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="skills">Skills Match</TabsTrigger>
          <TabsTrigger value="issues">Issues Found</TabsTrigger>
          <TabsTrigger value="improvements">Improvements</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-4">
          <div className="grid gap-2">
            {analysis.skillMatches.map((skill) => (
              <div
                key={skill.skill}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  {skill.present ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <span>{skill.skill}</span>
                </div>
                <span
                  className={`text-sm ${
                    skill.importance === "high"
                      ? "text-red-500"
                      : skill.importance === "medium"
                      ? "text-yellow-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {skill.importance} priority
                </span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          {analysis.suggestions.map((suggestion, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium flex items-center gap-2">
                <ListChecks className="h-5 w-5" />
                {suggestion.category}
              </h3>
              <ul className="space-y-2">
                {suggestion.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <AlertCircle className="h-4 w-4 mt-0.5 text-red-500" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="improvements" className="space-y-4">
          {analysis.suggestions.map((suggestion, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                {suggestion.category}
              </h3>
              <ul className="space-y-2">
                {suggestion.improvements.map((improvement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
}