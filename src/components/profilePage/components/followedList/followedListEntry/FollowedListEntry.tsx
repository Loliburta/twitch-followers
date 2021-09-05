interface Props {
  from_id: string;
  from_login: string;
  from_name: string;
  to_id: string;
  to_login: string;
  to_name: string;
  followed_at: Date;
}

export const FollowedListEntry: React.FC<Props> = ({
  from_id,
  from_login,
  from_name,
  to_id,
  to_name,
  followed_at,
}) => {
  return (
    <div>
      <p>{from_id}</p>
      <p>{from_login}</p>
      <p>{from_name}</p>
      <p>{to_id}</p>
      <p>{to_name}</p>
      <p>{followed_at}</p>
    </div>
  );
};
