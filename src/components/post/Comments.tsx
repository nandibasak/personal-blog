'use client';

import { Comment } from '@/types/post.types';
import { env } from '@/validations/env';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { format } from 'date-fns';
import { Separator } from '../ui/separator';

type CommentsProps = {
  postId: string;
};

const Comments = ({ postId }: CommentsProps) => {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const url = `${env.NEXT_PUBLIC_COMMENT_URL}/api/${env.NEXT_PUBLIC_COMMENT_SERECT_KEY}/comment/${postId}`;
      const { data } = await axios.get<Comment[]>(url);
      return data;
    },
    retry: 2,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (error instanceof AxiosError) {
    console.error(error.response?.data);
    return error.response?.status === 404 && <p className='w-full text-start'>No comments!</p>;
  }

  return (
    <div className='w-full'>
      <h2 className='text-2xl font-bold underline'>Comments</h2>
      {isLoading ? (
        'loading...'
      ) : (
        <div className='mt-4'>
          {comments?.map((comment) => (
            <div key={comment._id}>
              <span className='text-sm font-medium capitalize'>user: {comment.userName}</span>
              <p className='mt-1 text-xs'>
                Date:{' '}
                {format(new Date(comment.createdAt || new Date()), "MMMM dd, yyyy 'at' HH:mm")}
              </p>
              <p className='prose mt-3 text-base dark:prose-invert'>{comment.commentText}</p>
              <Separator className='my-3 w-full' />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
