import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userFollows } from '../../requests/get/userFollows/userFollows';
import { userFollowsType } from '../../requests/get/userFollows/userFollows.type';
import { userId } from '../../requests/get/userId/userId';
import { FollowedList } from './components/followedList/FollowedList';
import { Redirect } from 'react-router-dom';

interface ParamTypes {
  USER_LOGIN: string;
}
export const ProfilePage = () => {
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
  useEffect(() => {
    const fetchUserObject = async () => {
      const userId = await getUserId(USER_LOGIN);
      //if userId was not found that means user used link /twitch-followers/nick in browser instead of form
      //and the twitch user doesn't exist so we redirect him to search page
      if (!userId) {
        setToSearchPage(true);
      } else {
        setUserObject(await getUserData(userId));
      }
    };
    fetchUserObject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (toSearchPage) {
    return <Redirect to={`${process.env.PUBLIC_URL}/error/${USER_LOGIN}`} />;
  }
  return (
    <div className='profilePage'>
      {userObject && userObject.data && (
        <FollowedList follows={userObject.data} />
      )}
    </div>
  );
};
