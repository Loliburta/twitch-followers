import { useEffect } from 'react';
import { follow } from '../../../../requests/get/userFollows/userFollows.type';
import { FollowedListEntry } from './followedListEntry/FollowedListEntry';
import { userPictures } from '../../../../requests/get/userPictures/userPictures';

interface Props {
  follows: follow[];
}

export const FollowedList: React.FC<Props> = ({ follows }) => {
  const followsLogins = follows
    .map((follow) => `&login=${follow.to_login}`)
    .join('')
    .slice(1);
  console.log(followsLogins);

  const getUsersPictures = async (followsLogins: string) => {
    const res = await userPictures(followsLogins);
    console.log(res);
    return;
  };
  useEffect(() => {
    getUsersPictures(followsLogins);
  }, [followsLogins]);
  return (
    <div>
      {follows.map((follow: follow) => (
        <FollowedListEntry {...follow} />
      ))}
    </div>
  );
};
