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
  const [followsWithPictures, setFollowsWithPictures] =
    useState<followWithPictures[]>();
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
  useEffect(() => {
    const getFollowsWithPictures = async () => {
      const followLogins = getFollowsLogins(follows);
      const usersPictures = await getUsersPictures(followLogins);
      if (usersPictures) {
        setFollowsWithPictures(
          follows.map((follow: followType, i: number) => {
            return { ...follow, ...usersPictures.data[i] };
          })
        );
      }
    };
    getFollowsWithPictures();
  }, [follows]);
  return (
    <div>
      {followsWithPictures &&
        followsWithPictures.map((followWithPicture: followWithPictures) => (
          <FollowedListEntry {...followWithPicture} />
        ))}
    </div>
  );
};
