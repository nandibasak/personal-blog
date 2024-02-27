import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-purple_color/30 animate-pulse rounded-md', className)} {...props} />
  );
}

export { Skeleton };
