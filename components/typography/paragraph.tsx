import { cn } from '@/lib/utils';

export default function Paragraph({ className, children, ...props }: any) {
  return (
    <p
      className={cn('leading-7 text-lg [&:not(:first-child)]:mt-6', className)}
    >
      {children}
    </p>
  );
}
