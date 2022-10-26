import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import { styles } from '../styles';
import { Box } from '@mui/system';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export const CarouselCard = () => {
  var items = [
    {
      date: 'Published / 20.09.2019',
      name: 'London Games return in 2019',
      description:
        'Register to receive the latest news on ticket sales for the four NFL London Games in 2019!',
    },
    {
      date: 'Published / 22.10.2020',
      name: 'Raiders release',
      description: 'After a five-year stint with the Oakland Raiders',
    },
    {
      date: 'Published / 22.10.2021',
      name: 'Dummy Data',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      date: 'Published / 22.10.2022',
      name: 'Dummy Data vol.2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const indicatorArr = ['01', '02', '03', '04'];

  return (
    <Carousel
      autoPlay={false}
      fullHeightHover={false}
      navButtonsAlwaysVisible={true}
      IndicatorIcon={indicatorArr}
      navButtonsProps={{
        style: {
          marginLeft: 200,
          backgroundColor: 'transparent',
          borderRadius: '50%',
          border: '1px solid',
          borderColor: '#979797',
          color: '#979797',
          '&:hover': {
            color: '#C63638',
          },
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: '0',
          top: 'unset',
        },
      }}
      NextIcon={<ArrowForwardIosRoundedIcon />}
      PrevIcon={<ArrowBackIosRoundedIcon />}
      indicatorIconButtonProps={{
        style: {
          paddingLeft: '10px',
          color: '#B2B2B2',
          backgroundColor: 'transparent',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '22px',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          // backgroundColor: 'transparent',
          color: '#C63638',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '22px',
        },
      }}
      indicatorContainerProps={{
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '30px',
          marginBottom: '39px',
          marginRight: '70px',
          float: 'right',
        },
      }}
      sx={{ width: 421 }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper sx={{ ...styles.carouselCard }}>
      <Box sx={{ pt: 5, pl: 5, pr: 1 }}>
        <Typography sx={{ color: '#7F7B7B', fontSize: 14, fontWeight: 400 }}>
          {props.item.date}
        </Typography>
        <Typography sx={{ color: '#C63638', fontSize: 16, fontWeight: 600, mt: 2 }}>
          {props.item.name}
        </Typography>
        <Typography
          sx={{ color: '#2B2F43', fontSize: 22, fontWeight: 700, lineHeight: 'normal', mt: 1 }}
        >
          {props.item.description}
        </Typography>
      </Box>
      <Button disableRipple sx={{ ...styles.largeButton }}>
        More
      </Button>
    </Paper>
  );
}

/// find how to disable click effect
