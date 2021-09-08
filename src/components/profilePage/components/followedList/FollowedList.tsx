import { useState, useEffect } from 'react';
import { follow as followType } from '../../../../requests/get/userFollows/userFollows.type';
import { FollowedListEntry } from './followedListEntry/FollowedListEntry';
import { userPictures } from '../../../../requests/get/userPictures/userPictures';
import { userInfo as userInfoType } from '../../../../requests/get/userPictures/userPictures.type';

interface Props {
  follows: followType[];
}
type followWithPictures = followType & userInfoType;

export const FollowedList: React.FC<Props> = ({ follows }) => {
  const [followsWithPictures, setFollowsWithPictures] = useState<any>();
  const getFollowsLogins = (follows: followType[]) => {
    return follows
      .map((follow) => `&login=${follow.to_login}`)
      .join('')
      .slice(1);
  };
  const getUsersPictures = async (followsLogins: string) => {
    const res = await userPictures(followsLogins);
    console.log(res);
    return res;
  };
  const mergeByLogin = (
    follows: followType[],
    usersPictures: userInfoType[]
  ) => {
    const merged = follows.map((user) => ({
      ...usersPictures.find((usr) => {
        return usr.login === user.to_login && usr;
      }),
      ...user,
    }));
    return merged;
  };
  useEffect(() => {
    const getFollowsWithPictures = async () => {
      const followLogins = getFollowsLogins(follows);
      const usersPictures = await getUsersPictures(followLogins);
      if (usersPictures) {
        setFollowsWithPictures(mergeByLogin(follows, usersPictures.data));
      }
    };
    getFollowsWithPictures();
  }, [follows]);
  return (
    <div className='followedList'>
      {followsWithPictures &&
        followsWithPictures.map((followWithPicture: followWithPictures) => (
          <FollowedListEntry {...followWithPicture} />
        ))}
    </div>
  );
};
