import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hackathon } from "@/data/hackathons";
import { cn } from "@/lib/utils";

interface HackathonCardProps {
  hackathon: Hackathon;
  index?: number;
}

const HackathonCard = ({ hackathon, index = 0 }: HackathonCardProps) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-sm card-hover animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image/Banner */}
      <div className="relative h-40 bg-gradient-to-br from-secondary to-pink-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl gradient-coral flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
            <Trophy className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-3 left-3 bg-card rounded-xl p-2 shadow-md text-center min-w-[56px]">
          <span className="block text-xs font-semibold text-primary uppercase">
            {hackathon.date.month}
          </span>
          <span className="block text-xl font-bold text-foreground">
            {hackathon.date.day}
          </span>
        </div>

        {/* Mode Badge */}
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge
            variant="secondary"
            className={cn(
              "text-xs font-medium",
              hackathon.mode === "online" && "bg-success/20 text-success",
              hackathon.mode === "offline" && "bg-info/20 text-info",
              hackathon.mode === "hybrid" && "bg-warning/20 text-warning"
            )}
          >
            {hackathon.mode.charAt(0).toUpperCase() + hackathon.mode.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {hackathon.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">
          by {hackathon.organizer}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{hackathon.location}</span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{hackathon.participants}+</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-3 h-3" />
            <span>{hackathon.prize}</span>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "text-xs",
              hackathon.type === "free"
                ? "border-success text-success"
                : "border-primary text-primary"
            )}
          >
            {hackathon.type.charAt(0).toUpperCase() + hackathon.type.slice(1)}
          </Badge>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hackathon.skills.slice(0, 3).map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs bg-secondary text-secondary-foreground"
            >
              {skill}
            </Badge>
          ))}
          {hackathon.skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{hackathon.skills.length - 3}
            </Badge>
          )}
        </div>

        {/* CTA */}
        <Link to={`/hackathon/${hackathon.id}`}>
          <Button variant="coral" className="w-full" size="sm">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HackathonCard;
