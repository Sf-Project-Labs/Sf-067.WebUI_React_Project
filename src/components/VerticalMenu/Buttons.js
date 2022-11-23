import Button from '@mui/material/Button';
import { useState } from 'react';
import VerticalMenu2 from './VerticalMenu2';
import { styles } from './styles.js';
import { Link } from 'react-router-dom';

const Buttons = () => {
  const [isShown, setIsShown] = useState(false);

  const menuHandler = () => {
    setIsShown(current => !current);
  };

  const home = (
    <Link style={styles.menuButtons} to='/'>
      HOME
    </Link>
  );
  const nba = (
    <Link style={styles.menuButtons} to='/articles'>
      NBA
    </Link>
  );
  const dealbook = (
    <Link style={styles.menuButtons} to='/dealbook'>
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
      <Button key={index} onClick={menuHandler} sx={styles.menuButtons} disableRipple>
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
