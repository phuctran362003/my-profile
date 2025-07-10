'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  FileText,
  Mail,
  Phone,
  Github,
  Download,
  Terminal,
  ChevronRight
} from 'lucide-react';
import SectionCard from '@/components/SectionCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [typedText, setTypedText] = useState('');
  const fullText = '.NET Developer | DevOps Engineer';
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
  };
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-4 py-16">
        <div className="avatar-glow mb-2">
          <Avatar className="w-28 h-28 border-2 border-primary">
            <AvatarImage src="https://placehold.co/160x160/png" alt="Tran Gia Phuc" />
            <AvatarFallback className="bg-accent text-primary text-lg">TGP</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Tran Gia Phuc</h1>
          <p className="text-muted-foreground mt-1 flex items-center justify-center">
            <span>{typedText}</span>
            <span className="terminal-cursor"></span>
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4">
          <Button asChild size="sm" className="gap-2 button-glow">
            <a href="/CV_TRANGIAPHUC.pdf" download>
              <Download className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
      </div>
      
      {/* About Section */}
      <SectionCard id="about" title="About Me" icon={<FileText className="h-5 w-5" />}>
        <div className="code-block">
          <p className="leading-relaxed">
            <strong className="text-primary">Short-term goal:</strong> Become a .NET Developer and DevOps Engineer with solid backend skills and CI/CD expertise.<br />
            <strong className="text-primary">Long-term goal:</strong> Become a Solution Architect designing large-scale secure systems with .NET & DevOps.
          </p>
        </div>
      </SectionCard>
      
      {/* Skills Section */}
      <SectionCard id="skills" title="Technical Skills" icon={<Terminal className="h-5 w-5" />}>
        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="programming" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Code className="h-3.5 w-3.5" /> C# (Intermediate)
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Code className="h-3.5 w-3.5" /> Java (Intermediate)
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Globe className="h-3.5 w-3.5" /> ReactJS (Beginner)
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Server className="h-3.5 w-3.5" /> ASP.NET Core
              </Badge>
            </div>
          </TabsContent>
          
          <TabsContent value="technologies" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Database className="h-3.5 w-3.5" /> PostgreSQL
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Database className="h-3.5 w-3.5" /> SQL Server
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Database className="h-3.5 w-3.5" /> Redis
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Cpu className="h-3.5 w-3.5" /> Docker
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Globe className="h-3.5 w-3.5" /> Azure
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Code className="h-3.5 w-3.5" /> Git
              </Badge>
              <Badge variant="outline" className="justify-start gap-1 badge-hover">
                <Globe className="h-3.5 w-3.5" /> GraphQL
              </Badge>
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="space-y-4">
            <p className="text-sm text-muted-foreground code-block">
              English (Upper-intermediate to Advanced), Leadership, Problem-Solving, Communication, Planning
            </p>
          </TabsContent>
        </Tabs>
      </SectionCard>
      
      {/* Education Section */}
      <SectionCard id="education" title="Education" icon={<GraduationCap className="h-5 w-5" />}>
        <div className="space-y-4">
          <div className="p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
            <h3 className="text-base font-semibold flex items-center">
              <ChevronRight className="h-4 w-4 mr-2 text-primary" />
              FPT University, Ho Chi Minh
            </h3>
            <p className="text-muted-foreground text-sm ml-6">Bachelor of Software Engineering (expected Aug 2025)</p>
            <p className="text-sm mt-1 ml-6">GPA: 7.0 (Oct 2021 - Present)</p>
          </div>
        </div>
      </SectionCard>
      
      {/* Experience Section */}
      <SectionCard id="experience" title="Work Experience" icon={<Briefcase className="h-5 w-5" />}>
        <div className="space-y-4">
          <div className="p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
            <h3 className="text-base font-semibold flex items-center">
              <ChevronRight className="h-4 w-4 mr-2 text-primary" />
              FPT Software Ho Chi Minh
            </h3>
            <p className="text-muted-foreground text-sm ml-6">On the job training .NET DEVELOPER (May 2024 - Aug 2024)</p>
          </div>
        </div>
      </SectionCard>
      
      {/* Projects Section */}
      <SectionCard id="projects" title="Projects" icon={<Server className="h-5 w-5" />}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[280px] pr-4">
            <div className="space-y-4">
              <div className="p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-primary">BlindTreasure</h3>
                  <Badge variant="outline" className="text-primary">04/2025 - Present</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  E-commerce & Mystery Box Platform (.NET, NextJS, Docker, Stripe, PostgreSQL)
                </p>
                <Badge className="mt-2 badge-hover" variant="secondary">Team Leader</Badge>
              </div>
              
              <div className="p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-primary">ArWoh</h3>
                  <Badge variant="outline" className="text-primary">01/2025 - 04/2025</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Artwork High Quality Store (.NET, ReactJS, Docker, VNPay, MSSQL)
                </p>
                <Badge className="mt-2 badge-hover" variant="secondary">Team Leader</Badge>
              </div>
              
              <div className="p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-primary">VaccinaCare</h3>
                  <Badge variant="outline" className="text-primary">01/2025 - 04/2025</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Medical Vaccination Center (.NET, ReactJS, Docker, GraphQL, MSSQL)
                </p>
                <Badge className="mt-2 badge-hover" variant="secondary">Team Leader</Badge>
              </div>
              
              <div className="p-3 border border-border rounded-md hover:border-primary/50 transition-colors">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-primary">Cursus</h3>
                  <Badge variant="outline" className="text-primary">05/2024 - 08/2024</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Online Course Platform (.NET, Azure, Redis, Entity Framework, MSSQL)
                </p>
                <Badge className="mt-2 badge-hover" variant="secondary">Team Leader</Badge>
              </div>
            </div>
          </ScrollArea>
        </Tabs>
      </SectionCard>
      
      {/* Contact Section */}
      <SectionCard id="contact" title="Contact" icon={<Mail className="h-5 w-5" />}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/30 transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:trangiaphuc362003181@gmail.com" className="text-sm hover:text-primary transition-colors">
                trangiaphuc362003181@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/30 transition-colors">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+84393734206" className="text-sm hover:text-primary transition-colors">
                +84-393734206
              </a>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/30 transition-colors">
              <Github className="h-4 w-4 text-primary" />
              <a href="https://github.com/phuctran362003" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                phuctran362003
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <Input id="name" name="name" required className="focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <Input id="email" name="email" type="email" required className="focus:border-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm">Message</label>
              <Textarea id="message" name="message" rows={4} required className="focus:border-primary" />
            </div>
            <Button type="submit" className="w-full button-glow">Send Message</Button>
          </form>
        </div>
      </SectionCard>
    </div>
  );
}
