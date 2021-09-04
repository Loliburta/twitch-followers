import { useState, useContext } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { Icon } from '@iconify/react';
import { userLoginContext } from '../../utils/userLoginContext';
import { Redirect } from 'react-router-dom';

export const SearchPage = () => {
  const [userLogin] = useContext(userLoginContext);
  const [toProfilePage, setToProfilePage] = useState(false);

  const onSubmit = () => {
    setToProfilePage(true);
  };
  if (toProfilePage) {
    return <Redirect to={`${process.env.PUBLIC_URL}/${userLogin}`} />;
  }
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
