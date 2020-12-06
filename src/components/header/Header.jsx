import React from 'react';
import classNames from 'classnames';

import scss from './header.module.scss';
import LoginButton from './LoginButton';

const Header = ({ className }) => {
  return (
    <header className={classNames(className, scss._root)}>
      <div>teste as4d5sd6f s5df 5sdfg fd5g 5</div>
      <LoginButton />
    </header>
  );
};

export default Header;
