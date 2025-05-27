
import React from "react"
import { Github, icons, Linkedin, LucideTwitter, X, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/isuryaprakashh",
      icon: Github
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/isuryaprakashh/",
      icon: Linkedin
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/klu2300030929/",
      icon: () => (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.854 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.26-1.638-7.322.637l-2.222 2.45L9.243 2.028c.8-.85 2.074-.924 2.997-.111.372.325.869.78 1.5 1.32.363.309.853.513 1.343.513.490 0 .98-.204 1.343-.513l1.999-1.714a1.378 1.378 0 0 0 .154-1.943A1.378 1.378 0 0 0 16.655.004c-1.498 0-2.944.269-4.314.858-.415.18-.818.394-1.207.621-.389-.227-.792-.441-1.207-.621A7.633 7.633 0 0 0 13.483 0z"/>
        </svg>
      )
    },
    {
      name: "X",
      href: "URL_ADDRESS.com/isuryaprakashh",   
      icon: LucideTwitter             
    }   
  ]

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} aria-label={link.name}>
                  <link.icon />
                </a>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Surya Prakash Inukurthi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
