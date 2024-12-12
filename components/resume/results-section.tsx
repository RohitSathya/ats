"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, CheckCircle } from "lucide-react";

interface ResultsSectionProps {
  analyzing: boolean;
  progress: number;
  onDownload: () => void;
}

export function ResultsSection({
  analyzing,
  progress,
  onDownload,
}: ResultsSectionProps) {
  return (
    <Card className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Optimization Results</h2>
      {analyzing ? (
        <div className="space-y-4">
          <Progress value={progress} className="w-full" />
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ⚡ Analyzing resume structure...
            </p>
            <p className="text-sm text-muted-foreground">
              📝 Extracting key skills and experience...
            </p>
            <p className="text-sm text-muted-foreground">
              🎯 Matching with job requirements...
            </p>
            <p className="text-sm text-muted-foreground">
              ✨ Optimizing content...
            </p>
          </div>
        </div>
      ) : progress === 100 ? (
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-green-500">
            <CheckCircle className="h-5 w-5" />
            <span>Resume optimized successfully!</span>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Improvements Made:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Enhanced keyword optimization</li>
              <li>✓ Improved readability and formatting</li>
              <li>✓ Added missing key skills</li>
              <li>✓ Strengthened action verbs</li>
              <li>✓ Optimized for ATS systems</li>
            </ul>
          </div>
          <Button className="w-full" variant="outline" onClick={onDownload}>
            <Download className="mr-2 h-4 w-4" /> Download Optimized Resume
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
          <FileText className="h-16 w-16 mb-4" />
          <p>Upload your resume and job description to get started</p>
        </div>
      )}
    </Card>
  );
}