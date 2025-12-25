import { Link } from "react-router-dom";
import { Rocket, Bell, Sparkles, Code, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-12 md:py-20">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/5 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-coral-light animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Discover Amazing Hackathons</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Next{" "}
              <span className="text-gradient">Hackathon</span>{" "}
              Adventure
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              A student-focused platform to discover hackathons worldwide.
              Get email alerts, filter by skills, and never miss an opportunity
              to build and innovate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/hackathons">
                <Button variant="coral" size="lg" className="w-full sm:w-auto">
                  <Rocket className="w-5 h-5" />
                  Browse Hackathons
                </Button>
              </Link>
              <Link to="/alerts">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Bell className="w-5 h-5" />
                  Get Email Alerts
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Hackathons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">$2M+</div>
                <div className="text-sm text-muted-foreground">In Prizes</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80">
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-3xl gradient-coral shadow-glow flex items-center justify-center animate-float">
                  <Rocket className="w-20 h-20 text-primary-foreground" />
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute top-0 left-0 w-16 h-16 rounded-2xl bg-card shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Code className="w-8 h-8 text-primary" />
              </div>

              <div
                className="absolute top-10 right-0 w-14 h-14 rounded-xl bg-card shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Trophy className="w-7 h-7 text-warning" />
              </div>

              <div
                className="absolute bottom-10 left-0 w-14 h-14 rounded-xl bg-card shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Users className="w-7 h-7 text-success" />
              </div>

              <div
                className="absolute bottom-0 right-10 w-12 h-12 rounded-lg bg-card shadow-md flex items-center justify-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Sparkles className="w-6 h-6 text-info" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
