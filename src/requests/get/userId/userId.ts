//https://dev.twitch.tv/docs/api/reference#get-users
import { userIdType } from './userId.type';
import { headers } from '../../headers';

let url = 'https://api.twitch.tv/helix/users?login=';
export const userId = async (
  userLogin: string
): Promise<userIdType | undefined> => {
  try {
    const request = await fetch(url + userLogin, { headers: headers });
    const res = await request.json();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
