import Button from '@mui/material/Button';
import { useState } from 'react';
import VerticalMenu2 from './VerticalMenu2';
import { Styles } from './Styles.js';
import { NavLink } from 'react-router-dom';

const Buttons = () => {
  const [isShown, setIsShown] = useState(false);

  const menuHandler = () => {
    setIsShown(current => !current);
  };

  const home = (
    <NavLink activeClassName={Styles.activeLinks} to='/' style={Styles.links}>
      HOME
    </NavLink>
  );
  const nfl = (
    <NavLink activeClassName={Styles.activeLinks} to='/articles' style={Styles.links}>
      NFL
    </NavLink>
  );
  const dealbook = (
    <NavLink to='/dealbook' style={Styles.links}>
      DEALBOOK
    </NavLink>
  );

  const sections = [
    home,
    nfl,
    'NBA',
    'MLB',
    'NHL',
    'CBB',
    'CFB',
    'NASCAR',
    'GOLF',
    'SOCCER',
    'TEAM HUB',
    'lifestyle',
    dealbook,
    'video',
  ];

  const menuButtonsMap = sections.map((element, index) => {
    return (
      <Button key={index} onClick={menuHandler} sx={Styles.menuButtons} disableRipple>
        {element}
      </Button>
    );
  });

  return (
    <>
      {menuButtonsMap}
      {isShown && <VerticalMenu2 />}
    </>
  );
};

export default Buttons;
