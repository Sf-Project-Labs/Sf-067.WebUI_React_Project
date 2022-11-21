import React, { useState } from 'react';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { NavLink } from 'react-router-dom';
import { styles } from './Styles';

export default function UserMenuList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const mySurveys = (
    <NavLink to='/surveys' style={{ textDecoration: 'none', color: '#222' }}>
      My Surveys
    </NavLink>
  );

  const userPage = (
    <NavLink to='/user' style={{ textDecoration: 'none', color: '#222' }}>
      View Profile
    </NavLink>
  );

  const listItems = ['John@gmail.com', userPage, 'Change Password', mySurveys, 'Team Hub'];

  const mapedListItems = listItems.map((listitem, index) => {
    return (
      <ListItemButton sx={styles.userDropdownHover} key={index} disableRipple>
        {listitem}
      </ListItemButton>
    );
  });

  return (
    <Box>
      <List
        sx={{
          width: '80%',
          maxWidth: 220,
          bgcolor: 'background.paper',
          position: 'absolute',
          top: '6px',
          fontSize: '14px',
        }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <ListItemButton
          onClick={handleClick}
          sx={{ background: 'white', '&:hover': { background: '#FFFFFF' } }}
          disableRipple
        >
          <ListItemIcon>
            <Avatar
              alt='John Doe'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVcje_7FwYnY1JKP55yfAP53ZmRfPlEcoygnCeMH2bg&s'
              sx={{ width: '56', height: '56' }}
            />
          </ListItemIcon>
          <ListItemText primary='John Doe' />
          {open ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {mapedListItems}
            <ListItemButton sx={styles.logout} disableRipple>
              <ListItemText primary='Log out' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
