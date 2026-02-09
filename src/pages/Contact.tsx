import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-2">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12">Have questions? We'd love to hear from you.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Mail, label: "Email", value: "techfiesta@college.edu" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Venue", value: "Main Auditorium, State University Campus" },
            ].map((c) => (
              <div key={c.label} className="glass-card rounded-xl p-6 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground mb-3">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{c.label}</p>
                <p className="text-sm font-medium text-foreground">{c.value}</p>
              </div>
            ))}
          </div>

          {sent ? (
            <div className="glass-card rounded-xl p-10 text-center max-w-lg mx-auto">
              <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="mt-4 gradient-bg text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5 max-w-xl mx-auto">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                <input className={inputCls} placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input className={inputCls} type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                <input className={inputCls} placeholder="Query about events..." value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea className={inputCls + " resize-none"} rows={4} placeholder="Write your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </form>
          )}

          {/* Organizer details */}
          <div className="mt-12 glass-card rounded-xl p-8 max-w-xl mx-auto">
            <h3 className="font-semibold text-foreground mb-4 text-center">Organizing Committee</h3>
            <div className="space-y-3 text-sm">
              {[
                { name: "Dr. S. Ramesh Kumar", role: "Chief Coordinator", phone: "+91 98765 43210" },
                { name: "Prof. A. Lakshmi Devi", role: "Event Coordinator", phone: "+91 98765 43211" },
                { name: "Arun Prasad (Final Year)", role: "Student Coordinator", phone: "+91 98765 43212" },
              ].map((o) => (
                <div key={o.name} className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-foreground">{o.name}</p>
                    <p className="text-xs text-muted-foreground">{o.role}</p>
                  </div>
                  <span className="text-xs text-primary font-medium">{o.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
