'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SectionCardProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const SectionCard = ({ id, title, icon, children }: SectionCardProps) => {
  return (
    <section id={id} className="scroll-mt-16">
      <Card className="section-card border-none bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center gap-2 pb-4">
          {icon && <span className="text-yellow-400">{icon}</span>}
          <CardTitle className="text-2xl font-semibold tracking-tight">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {children}
        </CardContent>
      </Card>
    </section>
  );
};

export default SectionCard; 