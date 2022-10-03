import React from 'react';
import FollowMedia from './FollowMedia';
import MenuButtons from './MenuButtons';
import { Styles } from './Styles.js';

const VerticalMenu = props => {
  return (
    <React.Fragment>
      <div style={Styles.verticalMenu}>
        <div style={Styles.greyAttribute}></div>
        <MenuButtons></MenuButtons>
        <FollowMedia></FollowMedia>
      </div>
    </React.Fragment>
  );
};
export default VerticalMenu;
