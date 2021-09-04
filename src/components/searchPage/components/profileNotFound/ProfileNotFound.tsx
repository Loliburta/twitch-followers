import React from 'react';

interface Props {
  profileName: string;
}
export const ProfileNotFound: React.FC<Props> = ({ profileName }) => {
  return <div>{profileName} doesn't exist, try again</div>;
};
