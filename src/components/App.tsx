import { SearchPage } from './searchPage/SearchPage';
import { ProfilePage } from './profilePage/ProfilePage';
import { userLoginContext } from '../utils/userLoginContext';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = () => {
  const [userLogin, setUserLogin] = useState('');
  return (
    <Router>
      <div>
        <Switch>
          <userLoginContext.Provider value={[userLogin, setUserLogin]}>
            <Route path={`${process.env.PUBLIC_URL}/`} exact>
              <SearchPage />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/:USER_LOGIN`}>
              <ProfilePage />
            </Route>
          </userLoginContext.Provider>
        </Switch>
      </div>
    </Router>
  );
};
