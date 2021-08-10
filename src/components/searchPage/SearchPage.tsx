import { SearchBar } from './components/searchBar/SearchBar';
import { Icon } from '@iconify/react';
import { userFollows } from '../../requests/get/userFollows';
import { userId } from '../../requests/get/userId';

export const SearchPage = () => {
  const getFollowers = async (userId: string) => {
    const followers = await userFollows(userId);
    console.log(followers);
  };
  const getUserId = async (userLogin: string) => {
    const res = await userId(userLogin);
    console.log(res.data[0].id);
    getFollowers(res.data[0].id);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getUserId('userNick');
  };
  return (
    <div className='SearchPage'>
      <form onSubmit={onSubmit}>
        <Icon icon='logos:twitch' />
        <span>Search for twitch user</span>
        <SearchBar />
      </form>
    </div>
  );
};
