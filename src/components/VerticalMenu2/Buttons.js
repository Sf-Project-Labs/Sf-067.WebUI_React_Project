import React from 'react';
import { Styles } from './Styles';

const Buttons = props => {
  const subMenuButtons = [
    <button style={Styles.subMenuButtons}>AFC East</button>,
    <button style={Styles.subMenuButtons}>AFC North</button>,
    <button style={Styles.active}>AFC South</button>,
    <button style={Styles.subMenuButtons}>AFC West</button>,
    <button style={Styles.subMenuButtons}>NFC East</button>,
    <button style={Styles.subMenuButtons}>NFC North</button>,
    <button style={Styles.subMenuButtons}>NFC South</button>,
    <button style={Styles.subMenuButtons}>NFC West</button>,
  ];

  return subMenuButtons;
};

export default Buttons;
