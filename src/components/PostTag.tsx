import { cn } from '@/lib/utils';

type PostTagProps = {
  tag: string;
  className?: string;
};

const PostTag = ({ tag, className }: PostTagProps) => {
  return (
    <span
      className={cn('rounded-full bg-zinc-400 px-2.5 py-1 text-xs dark:bg-zinc-900', className)}
    >
      {tag}
    </span>
  );
};

export default PostTag;
