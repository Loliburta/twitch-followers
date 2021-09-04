import React from 'react';
import { follow } from '../../../../requests/get/userFollows/userFollows.type';

interface Props {
  follows: follow[];
}

export const FollowedList: React.FC<Props> = ({ follows }) => {
  return <div>{follows.map((follow: follow) => follow.to_name)}</div>;
};
