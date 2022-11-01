import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

/*--------------------------------------------------------------------
this element is built, but not in use at this stage of development
 -------------------------------------------------------------------*/

const Buttons = () => {
  const lightGrey = {
    100: '#F8F8F8',
  };

  const fadedRed = {
    500: 'rgba(215, 33, 48, 0.11)',
  };

  const CustomButton = styled(ButtonUnstyled)`
    display: flex;
    justify-content: flex-start;
    align-items: left;
    font-family: roboto, sans-serif;
    width: 100%;
    font-size: 14px;
    background-color: ${lightGrey[100]};
    padding: 12px 24px;
    color: 'black';
    transition: all 150ms ease;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${fadedRed[500]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${fadedRed[500]};
    }
  `;

  const sections = ['Houston', 'Indianapolis', 'Jacksonville', 'Tennessee'];

  const subMenu3ButtonsMap = sections.map((element, index) => {
    return <CustomButton key={index}> {element} </CustomButton>;
  });

  return subMenu3ButtonsMap;
};

export default Buttons;
