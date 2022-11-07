import { Button } from '@mui/material';
import { Styles } from './Styles';

const Buttons = () => {
  const sections = [
    'AFC East',
    'AFC North',
    'AFC South',
    'AFC West',
    'NFC East',
    'NFC North',
    'NFC South',
    'NFC West',
  ];

  const subMenuButtonsMap = sections.map((element, index) => {
    return (
      <Button key={index} sx={Styles.subMenuButtons} disableRipple>
        {element}
      </Button>
    );
  });

  return subMenuButtonsMap;
};

export default Buttons;
