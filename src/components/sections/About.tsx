import { TerminalCommand } from '@/components/ui/terminal-command';

export function About() {
  return (
    <div className="space-y-6">
      <TerminalCommand 
        command="whoami"
        output="Tran Gia Phuc"
      />
      
      <TerminalCommand 
        command="cat about.txt"
        output={`I am a passionate software engineer with expertise in full-stack development.
Currently working on web applications and cloud solutions.
Always eager to learn new technologies and solve complex problems.`}
      />
      
      <TerminalCommand 
        command="pwd"
        output="/home/phuctg/portfolio"
      />
      
      <TerminalCommand 
        command="date"
        output={new Date().toLocaleString()}
      />
    </div>
  );
} 