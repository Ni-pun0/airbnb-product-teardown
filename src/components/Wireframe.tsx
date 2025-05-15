
import React from 'react';
import { cn } from '@/lib/utils';

interface WireframeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Wireframe = ({ title, children, className, ...props }: WireframeProps) => {
  return (
    <div className={cn("wireframe", className)} {...props}>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      {children}
    </div>
  );
};

export default Wireframe;
