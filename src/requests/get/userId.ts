//https://discuss.dev.twitch.tv/t/getting-user-ids/13806
import { headers } from '../headers';

let url = 'https://api.twitch.tv/helix/users?login=';
export const userId = async (userLogin: string) => {
  try {
    const request = await fetch(url + userLogin, { headers: headers });
    return await request.json();
  } catch (err) {
    console.log(err);
  }
};