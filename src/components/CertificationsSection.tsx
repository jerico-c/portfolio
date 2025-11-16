
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Junior Network Administrator",
      issuer: "Badan Nasional Sertifikasi Profesi",
      date: "August 2024",
      image: "image/sertif-ada.png",
      link: "https://drive.google.com/file/d/18OgmfPq3G4NeCCa4soivkWFrgCduHR6d/view?usp=drivesdk",
    },
    {
      title: "Associate Data Analyst",
      issuer: "Badan Nasional Sertifikasi Profesi",
      date: "September 2025",
      image: "image/sertif-bnsp.png",
      link: "https://drive.google.com/file/d/18OgmfPq3G4NeCCa4soivkWFrgCduHR6d/view?usp=drivesdk",
    },
    {
      title: "Intermediate Web Developing",
      issuer: "Dicoding Academy",
      date: "2025",
      image: "image/web-inter.png",
      link: "https://www.dicoding.com/certificates/JMZVEK2LRPN9",
    },
    {
      title: "Fundamental Front-End Web Development",
      issuer: "Dicoding Academy",
      date: "2025",
      image: "image/fundamental-front-end.png",
      link: "https://www.dicoding.com/certificates/MRZMN7DNLPYQ",
    },
    {
      title: "Back-End for Beginner Using JavaScript",
      issuer: "Dicoding Academy",
      date: "2025",
      image: "image/back-end-beginner.png",
      link: "https://www.dicoding.com/certificates/07Z63NR0JZQR",
    },
    {
      title: "JavaScript Programming Basic",
      issuer: "Dicoding Academy",
      date: "2025",
      image: "image/basic-javascript.png",
      link: "https://www.dicoding.com/certificates/QLZ93N4WDZ5D",
    },
    {
      title: "Basic Cloud and Gen AI in AWS",
      issuer: "Dicoding Academy",
      date: "2025",
      image: "image/cloud-aws.png",
      link: "https://www.dicoding.com/certificates/QLZ935QQEZ5D",
    },
    {
      title: "DevOps Basic",
      issuer: "Dicoding Academy",
      date: "2024",
      image: "image/devops.png",
      link: "https://www.dicoding.com/certificates/L4PQEQROOPO1",
    },
    {
      title: "Basic Git with Github",
      issuer: "Dicoding Academy",
      date: "2025",
      image: "image/git.png",
      link: "https://www.dicoding.com/certificates/L4PQEQROOPO1",
    },
    {
      title: "Junior Computer Network",
      issuer: "Dicoding Academy",
      date: "2024",
      image: "image/computer-net.png",
      link: "https://www.dicoding.com/certificates/07Z6420WJPQR",
    },
    {
      title: "Network Technician Career Path",
      issuer: "Cisco Networking Academy",
      date: "2025",
      image: "image/network-tech.png",
      link: "https://www.credly.com/badges/3dc8330e-b722-42a2-9cd9-7592f41bc3f7",
    },
    {
      title: "Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2023",
      image: "image/cybersec.png",
      link: "https://www.credly.com/badges/4352c309-cce3-4717-afdd-d390d74d66a7",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Certifications & Training</h2>
        </motion.div>

        <div className="mx-auto max-w-5xl px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certifications.map((cert) => (
                <CarouselItem 
                  key={cert.title} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/5 hover:-translate-y-1 flex flex-col">
                      <CardHeader className="relative h-52 p-0">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain bg-card p-4"
                        />
                        <div className="absolute top-3 left-3 bg-primary/10 backdrop-blur-sm text-primary p-2 rounded-full">
                          <FaCertificate />
                        </div>
                      </CardHeader>
                      <CardContent className="p-5 flex-grow flex flex-col">
                        <CardTitle className="text-lg font-medium mb-1 flex-grow">
                          {cert.title}
                        </CardTitle>
                        <div className="text-muted-foreground font-medium text-sm mb-2">
                          {cert.issuer}
                        </div>
                        <div className="text-muted-foreground/80 text-sm mb-4">
                          {cert.date}
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                        >
                          <span>View Certificate</span>
                          <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
