'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { getPostsByTitle } from '@/lib/gql/post';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { SearchIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from '../ui/Image';
import { Input } from '../ui/input';
import Link from '../ui/Link';
import { categories } from '@/config/site-links';
import { Skeleton } from '../ui/skeleton';

const Search = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const debouncedInput = useDebounce(searchQuery, 400);

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['search'],
    queryFn: () => getPostsByTitle(debouncedInput),
    enabled: false,
    retry: 3,
  });

  useEffect(() => {
    if (debouncedInput.length <= 2) return;
    refetch();
  }, [debouncedInput, refetch]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <MagnifyingGlassIcon
          onClick={() => setIsOpen(!isOpen)}
          className='hidden h-5 w-5 cursor-pointer xs:h-6 xs:w-6 sm:block sm:h-5 sm:w-5'
        />
      </DialogTrigger>
      <DialogContent
        closeButton='hidden'
        className='left-1/2 min-h-[25rem] w-full -translate-x-1/2 p-0'
      >
        <DialogHeader className='m-0 p-0'>
          <div className='relative flex items-center'>
            <SearchIcon className='absolute left-3 top-1/2 mr-2 h-4 w-4 shrink-0 -translate-y-1/2 opacity-50' />
            <Input
              id='Search'
              name='Search'
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              placeholder='Type something to search...'
              className='h-12 rounded-none rounded-t-[0.5rem] pl-10 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>

          <DialogDescription className='w-full px-3 py-2'>
            {debouncedInput.length < 2 &&
              categories.map((category) => (
                <Link
                  className='mb-2 flex cursor-pointer flex-col gap-2 rounded-md p-2 px-2.5 transition-colors hover:bg-slate-900'
                  key={category.path}
                  href={`/categories${category.path}`}
                >
                  <h1 className='my-0 text-lg font-semibold text-black dark:text-zinc-200'>
                    {category.name}
                  </h1>
                  <p>{category.description}</p>
                </Link>
              ))}

            {data && data?.length !== 0 && debouncedInput.length !== 0 && (
              <>
                {data?.map((post) => (
                  <Link
                    href={`/categories/${post.category}/${post.slug}`}
                    className='flex cursor-pointer gap-4 rounded-md p-2 px-2.5 transition-colors hover:bg-slate-900'
                    key={post.id}
                  >
                    <Image
                      mode='external'
                      src={post.coverImg.url}
                      alt={post.title}
                      height={45}
                      width={45}
                      className='rounded-sm'
                    />
                    <h1 className='text-base'>{post.title}</h1>
                  </Link>
                ))}
              </>
            )}

            <div className='space-y-4'>
              {(isLoading || isFetching) &&
                Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} className='h-14 w-full dark:bg-slate-800' />
                  ))}
            </div>

            {data?.length === 0 && debouncedInput.length > 1 && (
              <p className='w-full py-4 text-center'>No results found.</p>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
