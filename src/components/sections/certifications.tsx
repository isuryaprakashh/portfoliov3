
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const certificationsData = [
  {
    title: "MongoDB Associate Developer Certificate",
    issuer: "MongoDB",
    issued: "May 2025",
    verificationUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/54e84df1-6074-4984-82fb-5b68a6bec41c-surya-prakash-inukurthi-47839e91-9e9e-4818-95b3-8bc007fb0d87-certificate.pdf",
    logo: "https://imgs.search.brave.com/fnJZEkPHx7HMdVhjp0-9d9zQcxqguSwxCi7CPdBsHfA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMHhCSGRl/dHlWS1pWWS1TdS13/c3h1MUR1VWtMRnFI/bGNFOWlJeF91NjRE/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE11YzJW/bGEyeHZaMjh1L1ky/OXRMMnh2WjI4dGNH/NW4vTHpRMEx6RXZi/Vzl1WjI5ay9ZaTFz/YjJkdkxYQnVaMTl6/L1pXVnJiRzluYnkw/ME5EUTQvTkRVdWNH/NW4"
  },
  {
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    issued: "Oct 2024",
    verificationUrl: "https://www.salesforce.com/trailblazer/isuryaprakashh",
    logo: "https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BEqgH&oid=00DF0000000gZsu&lastMod=1693557495000"
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    issued: "Apr 2024",
    verificationUrl: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S26990138930513096.pdf",
    logo: "https://imgs.search.brave.com/_tL_dSXzmOYOKxJpqDhWHPi80xcUfKU-R6LLSZeMNCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUU8zdVNs/dmFJcWhDbWRTcVFS/ZWNjanBaT3VWX2dt/TGIzR0w5aUZDaGk0/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNEb3ZMM05o/Ym1kaC9iWFZ1YVha/bGNuTnBkSGt1L1lX/TXVhVzR2ZDNBdFky/OXUvZEdWdWRDOTFj/R3h2WVdSei9Mekl3/TWpNdk1ETXZibkIw/L1pXd3VhbkJu"
  }
]

export function Certifications() {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section id="certifications" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Issued:</span>
                    <Badge variant="secondary">{cert.issued}</Badge>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Verify Certificate
                      </a>
                    </Button>
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
