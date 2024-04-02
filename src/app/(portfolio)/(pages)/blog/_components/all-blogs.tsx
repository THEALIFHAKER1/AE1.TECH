import { SearchBar } from '@/components/custom/search-bar';

export default function AllBlogs() {
  return (
    <div className='space-y-4'>
      <SearchBar placeholder={'Search for a blog'} />
      <div>AllBlogs</div>
    </div>
  );
}
