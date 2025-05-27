
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const projectsData = [
  {
    title: "ASTHETICA – Online Art Gallery",
    duration: "Feb 2024 – Present",
    status: "Ongoing",
    description: "Developing a feature-rich online platform for artists to showcase and sell artwork, enabling buyers to purchase or bid.",
    techStack: ["React.js", "Spring Boot", "MySQL", "Hibernate"],
    links: {
      github: "https://github.com/isuryaprakashh/Asthetica",
      demo: "https://asthetica.vercel.app"
    },
    videoPreview: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  },
  {
    title: "Property Sales and Rental Management",
    duration: "July 2024 – Dec 2024",
    status: "Completed",
    description: "Developed a web-based platform for property sales and rentals, allowing users to list, search, and inquire about properties.",
    techStack: ["Django", "SQLite3", "HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/isuryaprakashh/PS6",
      demo: "https://psrm.pythonanywhere.com"
    },
    videoPreview: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
  }
]

export function Projects() {
  const [ref, isIntersecting] = useIntersectionObserver()

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  {project.title === "ASTHETICA – Online Art Gallery" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/8FuDBcd2YFo?autoplay=1&loop=1&playlist=8FuDBcd2YFo&controls=0&mute=1"
                      title="Asthetica - An Online Art Gallery Platform built using React.js(Frontend) and SpringBoot(Backend)"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    />
                  ) : project.title === "Property Sales and Rental Management" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/4eC9_dBD5nU?autoplay=1&loop=1&playlist=4eC9_dBD5nU&controls=0&mute=1"
                      title="Property Sales and Rental Management Project Preview Built using DJANGO."
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      loop
                      autoPlay
                      muted
                      preload="metadata"
                      poster={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=340&fit=crop&crop=center`}
                    >
                      <source src={project.videoPreview} type="video/mp4" />
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        Video preview not supported in your browser
                      </div>
                    </video>
                  )}
                </div>
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl flex-1">{project.title}</CardTitle>
                      <Badge className={`ml-2 ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
