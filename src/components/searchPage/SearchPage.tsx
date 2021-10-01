import { useState, useEffect, useContext } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { Icon } from '@iconify/react';
import { userLoginContext } from '../../utils/userLoginContext';
import { Redirect, useParams } from 'react-router-dom';
import { userId } from '../../requests/get/userId/userId';

interface ParamTypes {
  USER_LOGIN?: string;
}
export const SearchPage = () => {
  const { USER_LOGIN } = useParams<ParamTypes>();
  const [userLogin] = useContext(userLoginContext);
  const [toProfilePage, setToProfilePage] = useState(false);
  const [searchMessage, setSearchMessage] = useState('');
  const getUserId = async (userLogin: string) => {
    const res = await userId(userLogin);
    return res?.data[0]?.id;
  };

  useEffect(() => {
    // if USER_LOGIN exist, then we are on /error/nick website and there was error finding the user
    if (USER_LOGIN) {
      setSearchMessage(`${USER_LOGIN} was not found`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchMessage(`searching for ${userLogin}`);
    const userId = await getUserId(userLogin);
    //if userId was not found the message that user was not found pops out, if found redirect to profile page
    if (!userId) {
      setSearchMessage(`${userLogin} was not found`);
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
        <div className='searchField__text'>Search for a twitch user</div>
        <SearchBar />
        {searchMessage}
      </form>
    </div>
  );
};
