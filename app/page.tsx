import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Ayush Goel</h1>
          <div className="space-y-2 mb-4">
            <p className="text-xl">Full Stack Developer</p>
            <p className="text-xl">Data Scientist</p>
            <p className="text-xl">ML Engineer</p>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Image src="/ayush-goel.jpg" alt="Ayush Goel" width={200} height={200} className="rounded-full" />
        </div>
      </div>

      <p className="text-lg mb-8">
        I am a Computer Science graduate student at the University at Buffalo with a strong background in AI, machine
        learning, and full-stack development. I have worked on AI-powered solutions, workflow optimization, and system
        efficiency improvements at companies like InsuranceDekho and ZS Associates. As an open-source contributor, I
        have developed AI-driven enhancements for Request Tracker and built intelligent chatbots using NLP techniques.
      </p>

      <div className="flex space-x-4 mb-8">
        <Link href="https://github.com/ayushgoel9" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline" className="rounded-full">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/ayush-goel-31029313a/" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline" className="rounded-full">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="mailto:technoayush77@gmail.com">
          <Button size="icon" variant="outline" className="rounded-full">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
      </div>

      <div>
        <Button asChild>
          <Link
            href="https://drive.google.com/file/d/1w-9nzXu1KTgjDJrTwGMZDvMz_qGMlsSU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Link>
        </Button>
      </div>
    </div>
  )
}

