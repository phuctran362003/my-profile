'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SectionCardProps {
  id: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export default function SectionCard({ id, title, children, icon }: SectionCardProps) {
  return (
    <section id={id} className="scroll-mt-24 mb-10">
      <Card className="border-border bg-card shadow-sm hover:shadow transition-shadow duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold text-primary">
            {icon && <span className="text-primary">{icon}</span>}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </section>
  );
} 