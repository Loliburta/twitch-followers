import { SearchBar } from './components/searchBar/SearchBar';
import { Icon } from '@iconify/react';
export const SearchPage = () => {
  return (
    <div className='SearchPage'>
      <Icon icon='logos:twitch' />
      <span>Search for twitch user</span>
      <SearchBar />
    </div>
  );
};
