import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Users, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: CalendarDays, label: "Date", value: "March 15-16, 2026" },
  { icon: MapPin, label: "Venue", value: "Main Auditorium, State University" },
  { icon: Users, label: "Eligibility", value: "All UG & PG Students" },
  { icon: Trophy, label: "Prizes", value: "Worth ₹1,00,000+" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/80" />
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <p className="animate-fade-up text-sm md:text-base font-medium tracking-widest uppercase mb-4 text-primary-foreground/80">
          Department of Computer Science & Engineering presents
        </p>
        <h1 className="animate-fade-up text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          TechFiesta <span className="text-primary">2026</span>
        </h1>
        <p className="animate-fade-up-delay-1 text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          A State-Level Technical & Non-Technical Symposium — Innovate, Compete, Excel
        </p>
        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/events"
            className="border border-primary-foreground/30 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Event <span className="gradient-text">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`glass-card rounded-lg p-6 text-center hover-lift animate-fade-up-delay-${Math.min(i, 3) as 0 | 1 | 2 | 3}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4">
                <h.icon className="h-7 w-7" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{h.label}</p>
              <p className="font-semibold text-foreground">{h.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your Talent?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Join hundreds of students from across the state. Register now and be part of something extraordinary.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 bg-primary-foreground text-secondary font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Register Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
