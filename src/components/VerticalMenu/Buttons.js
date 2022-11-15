import Button from '@mui/material/Button';
import { useState } from 'react';
import VerticalMenu2 from './VerticalMenu2';
import { Styles } from './Styles.js';
import { Link } from 'react-router-dom';

const Buttons = () => {
  const [isShown, setIsShown] = useState(false);

  const menuHandler = () => {
    setIsShown(current => !current);
  };

  const home = (
    <Link to='/' style={Styles.menuButtons}>
      HOME
    </Link>
  );
  const nba = (
    <Link to='/articles' style={Styles.menuButtons}>
      NBA
    </Link>
  );
  const dealbook = (
    <Link to='/dealbook' style={Styles.menuButtons}>
      DEALBOOK
    </Link>
  );

  const sections = [
    home,
    nba,
    'NFL',
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
