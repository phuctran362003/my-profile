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
    <section id={id} className="py-4">
      <Card className="section-card border border-border hover:border-primary/30 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          {icon && <span className="text-primary">{icon}</span>}
          <CardTitle className="text-xl">
            <span className="text-primary">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </section>
  );
};

export default SectionCard; 