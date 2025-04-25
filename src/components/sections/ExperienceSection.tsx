"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading text-center mb-4">My career & experience</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A timeline of my professional journey and educational background
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Left Column - Role */}
          <div className="md:text-right">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="pb-2">
                <CardTitle>Teaching Staff</CardTitle>
                <CardDescription>CROG International Magelang</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Teaching programming and robotics concepts to children aged 5-13.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Timeline */}
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
            <div className="flex-1 w-px bg-border"></div>
          </div>

          {/* Right Column - Date */}
          <div className="flex items-start">
            <div className="pt-4">
              <span className="text-xl font-bold">AUG 2024</span>
              <p className="text-sm text-muted-foreground">Present</p>
            </div>
          </div>

          {/* Left Column - Date */}
          <div className="md:text-right md:flex md:items-start md:justify-end">
            <div className="pt-4">
              <span className="text-xl font-bold">JAN 2025</span>
              <p className="text-sm text-muted-foreground">Present</p>
            </div>
          </div>

          {/* Middle Column - Timeline */}
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
            <div className="flex-1 w-px bg-border"></div>
          </div>

          {/* Right Column - Role */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="pb-2">
                <CardTitle>Teaching Assistant</CardTitle>
                <CardDescription>Programming Practicum</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Guiding students in experiments, reviewing reports, and providing feedback.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Left Column - Role */}
          <div className="md:text-right">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="pb-2">
                <CardTitle>Teaching Assistant</CardTitle>
                <CardDescription>Computer Networks Practicum</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Assisting students with Cisco Packet Tracer, router configuration, and fiber optics.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Timeline */}
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
            <div className="flex-1 w-px bg-border"></div>
          </div>

          {/* Right Column - Date */}
          <div className="flex items-start">
            <div className="pt-4">
              <span className="text-xl font-bold">AUG 2024</span>
              <p className="text-sm text-muted-foreground">DEC 2024</p>
            </div>
          </div>

          {/* Left Column - Date */}
          <div className="md:text-right md:flex md:items-start md:justify-end">
            <div className="pt-4">
              <span className="text-xl font-bold">MAR 2023</span>
              <p className="text-sm text-muted-foreground">FEB 2024</p>
            </div>
          </div>

          {/* Middle Column - Timeline */}
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
            <div className="flex-1 w-px bg-border"></div>
          </div>

          {/* Right Column - Role */}
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="pb-2">
                <CardTitle>Public Relations Staff</CardTitle>
                <CardDescription>UKMK Universitas Tidar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Represented the organization at regional events.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Left Column - Role */}
          <div className="md:text-right">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader className="pb-2">
                <CardTitle>Lead Organizer</CardTitle>
                <CardDescription>JKS Foreg Tengah 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Led a team of 48 students for a regional university forum.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Timeline */}
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
            <div className="h-6 w-px bg-border"></div>
          </div>

          {/* Right Column - Date */}
          <div className="flex items-start">
            <div className="pt-4">
              <span className="text-xl font-bold">2023</span>
              <p className="text-sm text-muted-foreground">Event</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Separator className="mb-16" />

          <h3 className="text-2xl font-bold text-center mb-12">Education Timeline</h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Left Column - Empty */}
            <div className="md:text-right"></div>

            {/* Middle Column - Timeline Start */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
              <div className="flex-1 w-px bg-border"></div>
            </div>

            {/* Right Column - Present */}
            <div className="flex items-start">
              <div className="pt-4">
                <span className="text-xl font-bold">NOW</span>
              </div>
            </div>

            {/* Left Column - Coding Camp */}
            <div className="md:text-right">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Coding Camp by DBS Foundation</CardTitle>
                  <CardDescription>Feb 2025 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Front-End and Back-End Development (HTML, CSS, JavaScript, API)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Middle Column - Timeline */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
              <div className="flex-1 w-px bg-border"></div>
            </div>

            {/* Right Column - Date */}
            <div className="flex items-start">
              <div className="pt-4">
                <span className="text-xl font-bold">FEB 2025</span>
              </div>
            </div>

            {/* Left Column - Empty */}
            <div className="md:text-right"></div>

            {/* Middle Column - Timeline */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
              <div className="flex-1 w-px bg-border"></div>
            </div>

            {/* Right Column - University */}
            <div>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Universitas Tidar</CardTitle>
                  <CardDescription>Aug 2022 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">
                    <span className="font-medium">S1 in Electrical Engineering</span>, GPA: 3.47/4.00
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Concentration: Computer Systems and Information
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Relevant Courses: Algorithms and Programming, Data Communication, Computer Networks, Advanced Computer Networks
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Left Column - Empty */}
            <div className="md:text-right"></div>

            {/* Middle Column - Timeline End */}
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple to-primary"></div>
              <div className="h-6 w-px bg-transparent"></div>
            </div>

            {/* Right Column - Start Date */}
            <div className="flex items-start">
              <div className="pt-4">
                <span className="text-xl font-bold">AUG 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
