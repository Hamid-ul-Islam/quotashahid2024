import { cn } from '@/lib/utils';

export default function Quote({ className, children, ...props }: any) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  );
}
