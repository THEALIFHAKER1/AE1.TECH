'use client';
import { Button } from '@/components/ui/button';
import { useState, useTransition } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({ placeholder }: SearchBarProps) {
  const SearchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState<string | undefined>(
    SearchParams.get('Search')?.toString()
  );

  const form = useForm();

  function handleSearch() {
    startTransition(() => {
      const params = new URLSearchParams(SearchParams);
      if (searchTerm) {
        params.set('Search', searchTerm);
      } else {
        params.delete('Search');
      }
      replace(`${pathname}?${params.toString()}`);
    });
  }

  function clearSearch() {
    setSearchTerm('');
    startTransition(() => {
      const params = new URLSearchParams(SearchParams);
      params.delete('Search');
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className='flex w-full items-center  justify-center gap-2 rounded-lg border border-input bg-foreground/20 p-3 align-middle saturate-150 filter backdrop-blur-md'
      >
        <FormField
          control={form.control}
          name='Search'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  aria-label={placeholder}
                  value={searchTerm || ''}
                  className=' w-full rounded-lg border border-input bg-background p-4 px-2 text-sm'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={placeholder}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant='outline'
          type='submit'
          className='h-full border border-input'
        >
          Search
        </Button>
        {searchTerm && (
          <Button
            variant='destructive'
            onClick={() => {
              clearSearch();
            }}
            className='h-full'
          >
            Clear
          </Button>
        )}
      </form>
    </Form>
  );
}
