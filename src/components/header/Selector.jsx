import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

import scss from './selector.module.scss';

const Selector = ({ className }) => {
  const options = [
    // { value: 'chocolate', label: 'Chocolate' },
    // { value: 'strawberry', label: 'Strawberry' },
    // { value: 'vanilla', label: 'Vanilla' },
  ];
  const selector = {
    container: (provided) => ({
      ...provided,
      flex: 1,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f7f6f3',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '0',
    }),
  };

  return (
    <div className={classNames(className, scss._root)}>
      <Select
        styles={selector}
        placeholder="Selecione um repositório"
        noOptionsMessage={() => 'Repositório não encontrado'}
        options={options}
      />
    </div>
  );
};

export default Selector;
