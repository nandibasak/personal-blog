import { InstagramLogoIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Search = () => {
  return (
    <div className='hidden md:block'>
      <MagnifyingGlassIcon className='h-5 w-5 cursor-pointer xs:h-6 xs:w-6 sm:h-5 sm:w-5' />
    </div>
  );
};

export default Search;
