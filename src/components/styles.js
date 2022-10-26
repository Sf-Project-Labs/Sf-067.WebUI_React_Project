export const styles = {
  mainImageTitle: {
    position: 'absolute',
    height: 40,
    width: 134,
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '700',
    backgroundColor: '#2F2F2F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtn: {
    position: 'absolute',
    top: '115px',
    right: '0px',
    padding: '0px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  mainArticleCard: {
    minWidth: 202,
    height: 294,
    border: '12px solid transparent',
  },
  carouselCard: {
    width: 421,
    height: 291,
    borderRadius: 0,
    backgroundColor: '#F6F6F6',
    boxShadow: 0,
  },
  largeButton: {
    width: 175,
    height: 42,
    bottom: 0,
    position: 'absolute',
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#D72130',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#E02232',
    },
  },
  navButtons: {
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
  buttonWrapper: {
    position: 'absolute',
    height: '100px',
    backgroundColor: 'transparent',
    top: 'calc(50% - 70px)',
    '&:hover': {
      '& $button': {
        backgroundColor: 'black',
        filter: 'brightness(120%)',
        opacity: '0.4',
      },
    },
  },
};
