import { useState } from "react";
import { Mail, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { skills } from "@/data/hackathons";

const EmailAlertSection = () => {
  const [email, setEmail] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [mode, setMode] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const { toast } = useToast();

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const toggleOption = (
    value: string,
    current: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((s) => s !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "🎉 You're subscribed!",
      description: "You'll receive hackathon alerts based on your preferences.",
    });

    setEmail("");
    setSelectedSkills([]);
    setMode([]);
    setType([]);
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Bell className="w-4 h-4" />
              <span>Email Alerts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Never Miss a <span className="text-gradient">Hackathon</span>
            </h2>
            <p className="text-muted-foreground">
              Get personalized alerts for hackathons matching your skills and preferences.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="pl-12 h-14 rounded-xl text-base"
              />
            </div>

            {/* Skills Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Select Skills (optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 10).map((skill) => (
                  <Badge
                    key={skill}
                    variant={selectedSkills.includes(skill) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105"
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Mode Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Hackathon Mode
              </label>
              <div className="flex gap-2">
                {["Online", "Offline", "Hybrid"].map((option) => (
                  <Badge
                    key={option}
                    variant={mode.includes(option.toLowerCase()) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105 px-4 py-2"
                    onClick={() =>
                      toggleOption(option.toLowerCase(), mode, setMode)
                    }
                  >
                    {option}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Entry Type
              </label>
              <div className="flex gap-2">
                {["Free", "Paid"].map((option) => (
                  <Badge
                    key={option}
                    variant={type.includes(option.toLowerCase()) ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105 px-4 py-2"
                    onClick={() =>
                      toggleOption(option.toLowerCase(), type, setType)
                    }
                  >
                    {option}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="flex items-center gap-2 p-4 rounded-xl bg-secondary/50 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">Coming Soon:</strong> Auto-fetching hackathons
                from popular platforms and AI-powered recommendations.
              </span>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="coral" size="lg" className="w-full">
              <Bell className="w-5 h-5" />
              Notify Me
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailAlertSection;
