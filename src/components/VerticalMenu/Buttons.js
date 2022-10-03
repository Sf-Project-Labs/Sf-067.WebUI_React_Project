import React from 'react';
import { Styles } from './Styles';
import CircleIcon from '@mui/icons-material/Circle';

const Buttons = props => {
  const menuButtons = [
    <button style={Styles.activeMainButton}>
      <CircleIcon style={Styles.circleIcon} />
      {'Home'}
    </button>,
    <button style={Styles.mainButtonStyle}>NBA</button>,
    <button style={Styles.mainButtonStyle}>nfl</button>,
    <button style={Styles.mainButtonStyle}>mlb</button>,
    <button style={Styles.mainButtonStyle}>nhl</button>,
    <button style={Styles.mainButtonStyle}>cbb</button>,
    <button style={Styles.mainButtonStyle}>cfb</button>,
    <button style={Styles.mainButtonStyle}>nascar</button>,
    <button style={Styles.mainButtonStyle}>golf</button>,
    <button style={Styles.mainButtonStyle}>soccer</button>,
    <button style={Styles.mainButtonStyle}>team hub</button>,
    <button style={Styles.mainButtonStyle}>lifestyle</button>,
    <button style={Styles.mainButtonStyle}>dealbook</button>,
    <button style={Styles.mainButtonStyle}>video</button>,
  ];

  return menuButtons;
};

export default Buttons;
