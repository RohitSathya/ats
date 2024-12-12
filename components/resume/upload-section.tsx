"use client";

import { Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface UploadSectionProps {
  file: File | null;
  jobDescription: string;
  analyzing: boolean;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onJobDescriptionChange: (value: string) => void;
  onAnalyze: () => void;
}

export function UploadSection({
  file,
  jobDescription,
  analyzing,
  onFileUpload,
  onJobDescriptionChange,
  onAnalyze,
}: UploadSectionProps) {
  return (
    <Card className="p-6 space-y-4">
      <div className="text-center p-8 border-2 border-dashed border-muted rounded-lg">
        <input
          type="file"
          id="resume"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={onFileUpload}
        />
        <label htmlFor="resume" className="cursor-pointer">
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-lg font-medium">
            {file ? file.name : "Upload your resume"}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            PDF, DOC, or DOCX (Max 5MB)
          </p>
        </label>
      </div>

      <Textarea
        placeholder="Paste the job description here..."
        className="min-h-[200px]"
        value={jobDescription}
        onChange={(e) => onJobDescriptionChange(e.target.value)}
      />

      <Button
        className="w-full"
        size="lg"
        onClick={onAnalyze}
        disabled={!file || !jobDescription || analyzing}
      >
        {analyzing ? (
          <>
            <Search className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
          </>
        ) : (
          <>
            <Search className="mr-2 h-4 w-4" /> Analyze Resume
          </>
        )}
      </Button>
    </Card>
  );
}