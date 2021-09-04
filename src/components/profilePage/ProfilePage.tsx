import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userFollows } from '../../requests/get/userFollows';
import { userId } from '../../requests/get/userId';
import { UserObjectType } from './types/UserObject.type';

interface ParamTypes {
  USER_LOGIN: string;
}
export const ProfilePage = () => {
  const { USER_LOGIN } = useParams<ParamTypes>();
  const [userObject, setUserObject] = useState<UserObjectType>();
  const getUserId = async (userLogin: string) => {
    const res = await userId(userLogin);
    return res.data[0].id;
  };
  const getFollowers = async (userId: string) => {
    const followers = await userFollows(userId);
    console.log(followers);
    return followers;
  };
  useEffect(() => {
    const fetchUserObject = async () => {
      setUserObject(await getFollowers(await getUserId(USER_LOGIN)));
    };
    fetchUserObject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [USER_LOGIN]);

  return <div>{}</div>;
};
