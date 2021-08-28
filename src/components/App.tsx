import { SearchPage } from './searchPage/SearchPage';
import { userLoginContext } from '../utils/userLoginContext';
import { useState } from 'react';

export const App = () => {
  const [userLogin, setUserLogin] = useState('');
  return (
    <div>
      <userLoginContext.Provider value={[userLogin, setUserLogin]}>
        <SearchPage />
      </userLoginContext.Provider>
    </div>
  );
};
