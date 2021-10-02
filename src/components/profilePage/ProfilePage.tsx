import { useState, useEffect, useContext } from 'react';
import { userLoginContext } from '../../utils/userLoginContext';
import { useParams } from 'react-router-dom';
import { userFollows } from '../../requests/get/userFollows/userFollows';
import { userFollowsType } from '../../requests/get/userFollows/userFollows.type';
import { userId } from '../../requests/get/userId/userId';
import { FollowedList } from './components/followedList/FollowedList';
import { Redirect } from 'react-router-dom';
import { SearchBar } from '../searchPage/components/searchBar/SearchBar';

interface ParamTypes {
  USER_LOGIN: string;
}
export const ProfilePage = () => {
  const [userLogin] = useContext(userLoginContext);
  const [searchMessage, setSearchMessage] = useState('');
  const { USER_LOGIN } = useParams<ParamTypes>();
  const [userObject, setUserObject] = useState<userFollowsType>();
  const [toSearchPage, setToSearchPage] = useState(false);
  const getUserId = async (userLogin: string) => {
    const res = await userId(userLogin);
    return res?.data[0]?.id;
  };
  const getUserData = async (userId: string) => {
    const userData = await userFollows(userId);
    return userData;
  };

  // After every submit of the form
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchMessage(`searching for ${userLogin}`);
    const userId = await getUserId(userLogin);
    //if userId was not found the message that user was not found pops out, if found redirect to profile page
    if (!userId) {
      setSearchMessage(`${userLogin} was not found`);
    } else {
      setUserObject(await getUserData(userId));
      setSearchMessage(`${userLogin} follows`);
    }
  };

  // Only on first redirect
  useEffect(() => {
    const fetchUserObject = async () => {
      const userId = await getUserId(USER_LOGIN);
      //if userId was not found that means user used link /twitch-followers/nick in browser instead of form
      //and the twitch user doesn't exist so we redirect him to search page
      if (!userId) {
        setToSearchPage(true);
      } else {
        setSearchMessage(`${USER_LOGIN} follows`);
        setUserObject(await getUserData(userId));
      }
    };
    fetchUserObject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (toSearchPage) {
    return <Redirect to={`${process.env.PUBLIC_URL}/error/${userLogin}`} />;
  }
  return (
    <div className='profilePage'>
      {userObject && userObject.data && (
        <>
          <form onSubmit={onSubmit} className='searchField'>
            <div className='searchBarWrapper'>
              <p className='searchBarWrapper__text'>Search for another user</p>
              <SearchBar />
              <p className='searchBarWrapper__searchMessage'>{searchMessage}</p>
            </div>
          </form>
          <FollowedList follows={userObject.data} />
        </>
      )}
    </div>
  );
};
