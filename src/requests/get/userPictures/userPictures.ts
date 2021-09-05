//https://dev.twitch.tv/docs/api/reference#get-users
import { userPicturesType } from './userPictures.type';
import { headers } from '../../headers';

let url = 'https://api.twitch.tv/helix/users?';
export const userPictures = async (
  userLogin: string
): Promise<userPicturesType | undefined> => {
  try {
    const request = await fetch(url + userLogin, { headers: headers });
    const res = await request.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
