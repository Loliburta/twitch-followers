import { useState, useContext } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { Icon } from '@iconify/react';
import { userLoginContext } from '../../utils/userLoginContext';
import { Redirect, useParams } from 'react-router-dom';

import { userId } from '../../requests/get/userId/userId';
import { ProfileNotFound } from './components/profileNotFound/ProfileNotFound';

interface ParamTypes {
  USER_LOGIN?: string;
}
export const SearchPage = () => {
  const { USER_LOGIN } = useParams<ParamTypes>();
  const [userLogin] = useContext(userLoginContext);
  const [toProfilePage, setToProfilePage] = useState(false);
  const [profileNotFoundName, setProfileNotFoundName] = useState(USER_LOGIN);
  const getUserId = async (userLogin: string) => {
    const res = await userId(userLogin);
    const id = res?.data[0]?.id;
    if (!id) {
      return false;
    }
    return res?.data[0]?.id;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = await getUserId(userLogin);
    if (!id) {
      setProfileNotFoundName(userLogin);
    } else {
      setToProfilePage(true);
    }
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
        {profileNotFoundName && (
          <ProfileNotFound profileName={profileNotFoundName} />
        )}
      </form>
    </div>
  );
};
