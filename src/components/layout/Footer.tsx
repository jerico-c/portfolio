import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jerico Christianto</h3>
            <p className="text-muted-foreground">
              Front-End & Back-End Developer | Certified Junior Network Administrator
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MailIcon className="w-4 h-4 mr-2" />
                <a href="mailto:jericochristianto@gmail.com" className="hover:text-foreground transition-colors">
                  jericochristianto@gmail.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <PhoneIcon className="w-4 h-4 mr-2" />
                <a href="tel:+6289684443383" className="hover:text-foreground transition-colors">
                  +62 896-8444-3383
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
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
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          &copy; {currentYear} Jerico Christianto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
