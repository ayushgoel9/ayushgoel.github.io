import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Graduate Student Assistant in CSE 560",
    company: "University at Buffalo",
    location: "Buffalo, NY",
    date: "January 2025 - May 2025",
    responsibilities: [
      "Revamped curriculum for 200+ students, bolstering academic performance and knowledge retention.",
      "Evaluated assignments, exams, and projects, providing targeted feedback to address challenges and enhance understanding.",
    ],
    skills: ["Teaching", "Curriculum Development", "Student Mentoring"],
  },
  {
    title: "Software Development Intern",
    company: "Best Practical Solution",
    location: "Buffalo, NY",
    date: "August 2024 - December 2024",
    responsibilities: [
      "Designed an AI extension, cutting ticket processing time by 40% and increasing agent productivity by 30%.",
      "Engineered a configurable AI back-end and intuitive front-end interfaces, boosting customer satisfaction by 25%.",
    ],
    skills: ["AI", "Full Stack Development", "UX Design"],
  },
  {
    title: "Software Development Freelancer",
    company: "PNSC Infrastructure",
    location: "Delhi, India",
    date: "January 2023 - September 2023",
    responsibilities: [
      "Architected a full-stack web application, restructuring operations for customers, vendors, and employees.",
      "Installed key features such as user authentication, dashboard analytics, and quotation management, eliminating manual paperwork, automating tasks by 2 man-hours, and strengthening stakeholder feedback loops to reduce issue processing time by 25%.",
    ],
    skills: ["Full Stack Development", "CRM", "Analytics"],
  },
  {
    title: "Software Developer",
    company: "InsuranceDekho",
    location: "Gurugaon, India",
    date: "June 2022 - October 2022",
    responsibilities: [
      "Implemented a microservices system enabling customers to resume website journeys via WhatsApp, invigorating retention by 15%, and re-factored mobile site responsiveness, limiting drop-off rates by 12%.",
      "Drove CRM enhancements, improving sales team efficiency by 15%, streamlining lead management processes, and bringing down cost per lead by 20%.",
    ],
    skills: ["Microservices", "WhatsApp Integration", "CRM", "Mobile Responsiveness"],
  },
  {
    title: "Software Development Intern",
    company: "Pepcoding Education",
    location: "Delhi, India",
    date: "December 2021 - June 2022",
    responsibilities: [
      "Streamlined student doubt resolution and video access workflows, reducing response time by 20%.",
      "Optimized API performance, validating enhancements decreased system latency by 17%.",
    ],
    skills: ["API Optimization", "Workflow Automation", "EdTech"],
  },
  {
    title: "Decision Analytics Associate",
    company: "ZS Associates",
    location: "Gurugaon, India",
    date: "March 2021 - November 2021",
    responsibilities: [
      "Led AI adoption, promoting sales engagement by 15% and Rep-Doctor interactions by 20%.",
      "Steered technology strategy improvements, expanding market share for a $2B annual sales business.",
    ],
    skills: ["AI", "Analytics", "Strategy", "Healthcare"],
  },
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <p className="text-lg font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
              <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
              <ul className="list-disc list-inside mb-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="mb-2">
                    {resp}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

