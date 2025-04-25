import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, DownloadIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">jerico.dev</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            ABOUT
          </Link>
          <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            EXPERIENCE
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            PROJECTS
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            CONTACT
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/jerico-christianto" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <Link href="https://drive.google.com/file/d/1F490pPuYBuSy0Rm9B_vO2GTmQcX3KuTF/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button className="flex items-center space-x-2">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="w-5 h-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 py-4">
                  <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                    ABOUT
                  </Link>
                  <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
                    EXPERIENCE
                  </Link>
                  <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
                    PROJECTS
                  </Link>
                  <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                    CONTACT
                  </Link>
                  <div className="flex items-center space-x-3 pt-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" aria-label="GitHub">
                        <GithubIcon className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/jerico-christianto" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" aria-label="LinkedIn">
                        <LinkedinIcon className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1F490pPuYBuSy0Rm9B_vO2GTmQcX3KuTF/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                      <Button className="flex items-center space-x-2">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Resume
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
