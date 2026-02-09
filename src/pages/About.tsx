import Layout from "@/components/Layout";
import { BookOpen, Target, Eye, User } from "lucide-react";

const faculty = [
  { name: "Dr. S. Ramesh Kumar", role: "Head of Department & Chief Coordinator", specialization: "Artificial Intelligence & Machine Learning" },
  { name: "Prof. A. Lakshmi Devi", role: "Event Coordinator", specialization: "Data Science & Cloud Computing" },
  { name: "Dr. K. Venkatesh", role: "Technical Advisor", specialization: "Cybersecurity & IoT" },
  { name: "Prof. M. Priya", role: "Student Affairs Coordinator", specialization: "Software Engineering" },
];

const About = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-2">
          About the <span className="gradient-text">Department</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12">Department of Computer Science & Engineering</p>

        {/* Overview */}
        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Department Overview</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The Department of Computer Science & Engineering was established in 2001 and has since grown to become one of the premier departments in the state. With a strong focus on innovation, research, and industry collaboration, the department has produced thousands of successful graduates. Our state-of-the-art labs, experienced faculty, and vibrant student community make us a hub for technological excellence.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a globally recognized center of excellence in computing education and research, fostering innovation and producing ethically responsible technologists who contribute to societal progress.
            </p>
          </div>
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Mission</h2>
            </div>
            <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed list-disc list-inside">
              <li>Provide quality education with industry-relevant curriculum</li>
              <li>Promote research and innovation among students and faculty</li>
              <li>Foster collaboration with industry and academic institutions</li>
              <li>Develop socially responsible and ethical computing professionals</li>
            </ul>
          </div>
        </div>

        {/* Faculty */}
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Faculty <span className="gradient-text">Coordinators</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faculty.map((f) => (
            <div key={f.name} className="glass-card rounded-xl p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.name}</h3>
                  <p className="text-sm text-primary font-medium">{f.role}</p>
                  <p className="text-xs text-muted-foreground">{f.specialization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
