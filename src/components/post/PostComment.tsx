'use client';

import { CreateComment, commentValidation } from '@/validations/comments';
import { env } from '@/validations/env';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';

import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Comment } from '@/types/post.types';

type PostCommentProps = {
  postId: string;
};

const PostComment = ({ postId }: PostCommentProps) => {
  const queryClient = useQueryClient();
  const [input, setInput] = useState<{ username: string; comment: string }>({
    username: '',
    comment: '',
  });

  const { mutate: postComment, isPending } = useMutation({
    mutationKey: ['post-comment'],
    mutationFn: async () => {
      const commentParsed = commentValidation.parse({
        ...input,
        postId,
      });

      const commentPayload = {
        blogID: commentParsed.postId,
        userName: commentParsed.username,
        commentText: commentParsed.comment,
      };

      const postUrl = `${env.NEXT_PUBLIC_COMMENT_URL}/api/${env.NEXT_PUBLIC_COMMENT_SERECT_KEY}/comment/create`;
      const { data } = await axios.post<Comment>(postUrl, commentPayload);

      return data;
    },
    onSuccess: () => {
      toast.success(`Comment has been published.`);
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ['comments', postId],
      });

      setInput({
        comment: '',
        username: '',
      });
    },
    onError: (err) => {
      console.error(err);

      if (err instanceof z.ZodError) {
        return toast.error(err.message);
      }
      if (err instanceof AxiosError) {
        return toast.error(err.response?.data);
      }

      toast.error('Something went wrong. Please try again later');
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postComment();
      }}
      className='space-y-4'
    >
      <div className='space-y-2'>
        <Label>Comment</Label>
        <Textarea
          className='min-h-[10rem]'
          name='comment'
          placeholder='Write your comment here...'
          value={input.comment}
          onChange={onChange}
        />
      </div>
      <div className='space-y-2'>
        <Label>Name</Label>
        <Input name='username' placeholder='name' value={input.username} onChange={onChange} />
      </div>
      <Button type='submit' disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

export default PostComment;
