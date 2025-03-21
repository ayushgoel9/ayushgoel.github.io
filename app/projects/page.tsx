import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Open Source Request Tracker AI Extension",
    description:
      "An AI-powered extension for the Request Tracker ticketing system that enhances productivity and user experience.",
    technologies: ["Perl", "TypeScript", "HTML", "CSS", "AI"],
    details: [
      "Integrated AI-driven features such as sentiment analysis, auto-complete, tone adjustment, and ticket summarization",
      "Structured a modular AI backend for model selection and crafted an intuitive front-end, enhancing system scalability and narrowing model integration time by 50%",
    ],
    github: "https://github.com/Neilpatel5502/rt-extension-ai/tree/main",
    demo: "",
  },
  {
    title: "Wikipedia ChatBot",
    description:
      "An intelligent chatbot that answers user queries by retrieving and summarizing information from Wikipedia.",
    technologies: ["Python", "Flask", "React", "DistilBERT", "T5"],
    details: [
      "Assembled a chat bot query pipeline using DistilBERT for topic classification with 87% accuracy and T5 summarizer for document retrieval, delivering query results. Extracted a dashboard to track and analyze query metrics.",
      "Invented an inverted index with Boolean retrieval, seamlessly organizing top 10 documents in 0.06 seconds.",
    ],
    github: "https://github.com/ayushgoel9/Chatbot",
    demo: "",
  },
  {
    title: "Brain Cancer Detection",
    description: "A deep learning system for detecting brain cancer from MRI images with high accuracy.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Computer Vision"],
    details: [
      "Trained deep learning models (ResNet50, ResNet101, VGG19) on 4,600 MRI images, achieving 95.96% accuracy.",
      "Fine-tuned hyper parameters and improve performance of model by 2% through re-architecture.",
    ],
    github: "https://github.com/ayushgoel9/Brain-Cancer-Detection",
    demo: "",
  },
  {
    title: "Lung Cancer Detection using FCM",
    description: "Research project for automated lung cancer detection using image processing and machine learning.",
    technologies: ["Python", "MATLAB", "Image Processing", "Machine Learning"],
    details: [
      "Automated software for cancer analysis using image processing and machine learning models, attaining 85% accuracy.",
      "Published research in International Journal of Research and Analytical Review (IJRAR), 2019.",
    ],
    github: "",
    publication: "",
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <ul className="list-disc list-inside mb-6">
                {project.details.map((detail, i) => (
                  <li key={i} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}

                {project.demo && (
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}

                {project.publication && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.publication} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Publication
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

