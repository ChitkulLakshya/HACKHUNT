import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import EmailAlertSection from "@/components/EmailAlertSection";
import { Sparkles, Zap, Globe, Target } from "lucide-react";

const Alerts = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Alerts",
      description:
        "Get notifications only for hackathons matching your skills and interests.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Be the first to know when new hackathons are announced.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description:
        "Discover hackathons from around the world, online and offline.",
    },
    {
      icon: Sparkles,
      title: "AI Recommendations",
      description:
        "Coming soon: Smart suggestions based on your profile and history.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Email Alerts | Hackathon Finder</title>
        <meta
          name="description"
          content="Never miss a hackathon. Get personalized email alerts for hackathons matching your skills and preferences."
        />
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Navbar />

        {/* Hero */}
        <section className="gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Stay <span className="text-gradient">Ahead</span> of the Game
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Set up personalized alerts and never miss an opportunity to
              participate in hackathons that match your skills.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl p-6 shadow-sm card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Alert Form */}
        <EmailAlertSection />
      </div>
    </>
  );
};

export default Alerts;
