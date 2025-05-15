
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, id, className }: SectionTitleProps) => {
  return (
    <div id={id} className={cn("mb-12", className)}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
