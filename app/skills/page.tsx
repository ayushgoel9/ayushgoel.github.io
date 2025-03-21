import { Card, CardContent } from "@/components/ui/card"
import { TechIcons } from "@/components/tech-icons"

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full Stack Development Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Full Stack Development</h2>

          <div className="flex flex-wrap gap-4 mb-4">
            <TechIcons.JavaScript className="h-8 w-8" />
            <TechIcons.Python className="h-8 w-8" />
            <TechIcons.React className="h-8 w-8" />
            <TechIcons.Node className="h-8 w-8" />
            <TechIcons.C className="h-8 w-8" />
            <TechIcons.PostgreSQL className="h-8 w-8" />
            <TechIcons.MongoDB className="h-8 w-8" />
            <TechIcons.NoSQL className="h-8 w-8" />
            <TechIcons.Git className="h-8 w-8" />
            <TechIcons.Docker className="h-8 w-8" />
            <TechIcons.Postman className="h-8 w-8" />
            <TechIcons.Agile className="h-8 w-8" />
            <TechIcons.CICD className="h-8 w-8" />
            <TechIcons.Kubernetes className="h-8 w-8" />
            <TechIcons.Jenkins className="h-8 w-8" />
          </div>

          <div className="mb-4">
            <p className="font-medium">Technologies:</p>
            <p>
              JavaScript, Python, React.js, Node.js, C, PostgreSQL, MongoDB, NoSQL, Git, Docker, Postman, Agile, CI/CD,
              Kubernetes, Jenkins
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>JavaScript, React.js, Node.js</strong> – Developed a full-stack CRM system using the MERN
                  stack, implementing features such as user authentication, dashboard analytics, and quotation
                  management to streamline business operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>Python, Flask</strong> – Developed RESTful APIs using Flask for web applications, ensuring
                  efficient data processing and seamless integration with front-end systems. Built a chatbot interface
                  with Flask and React, enabling real-time user interactions. Designed and implemented authentication
                  mechanisms and request handling for scalable web applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>C, PostgreSQL, MongoDB, NoSQL</strong> – Designed and optimized database architectures, using
                  PostgreSQL for structured data in enterprise applications and MongoDB/NoSQL for scalable and flexible
                  data storage in AI-based projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>Git, Docker, Kubernetes, Jenkins, CI/CD</strong> – Integrated CI/CD pipelines and
                  containerized applications using Docker and Kubernetes, ensuring scalable deployments. Automated
                  software testing and deployment using Jenkins to improve system reliability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>Postman, Agile</strong> – Worked in Agile environments, using Postman to test and debug
                  RESTful APIs. Developed and refined microservices architecture to improve system scalability and
                  efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Science and ML Engineer Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Data Science and ML Engineer</h2>

          <div className="flex flex-wrap gap-4 mb-4">
            <TechIcons.Python className="h-8 w-8" />
            <TechIcons.Hadoop className="h-8 w-8" />
            <TechIcons.PyTorch className="h-8 w-8" />
            <TechIcons.ApacheSpark className="h-8 w-8" />
            <TechIcons.Kafka className="h-8 w-8" />
            <TechIcons.Kubernetes className="h-8 w-8" />
            <TechIcons.GCP className="h-8 w-8" />
            <TechIcons.AWS className="h-8 w-8" />
          </div>

          <div className="mb-4">
            <p className="font-medium">Technologies:</p>
            <p>Python, Hadoop, PyTorch, Apache Spark, Kafka, Kubernetes, GCP, AWS</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>Python & PyTorch</strong>: Developed deep learning models (ResNet50, ResNet101, VGG19) for
                  brain cancer detection using MRI images, achieving 95.96% accuracy. Fine-tuned hyperparameters and
                  re-architected models to improve performance by 2%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>AI Integration</strong>: Implemented a real-time AI extension for Request Tracker, integrating
                  AI-driven features such as sentiment analysis, auto-complete, tone adjustment, and ticket
                  summarization. Leveraged Kafka for event-driven processing and scalable model inference, reducing
                  ticket processing time by 40%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>GCP & AWS</strong>: Trained and deployed deep learning models for cancer detection and NLP
                  tasks using Google Colab and AWS EC2, optimizing cloud resource usage for cost-efficient AI model
                  inference.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p>
                  <strong>Kubernetes & Docker</strong>: Containerized AI-powered services and deployed scalable ML
                  models for chatbot query classification and document retrieval, ensuring efficient deployment with
                  Kubernetes orchestration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

