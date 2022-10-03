import React from 'react';
import { Styles } from './Styles';
import Buttons from './Buttons';

const VerticalMenu2 = props => {
  return (
    <div style={Styles.VerticalMenu2}>
      <div style={Styles.buttonWrapper}>
        <div style={Styles.redElement}></div>
        <Buttons></Buttons>
      </div>
    </div>
  );
};

export default VerticalMenu2;
