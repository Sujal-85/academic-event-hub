export interface EventItem {
  id: string;
  name: string;
  description: string;
  rules: string[];
  type: "Individual" | "Team" | "Individual / Team";
  category: "technical" | "non-technical";
}

export const technicalEvents: EventItem[] = [
  {
    id: "t1",
    name: "Code Sprint",
    description: "A competitive programming challenge to solve algorithmic problems within a time limit.",
    rules: ["Individual participation", "Duration: 2 hours", "Languages: C, C++, Java, Python", "No internet access allowed"],
    type: "Individual",
    category: "technical",
  },
  {
    id: "t2",
    name: "Web Wizards",
    description: "Design and develop a responsive website based on a given theme within the allotted time.",
    rules: ["Team of 2 members", "Duration: 3 hours", "Frameworks allowed", "Must be responsive"],
    type: "Team",
    category: "technical",
  },
  {
    id: "t3",
    name: "Debug Derby",
    description: "Find and fix bugs in given code snippets across multiple programming languages.",
    rules: ["Individual participation", "Duration: 1.5 hours", "5 programs to debug", "Partial marking available"],
    type: "Individual",
    category: "technical",
  },
  {
    id: "t4",
    name: "Paper Presentation",
    description: "Present a technical paper on emerging technologies with innovative ideas and solutions.",
    rules: ["Team of 2-3 members", "Duration: 10 min + 5 min Q&A", "IEEE format required", "Abstract submission mandatory"],
    type: "Team",
    category: "technical",
  },
  {
    id: "t5",
    name: "Tech Quiz",
    description: "A fast-paced quiz covering computer science fundamentals, current tech trends, and logical reasoning.",
    rules: ["Team of 2 members", "3 rounds", "No electronic devices", "Tie-breaker round if needed"],
    type: "Team",
    category: "technical",
  },
  {
    id: "t6",
    name: "Project Expo",
    description: "Showcase your innovative project with a working prototype and impress the judges.",
    rules: ["Team of 2-4 members", "Working prototype required", "10 min presentation", "Project report mandatory"],
    type: "Team",
    category: "technical",
  },
];

export const nonTechnicalEvents: EventItem[] = [
  {
    id: "n1",
    name: "Treasure Hunt",
    description: "Solve clues and riddles to find hidden treasures across the campus in this exciting adventure.",
    rules: ["Team of 3-4 members", "Duration: 1 hour", "Campus boundaries apply", "Phone usage restricted"],
    type: "Team",
    category: "non-technical",
  },
  {
    id: "n2",
    name: "Photography Contest",
    description: "Capture the essence of the event and campus life through your lens. Theme will be revealed on spot.",
    rules: ["Individual participation", "DSLR or smartphone allowed", "Basic editing permitted", "Submit 3 best shots"],
    type: "Individual",
    category: "non-technical",
  },
  {
    id: "n3",
    name: "Just a Minute (JAM)",
    description: "Speak for one minute on a random topic without hesitation, repetition, or deviation.",
    rules: ["Individual participation", "Topics given on spot", "No filler words", "Judges' decision is final"],
    type: "Individual",
    category: "non-technical",
  },
  {
    id: "n4",
    name: "Connections",
    description: "Identify the common connection between a set of given clues. Test your lateral thinking!",
    rules: ["Team of 2 members", "Multiple rounds", "Buzzer round included", "Negative marking in finals"],
    type: "Team",
    category: "non-technical",
  },
  {
    id: "n5",
    name: "Meme War",
    description: "Create the funniest and most creative memes on given topics. Let your humor shine!",
    rules: ["Individual participation", "Duration: 45 minutes", "No offensive content", "Original creations only"],
    type: "Individual",
    category: "non-technical",
  },
];

export const allEvents = [...technicalEvents, ...nonTechnicalEvents];
