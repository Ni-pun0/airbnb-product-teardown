
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
  accentColor?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  id,
  className,
  accentColor = "airbnb"
}: SectionTitleProps) => {
  return <div id={id} className={cn("mb-12 relative", className)}>
      <div className={`absolute left-0 top-0 h-16 w-2 bg-${accentColor} rounded-full -translate-x-6 hidden lg:block`}></div>
      <h2 className={`section-title text-3xl md:text-4xl font-bold mb-3 text-${accentColor}-black relative inline-block`}>
        {title}
        <div className={`absolute -bottom-1 left-0 h-1 w-3/4 bg-${accentColor} opacity-30`}></div>
      </h2>
      {subtitle && <p className="section-subtitle text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>;
};

export default SectionTitle;
