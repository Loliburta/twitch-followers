export interface userFollowsType {
  total: number;
  data: follow[];
  pagination: { cursor: string };
}

export interface follow {
  from_id: string;
  from_login: string;
  from_name: string;
  to_id: string;
  to_login: string;
  to_name: string;
  followed_at: Date;
}
