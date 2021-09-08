import { useState, useEffect } from 'react';
interface Props {
  from_id: string;
  from_login: string;
  from_name: string;
  to_id: string;
  to_login: string;
  to_name: string;
  followed_at: Date;
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: Date;
}

export const FollowedListEntry: React.FC<Props> = ({
  from_id,
  from_login,
  from_name,
  to_id,
  to_name,
  followed_at,
  view_count,
  profile_image_url,
  offline_image_url,
  login,
}) => {
  const [readableDate, setReadableDate] = useState('');
  const getReadableDate = (followed_at: string) => {
    const year = followed_at.slice(0, 4);
    const month = followed_at.slice(5, 7);
    const day = followed_at.slice(8, 10);
    return `${day}.${month}.${year}`;
  };
  useEffect(() => {
    setReadableDate(getReadableDate(followed_at.toString()));
  }, [followed_at]);
  return (
    <div className='entry'>
      <a
        href={`https://www.twitch.tv/${login}`}
        target='_blank'
        rel='noreferrer'
      >
        <img src={profile_image_url} alt='Profile' className='entry__img' />
      </a>
      <div className='entry__info'>
        <a
          href={`https://www.twitch.tv/${login}`}
          target='_blank'
          rel='noreferrer'
          className='entry__info__login'
        >
          {to_name}
        </a>
        <p>{view_count} views</p>
        <p>followed at</p>
        <p>{readableDate}</p>
      </div>
    </div>
  );
};
