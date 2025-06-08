
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function About() {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">About Me</h2>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm Surya Prakash Inukurthi, an aspiring full-stack developer passionate about building scalable applications, solving complex problems, and continuously learning new technologies.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I enjoy working on hands-on projects, collaborating with others, and taking the lead when needed. Currently pursuing my B.Tech in Computer Science & Engineering at KL University (2023–2027).
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-6xl"><img src="https://avatars.githubusercontent.com/u/163630713?v=4" alt="Surya Image" className="rounded-full"/></span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
