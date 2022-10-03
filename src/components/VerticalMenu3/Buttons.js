import React from 'react';
import { Styles } from './Styles';

const Buttons = props => {
  const subMenu2Buttons = [
    <button style={Styles.subMenuButtons}>Houston</button>,
    <button style={Styles.subMenuButtons}>Indianapolis</button>,
    <button style={Styles.subMenuButtons}>Jacksonville</button>,
    <button style={Styles.active}>Tennessee</button>,
  ];

  return subMenu2Buttons;
};

export default Buttons;
