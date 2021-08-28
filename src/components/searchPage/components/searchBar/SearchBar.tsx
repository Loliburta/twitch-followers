import { useContext } from 'react';
import { userLoginContext } from '../../../../utils/userLoginContext';

export const SearchBar = () => {
  const [, setUserLogin] = useContext(userLoginContext);

  return (
    <input
      onChange={(e) => setUserLogin(e.target.value)}
      type='text'
      className='SearchBar'
      placeholder='Search'
    ></input>
  );
};
