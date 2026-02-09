import { useState } from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import { technicalEvents, nonTechnicalEvents } from "@/data/events";

const Events = () => {
  const [tab, setTab] = useState<"technical" | "non-technical">("technical");
  const events = tab === "technical" ? technicalEvents : nonTechnicalEvents;

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2 text-foreground">
            Our <span className="gradient-text">Events</span>
          </h1>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Choose from a wide range of technical and non-technical events designed to challenge and inspire you.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-lg border border-border bg-muted p-1">
              <button
                onClick={() => setTab("technical")}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  tab === "technical" ? "gradient-bg text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Technical Events
              </button>
              <button
                onClick={() => setTab("non-technical")}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  tab === "non-technical" ? "gradient-bg text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Non-Technical Events
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
