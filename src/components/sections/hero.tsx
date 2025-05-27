
import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function Hero() {
  const [ref, isIntersecting] = useIntersectionObserver()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
        isIntersecting ? "animate-fade-in" : "opacity-0"
      }`}>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Hi, I'm <span className="text-primary">Surya</span> 👋
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance">
          I love building things and helping people.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="text-lg px-8 py-6 rounded-full"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8 py-6 rounded-full"
          >
            Contact Me
          </Button>
        </div>
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
