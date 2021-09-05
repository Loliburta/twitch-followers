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
            <Route
              path={[
                `${process.env.PUBLIC_URL}/`,
                `${process.env.PUBLIC_URL}/error/:USER_LOGIN`,
              ]}
              exact
            >
              <SearchPage />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/:USER_LOGIN`} exact>
              <ProfilePage />
            </Route>
          </userLoginContext.Provider>
        </Switch>
      </div>
    </Router>
  );
};
