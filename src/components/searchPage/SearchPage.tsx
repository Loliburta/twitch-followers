import { useContext } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { Icon } from '@iconify/react';
import { userFollows } from '../../requests/get/userFollows';
import { userId } from '../../requests/get/userId';
import { userLoginContext } from '../../utils/userLoginContext';

export const SearchPage = () => {
  const [userLogin] = useContext(userLoginContext);
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
    console.log();
    getUserId(userLogin);
  };
  return (
    <div className='SearchPage'>
      <form onSubmit={onSubmit} className='searchField'>
        <Icon icon='logos:twitch' className='searchField__icon' />
        <div className='searchField__text'>
          <p>Search for twitch user</p>
        </div>
        <SearchBar />
      </form>
    </div>
  );
};
