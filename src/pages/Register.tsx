import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { technicalEvents, nonTechnicalEvents } from "@/data/events";
import { CheckCircle2 } from "lucide-react";

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "PG 1st Year", "PG 2nd Year"];

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  college: string;
  department: string;
  year: string;
  category: "technical" | "non-technical";
  eventName: string;
  participationType: string;
  remarks: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  mobile: "",
  college: "",
  department: "",
  year: "",
  category: "technical",
  eventName: "",
  participationType: "",
  remarks: "",
};

const Register = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") as "technical" | "non-technical" | null;
    const event = searchParams.get("event");
    if (cat) setForm((f) => ({ ...f, category: cat, eventName: event || "" }));
  }, [searchParams]);

  const events = form.category === "technical" ? technicalEvents : nonTechnicalEvents;

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
    if (!form.college.trim()) e.college = "College name is required";
    if (!form.department.trim()) e.department = "Department is required";
    if (!form.year) e.year = "Select year of study";
    if (!form.eventName) e.eventName = "Select an event";
    if (!form.participationType) e.participationType = "Select participation type";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const selectedEvent = events.find((ev) => ev.name === form.eventName);

  useEffect(() => {
    if (selectedEvent) {
      setForm((f) => ({ ...f, participationType: selectedEvent.type }));
    }
  }, [selectedEvent]);

  if (submitted) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <div className="glass-card rounded-xl p-10">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h2>
              <p className="text-muted-foreground mb-2">
                Thank you, <strong>{form.fullName}</strong>. You have been registered for <strong>{form.eventName}</strong>.
              </p>
              <p className="text-sm text-muted-foreground">A confirmation email will be sent to {form.email}.</p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="mt-6 gradient-bg text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Register Another
              </button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const labelCls = "block text-sm font-medium text-foreground mb-1.5";
  const errorCls = "text-xs text-destructive mt-1";

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-2">
            <span className="gradient-text">Register</span> Now
          </h1>
          <p className="text-center text-muted-foreground mb-10">Fill in your details to participate in TechFiesta 2026.</p>

          <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input className={inputCls} placeholder="John Doe" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                {errors.fullName && <p className={errorCls}>{errors.fullName}</p>}
              </div>
              <div>
                <label className={labelCls}>Email *</label>
                <input className={inputCls} type="email" placeholder="john@college.edu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className={errorCls}>{errors.email}</p>}
              </div>
              <div>
                <label className={labelCls}>Mobile Number *</label>
                <input className={inputCls} placeholder="9876543210" maxLength={10} value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, "") })} />
                {errors.mobile && <p className={errorCls}>{errors.mobile}</p>}
              </div>
              <div>
                <label className={labelCls}>College Name *</label>
                <input className={inputCls} placeholder="Your College" value={form.college} onChange={(e) => setForm({ ...form, college: e.target.value })} />
                {errors.college && <p className={errorCls}>{errors.college}</p>}
              </div>
              <div>
                <label className={labelCls}>Department *</label>
                <input className={inputCls} placeholder="Computer Science" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
                {errors.department && <p className={errorCls}>{errors.department}</p>}
              </div>
              <div>
                <label className={labelCls}>Year of Study *</label>
                <select className={inputCls} value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}>
                  <option value="">Select Year</option>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
                {errors.year && <p className={errorCls}>{errors.year}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Event Category *</label>
                <select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as "technical" | "non-technical", eventName: "" })}>
                  <option value="technical">Technical</option>
                  <option value="non-technical">Non-Technical</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Event Name *</label>
                <select className={inputCls} value={form.eventName} onChange={(e) => setForm({ ...form, eventName: e.target.value })}>
                  <option value="">Select Event</option>
                  {events.map((ev) => <option key={ev.id} value={ev.name}>{ev.name}</option>)}
                </select>
                {errors.eventName && <p className={errorCls}>{errors.eventName}</p>}
              </div>
            </div>

            <div>
              <label className={labelCls}>Participation Type *</label>
              <input className={inputCls} value={form.participationType} readOnly placeholder="Auto-filled based on event" />
              {errors.participationType && <p className={errorCls}>{errors.participationType}</p>}
            </div>

            <div>
              <label className={labelCls}>Remarks</label>
              <textarea className={inputCls + " resize-none"} rows={3} placeholder="Any additional information..." value={form.remarks} onChange={(e) => setForm({ ...form, remarks: e.target.value })} />
            </div>

            <button type="submit" className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
