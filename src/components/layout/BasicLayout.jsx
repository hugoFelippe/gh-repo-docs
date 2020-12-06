import React from 'react';

import scss from './basiclayout.module.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Navigator from '../navigation/Navigator';
import Selector from '../header/Selector';

const BasicLayout = () => {
  return (
    <div className={scss._root}>
      <Selector className={scss._selector} />
      <Header className={scss._header} />
      <Navigator className={scss._navigator} />
      <main className={scss._main}>
        <Footer />
      </main>
    </div>
  );
};

export default BasicLayout;
