import { Card } from "@/components/ui/card";
import { Search, Target, Lightbulb } from "lucide-react";

export function FeatureCards() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Search className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Deep Analysis</h3>
        </div>
        <p className="text-muted-foreground">
          Get detailed insights into how well your resume matches the job
          requirements and where improvements are needed.
        </p>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Target className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Skills Gap Analysis</h3>
        </div>
        <p className="text-muted-foreground">
          Identify missing skills and keywords that are crucial for the position
          you're applying for.
        </p>
      </Card>
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Lightbulb className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Smart Suggestions</h3>
        </div>
        <p className="text-muted-foreground">
          Receive actionable recommendations to improve your resume and increase
          your chances of landing the job.
        </p>
      </Card>
    </div>
  );
}