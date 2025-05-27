
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const educationData = [
  {
    institution: "KL University",
    duration: "2023 – 2027",
    degree: "B.Tech in Computer Science and Engineering",
    type: "University"
  },
  {
    institution: "Viswasai Junior College",
    duration: "2021 – 2023",
    degree: "Intermediate (MPC – Mathematics, Physics, Chemistry)",
    type: "College"
  },
  {
    institution: "Dr. Kishore's Ratnam EM High School",
    duration: "2020 – 2021",
    degree: "Secondary School Certificate (SSC)",
    type: "High School"
  }
]

export function Education() {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section id="education" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Education</h2>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {edu.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
