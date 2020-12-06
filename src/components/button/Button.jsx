import React from 'react';
import classNames from 'classnames';

import scss from './button.module.scss';

const Button = (props) => {
  const { type, color } = props;
  console.log(type, color, scss);
  return (
    <button
      className={classNames(props.className, scss._root, {
        [scss[`_${type || 'dense'}`]]: true,
        [scss[`_${color || 'black'}`]]: true,
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
