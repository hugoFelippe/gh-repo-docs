import React from 'react';
import Button from '../button/Button';
import { VscGithub } from 'react-icons/vsc';

import scss from './loginbutton.module.scss';

const LoginButton = () => {
  return (
    <>
      <Button color="black" type="outline">
        <VscGithub /> Entrar com GitHub
      </Button>
    </>
  );
};

export default LoginButton;
