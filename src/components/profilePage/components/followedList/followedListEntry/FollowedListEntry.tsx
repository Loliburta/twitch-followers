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
  return (
    <div className='entry'>
      <p>
        the login is {login} but to_name is {to_name}
      </p>

      <p>{to_name}</p>
      {view_count}
      <img src={profile_image_url} alt='' className='entry__img' />
      <p>{followed_at}</p>
    </div>
  );
};
