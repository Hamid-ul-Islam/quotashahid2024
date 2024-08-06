import { cn } from '@/lib/utils';

export default function Heading({ className, children, ...props }: any) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-slate-800 text-3xl font-extrabold tracking-tight lg:text-4xl',
        className,
      )}
    >
      {children}
    </h1>
  );
}
