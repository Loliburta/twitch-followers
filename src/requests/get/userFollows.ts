//https://dev.twitch.tv/docs/api/reference/#get-users-follows
import { headers } from '../headers';

let url = 'https://api.twitch.tv/helix/users/follows?first=100&from_id=';
export const userFollows = async (userId: string) => {
  console.log(process.env.REACT_APP_OAUTH_CODE);
  try {
    const request = await fetch(url + userId, { headers: headers });
    return await request.json();
  } catch (err) {
    console.log(err);
  }
};
