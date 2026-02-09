import { Users, User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { EventItem } from "@/data/events";

const EventCard = ({ event }: { event: EventItem }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card rounded-lg border border-border hover-lift p-6 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-lg text-card-foreground">{event.name}</h3>
        <span className="flex items-center gap-1 text-xs font-medium bg-accent text-accent-foreground px-2 py-1 rounded-full">
          {event.type === "Individual" ? <User className="h-3 w-3" /> : <Users className="h-3 w-3" />}
          {event.type}
        </span>
      </div>
      <p className="text-muted-foreground text-sm mb-4 flex-1">{event.description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-xs font-medium text-primary mb-3 hover:underline"
      >
        {expanded ? "Hide Rules" : "View Rules"}
        {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
      </button>

      {expanded && (
        <ul className="text-xs text-muted-foreground mb-4 space-y-1 list-disc list-inside">
          {event.rules.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      <Link
        to={`/register?event=${encodeURIComponent(event.name)}&category=${event.category}`}
        className="gradient-bg text-primary-foreground text-center text-sm font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity"
      >
        Register Now
      </Link>
    </div>
  );
};

export default EventCard;
