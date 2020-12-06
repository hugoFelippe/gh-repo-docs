import React from 'react';
import classNames from 'classnames';

import scss from './navigator.module.scss';

const Navigator = ({ className }) => {
  return <nav className={classNames(className, scss._root)}>navigator</nav>;
};

export default Navigator;
