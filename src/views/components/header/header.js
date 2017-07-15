import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import GitHubLogo from '../github-logo';

import './header.css';


const Header = ({authenticated, signOut}) => (
  <header className="header">
    <div className="g-row">
      <div className="g-col">
        <h1 className="header__title">Todo Redux Saga</h1>

        <ul className="header__actions">
          {authenticated ? <li><Button onClick={signOut}>Sign out</Button></li> : null}
          <li>
            <a className="link link--github" href="https://github.com/r-park/todo-redux-saga">
              <GitHubLogo />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


export default Header;
