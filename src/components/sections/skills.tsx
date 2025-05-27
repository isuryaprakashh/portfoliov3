
import React from "react"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const skillsData = {
  "Languages": ["Java", "C", "JavaScript", "Python"],
  "Frameworks": ["Django", "Flask", "React.js", "Spring Boot"],
  "Databases": ["MySQL", "SQLite3", "MongoDB"],
  "UI/Styling": ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Figma", "Framer"],
  "Other": ["UI Design"]
}

const skillLogos: Record<string, JSX.Element> = {
  Java: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="h-5 w-5 inline mr-2" />,
  C: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="h-5 w-5 inline mr-2" />,
  "JavaScript": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-5 w-5 inline mr-2" />,
  Python: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-5 w-5 inline mr-2" />,
  Django: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="h-5 w-5 inline mr-2" />,
  Flask: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="h-5 w-5 inline mr-2" />,
  "React.js": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="h-5 w-5 inline mr-2" />,
  "Spring Boot": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="h-5 w-5 inline mr-2" />,
  MySQL: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="h-5 w-5 inline mr-2" />,
  SQLite3: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite3" className="h-5 w-5 inline mr-2" />,
  MongoDB: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-5 w-5 inline mr-2" />,
  HTML: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="h-5 w-5 inline mr-2" />,
  CSS: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="h-5 w-5 inline mr-2" />,
  Bootstrap: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="h-5 w-5 inline mr-2" />,
  "Tailwind CSS": (
    <svg viewBox="0 0 256 154" className="h-5 w-5 inline mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M128 0C92.8 0 73.6 19.2 70.4 57.6c6.4-9.6 14.4-13.6 24-12.8 10.4.8 17.6 6.4 22.4 16 6.4 12.8 14.4 19.2 24 19.2 6.4 0 12-2.4 17.6-7.2 5.6-4.8 9.6-12 11.2-22.4C164.8 19.2 145.6 0 128 0zm-57.6 57.6C35.2 57.6 16 76.8 12.8 115.2c6.4-9.6 14.4-13.6 24-12.8 10.4.8 17.6 6.4 22.4 16 6.4 12.8 14.4 19.2 24 19.2 6.4 0 12-2.4 17.6-7.2 5.6-4.8 9.6-12 11.2-22.4C100.8 76.8 81.6 57.6 70.4 57.6zm115.2 0c-35.2 0-54.4 19.2-57.6 57.6 6.4-9.6 14.4-13.6 24-12.8 10.4.8 17.6 6.4 22.4 16 6.4 12.8 14.4 19.2 24 19.2 6.4 0 12-2.4 17.6-7.2 5.6-4.8 9.6-12 11.2-22.4C228.8 76.8 209.6 57.6 198.4 57.6z" fill="#38BDF8"/></svg>
  ),
  Framer: (
    <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="Framer" className="h-5 w-5 inline mr-2" />
  ),
  Figma: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-5 w-5 inline mr-2" />,
  "UI Design": <svg className="h-5 w-5 inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
}

export function Skills() {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {skillLogos[skill]}
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
